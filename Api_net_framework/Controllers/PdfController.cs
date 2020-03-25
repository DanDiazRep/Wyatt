using System;
using System.IO;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Api.Models;
using System.Web;
using RouteAttribute = System.Web.Http.RouteAttribute;
using System.Drawing;
using PdfSharp.Pdf;
using TheArtOfDev.HtmlRenderer.PdfSharp;
using PdfSharp;

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
            html.Replace("{name}", @"TEST");
            html = html.Replace("{print}", Path.Combine(HttpContext.Current.Server.MapPath("~"), @"wwwroot\" + configurator.print));
            var cssData = PdfGenerator.ParseStyleSheet(@".invoice-container { max-width: 800px; margin: auto; padding: 20px; font-size: 15px; line-height: 20px; font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; color: #555; } .invoice-container table { width: 100%; line-height: inherit; text-align: left; } .invoice-container table td { padding: 2px; vertical-align: middle; } .invoice-container table tr td:nth-child(2) { text-align: left; } .invoice-container table tr.top table td { padding-bottom: 20px; } .invoice-container table tr.top table td.title { font-size: 45px; line-height: 45px; color: #333; } .invoice-container table tr.heading td { background: #eee; border-bottom: 1px solid #ddd; font-weight: bold; } .invoice-container table tr.details td { padding-bottom: 20px; } .invoice-container table tr.item td { border-bottom: 1px solid #eee; } .invoice-container table tr.item.last td { border-bottom: none; } .invoice-container table tr.total td:nth-child(2) { border-top: 2px solid #eee; font-weight: bold; } .productImg { margin: 0px 0px 0px -300px; width: 1000px; } .detailed td { border-bottom: 1px solid #eee; text-align: left; } ul { margin: 0; list-style: none; padding: 0; } .logo-image { width: 50%; }", false);
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
