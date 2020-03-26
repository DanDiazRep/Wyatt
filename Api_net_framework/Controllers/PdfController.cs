using System;
using System.IO;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Api.Models;
using System.Web;
using RouteAttribute = System.Web.Http.RouteAttribute;
using PdfSharp.Pdf;
using TheArtOfDev.HtmlRenderer.PdfSharp;
using PdfSharp;
using System.Diagnostics;

namespace Api.Controllers
{

    public class PdfController : ApiController
    {

        // api/pdf
        [Route("api/pdf")]
        [HttpPost]
        public string CreatePdf(Configurator configurator)
        {
            PdfDocument pdfDocument = new PdfDocument();
            string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Scripts\test");
            string html = File.ReadAllText(HttpContext.Current.Server.MapPath("~/Views/Home/test.cshtml"));
            var back = configurator.Options.Find(x => x.Code == "back").Values.Find(x => x.Active == true);
            var base_var = configurator.Options.Find(x => x.Code == "base").Values.Find(x => x.Active == true);
            var mechanism = configurator.Options.Find(x => x.Code == "mechanism").Values.Find(x => x.Active == true);
            var arm_style = configurator.Options.Find(x => x.Code == "arm").Values.Find(x => x.Active == true);
            var grade = configurator.Options.Find(x => x.Code == "grade").Values.Find(x => x.Active == true);
            html.Replace("{name}", @"TEST");
            html = html.Replace("{print}", Path.Combine(HttpContext.Current.Server.MapPath("~"), @"wwwroot\" + configurator.print));
            html = html.Replace("{TotalPrice}", configurator.TotalPrice.ToString());
            html = html.Replace("{code}", configurator.Code);
            html = html.Replace("{back}", back.Name);
            html = html.Replace("{arm}", arm_style.Name);
            html = html.Replace("{mechanism}", mechanism.Name);
            html = html.Replace("{base}", base_var.Name);
            html = html.Replace("{grade}", grade.Name);
            var cssData = PdfGenerator.ParseStyleSheet(@".invoice-container{margin:auto;padding:20px;font-size:12px;line-height:20px;font-family:'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;color:#555;} .head{margin-bottom:100px;} .logo-image {width: 30%;} .productImg {width: 100px;} ul {margin: 0;list-style: none;padding: 0;} .underline td {border-bottom: 1px solid #eee;} .main{width:600px!important;} .col-50{width:50%} .col-40{width:40%} .productImg {margin: 0px 0px 0px -140px;width: 400px;} .image{vertical-align: middle;overflow: hidden;width:200px !important;display: block;} .content{width:400px!important;max-width:400px;}", true);
            PdfDocument pdf = PdfGenerator.GeneratePdf(html, PageSize.A4, 60, cssData);
            string filename = Guid.NewGuid() + ".pdf";
            pdf.Save(Path.Combine(HttpContext.Current.Server.MapPath("~"), @"wwwroot\" + filename));

            return filename;

            /* GlobalConfig options = new GlobalConfig();

             options.SetMargins(0, 0, 0, 0)
                 .SetDocumentTitle("ahun no se we")
                 .SetPaperSize(System.Drawing.Printing.PaperKind.Letter);

             //string path = @"~/Views/Home/test.cshtml";
             //return html;
             byte[] pdfContent = new SimplePechkin(options).Convert(html);

             //string directory = "C:\\Users\\Juan\\Desktop\\";
             // Name of the PDF

             string filename = Guid.NewGuid() + ".pdf";
             File.WriteAllBytes(Path.Combine(HttpContext.Current.Server.MapPath("~"), @"wwwroot\" + filename), pdfContent);
             return filename;*/
        }

        public string Get()
        {
            return @"WORKING WITH CORS";
        }

        [Route("api/image")]
        [HttpPost]
        public HttpResponseMessage UploadImage(PdfImage postedFile)
        {
            Dictionary<string, object> dict = new Dictionary<string, object>();
            
            byte[] bytes = Convert.FromBase64String(postedFile.data.Replace("data:image/png;base64,", ""));

            string filename = Guid.NewGuid() + ".png";
            var filePath = Path.Combine(HttpContext.Current.Server.MapPath("~"), @"wwwroot\" + filename);
            //string filePath = "C:\\Users\\Juan\\Desktop\\"+ filename;
            File.WriteAllBytes(filePath, bytes);

            return Request.CreateErrorResponse(HttpStatusCode.OK, filename);
        }
    }
}
