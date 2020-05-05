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
        public HttpResponseMessage CreatePdf(Configurator configurator)
        {
            PdfDocument pdfDocument = new PdfDocument();
            string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Scripts\test");
            string html = File.ReadAllText(HttpContext.Current.Server.MapPath("~/Views/Home/test.cshtml"));
            string PartCode = configurator.PartNumber;
            Value myPart = null;
            Option hasBack = configurator.Options.Find(x => x.Code == "back");
            Option hasBase = configurator.Options.Find(x => x.Code == "base");
            Option hasMecha = configurator.Options.Find(x => x.Code == "mechanism");
            Option hasArm = configurator.Options.Find(x => x.Code == "arm");
            Option hasGrade = configurator.Options.Find(x => x.Code == "grade");
            Option hasColorSeat = configurator.Options.Find(x => x.Code == "colorSeat");
            Option hasColorBack = configurator.Options.Find(x => x.Code == "colorBack");

            if (hasBack != null)
            {
                myPart = hasBack.Values.Find(x => x.Active == true);
                //PartCode += myPart.PartNumber;
                html = html.Replace("{back}", myPart.Name);
            }
            else {
                html = html.Replace("{back}", "N/A");
            }

            if (hasBase != null) {
                myPart = hasBase.Values.Find(x => x.Active == true);
                PartCode += "-" + myPart.PartNumber;
                html = html.Replace("{base}", myPart.Name);
            }else
            {
                html = html.Replace("{base}", "N/A");
            }

            if (hasMecha != null)
            {
                myPart = hasMecha.Values.Find(x => x.Active == true);
                PartCode += "-" + myPart.PartNumber;
                html = html.Replace("{mechanism}", myPart.Name);
            }else
            {
                html = html.Replace("{mechanism}", "N/A");
            }

            if (hasArm != null)
            {
                myPart = hasArm.Values.Find(x => x.Active == true);
                PartCode += "-" + myPart.PartNumber;
                html = html.Replace("{arm}", myPart.Name);
            }else
            {
                html = html.Replace("{arm}", "N/A");
            }

            if (hasGrade != null)
            {
                myPart = hasGrade.Values.Find(x => x.Active == true);
                PartCode += "-" + myPart.PartNumber;
                html = html.Replace("{grade}", myPart.Name);
            }else
            {
                html = html.Replace("{grade}", "N/A");
            }
            if (hasColorSeat != null)
            {
                myPart = hasGrade.Values.Find(x => x.Active == true);
                PartCode += myPart.PartNumber;                
            }
            if (hasColorBack != null)
            {
                myPart = hasGrade.Values.Find(x => x.Active == true);
                PartCode += "-" + myPart.PartNumber;
            }



            html = html.Replace("{name}", configurator.Name.ToUpper());
            html = html.Replace("{print}", Path.Combine(HttpContext.Current.Server.MapPath("~"), @"wwwroot\" + configurator.print));
            html = html.Replace("{TotalPrice}", configurator.TotalPrice.ToString());
            html = html.Replace("{code}", PartCode);
            html = html.Replace("{date}", DateTime.Now.ToString("d"));
            var cssData = PdfGenerator.ParseStyleSheet(@"*{padding:0;margin:0;}.invoice-container{font-size:12px;line-height:20px;font-family:'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;color:#555;} .head{margin-bottom:0px;} .logo-image {width: 30%;} ul {margin: 0;list-style: none;padding: 0;} .underline td {border-bottom: 1px solid #eee;} .main{width:600px!important;} .col-50{width:30%} .col-40{width:40%} .image {width: 200px}.productImg {margin: 0px 0px 0px -50px;width: 250px;padding:0;} .content{width:400px !important;} .titleName{font-size: 30px;} #namerow{margin-bottom:40px;} #footerRow{position: absolute;bottom: 0px;width: 470px; height: 10px; margin-top: 200px; border:0;border-top: solid black 1px; font-size:15px;line-height:20px;font-family:'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;color:#555;} .leftcol{width: 50%, text-aling:left;} .rightcol{width: 50%, text-align: right}", true);
            PdfDocument pdf = PdfGenerator.GeneratePdf(html, PageSize.A4, 60, cssData);
            string filename = Guid.NewGuid() + ".pdf";
            pdf.Save(Path.Combine(HttpContext.Current.Server.MapPath("~"), @"wwwroot\" + filename));
            return Request.CreateErrorResponse(HttpStatusCode.OK, filename);

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
            File.WriteAllBytes(filePath, bytes);

            return Request.CreateErrorResponse(HttpStatusCode.OK, filename);
        }
    }
}
