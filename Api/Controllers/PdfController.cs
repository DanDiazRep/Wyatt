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
            Value partBack = null;
            Value partBackMaterial = null;
            Value partBackColor = null;
            Value partBackFrame = null;
            Value partBackHeadrest = null;
            Option hasBack = configurator.Options.Find(x => x.Code == "back");
            Option hasBackFrame = configurator.Options.Find(x => x.Code == "back-frame");
            Option hasBackMaterial = configurator.Options.Find(x => x.Code == "back-material");
            Option hasBackColor = configurator.Options.Find(x => x.Code == "back-color");
            Option hasBackHeadrest = configurator.Options.Find(x => x.Code == "back-headrest");
            Option hasBase = configurator.Options.Find(x => x.Code == "base");            
            Option hasMecha = configurator.Options.Find(x => x.Code == "mechanism");
            Option hasArm = configurator.Options.Find(x => x.Code == "arm");
            Option hasGrade = configurator.Options.Find(x => x.Code == "grade");
            Option hasColorSeat = configurator.Options.Find(x => x.Code == "colorSeat");
            Option hasColorBack = configurator.Options.Find(x => x.Code == "colorBack");
            string currentFabricName = configurator.FabricName;
            string currentFabricPartNumber = configurator.FabricPartNumber;
            bool hasSeatPad = configurator.SeatPad;

            if (hasBack != null && hasBackMaterial != null && hasBackMaterial != null && hasBackFrame != null && hasBackHeadrest != null)
            {
                partBack = hasBack.Values.Find(x => x.Active == true);
                partBackMaterial = hasBackMaterial.Values.Find(x => x.Active == true);
                partBackColor = hasBackColor.Values.Find(x => x.Active == true);
                partBackFrame = hasBackFrame.Values.Find(x => x.Active == true);
                partBackHeadrest = hasBackHeadrest.Values.Find(x => x.Active == true);

                if (partBackHeadrest.Name != "With Headrest")
                    html = html.Replace("{back}", partBack.Name + " Back with " + partBackFrame.Name + 
                                                " Outer Frame and " + partBackColor.Name + " " + 
                                                partBackMaterial.Name);
                else
                    html = html.Replace("{back}", partBack.Name + " Back with " + partBackFrame.Name +
                                                " Outer Frame," + partBackColor.Name + " " +
                                                partBackMaterial.Name + " and Headrest");

            }

            else if (hasBack != null && hasBackMaterial != null && hasBackMaterial != null)
            {
                partBack = hasBack.Values.Find(x => x.Active == true);
                partBackMaterial = hasBackMaterial.Values.Find(x => x.Active == true);
                partBackColor = hasBackColor.Values.Find(x => x.Active == true);

                html = html.Replace("{back}", partBack.Name + " " + partBackColor.Name + " " + partBackMaterial.Name);
            }

            else if (hasBack != null)
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

                if (myPart.Name == "Grade 1" && (configurator.Name.ToLower().Contains("g6") || configurator.Name.ToLower().Contains("freeride")))
                {
                    html = html.Replace("{grade}", myPart.Name + "<br>(Removable Seat Cover)");
                }
                else
                {
                    html = html.Replace("{grade}", myPart.Name + "<br>(Fully Upholstered)");
                }
                

                
            }
            else if (hasColorSeat != null)
            {
                myPart = hasColorSeat.Values.Find(x => x.Active == true);
                PartCode += myPart.PartNumber;
                html = html.Replace("FABRIC:", "SEAT COLOR:");
                html = html.Replace("{grade}", myPart.Name);
   
            }
            else
            {
                html = html.Replace("{grade}", "N/A");
            }           
            if (currentFabricName != null)
            {
                PartCode += "-" + currentFabricPartNumber;
            }
            else if (hasColorBack != null)
            {
                myPart = hasColorBack.Values.Find(x => x.Active == true);
                PartCode += "-" + myPart.PartNumber;
                html = html.Replace("PATTERN:", "BACK COLOR:");
                html = html.Replace("{fabric}", myPart.Name);
            }
            else {
                html = html.Replace("{fabric}", "N/A");
            }

            if (hasSeatPad)
            {
                configurator.TotalPrice += 90;
                
                html = html.Replace("(Fully Upholstered)", "(Removable Seat Cover)");
            }

            
            



            html = html.Replace("{name}", configurator.Name.ToUpper());
            html = html.Replace("{print}", Path.Combine(HttpContext.Current.Server.MapPath("~"), @"wwwroot\" + configurator.print));
            html = html.Replace("{TotalPrice}", configurator.TotalPrice.ToString());
            html = html.Replace("{code}", PartCode);
            html = html.Replace("{date}", DateTime.Now.ToString("d"));
            html = html.Replace("{fabric}", currentFabricName);
            var cssData = PdfGenerator.ParseStyleSheet(@"*{padding:0;margin:0;}
.invoice-container{
    font-size:12px;line-height:20px;
    font-family:'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
    color:#555;
} 
html, body {height: 700px;
    width:793px;}
.head{margin-bottom:0px;} 
.logo-image {width: 20%;} 
ul {margin: 0;list-style: none;padding: 0;} 
.underline td {border-bottom: 1px solid #eee;} 
.main{width:600px!important;} 
.col-50{width:30%} 
.col-40{width:40%} 
.image {width: 200px}
.productImg {margin: 0px 0px 0px -50px;width: 250px;padding:0;} 
.content{width:400px !important;} 
.titleName{font-size: 30px;} 
#namerow{margin-bottom:40px;}
#footerRow{
    position: fixed;
    
    top: 750px;    
    left: 60px;
    width: 480px; height: 10px;
    margin-top: 0px; 
    border:0;
    border-top: solid black 1px; 
    font-size:13px;
    line-height:20px;
    font-family:'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
    color:#555;} 
#footerTable {
width: 480px;
}
#leftcol{width: 50%, text-aling:left;} 
#rightcol{width: 50%, text-align: right}",
true);

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
