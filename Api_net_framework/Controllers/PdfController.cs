using System;
using System.IO;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Api.Models;
using Pechkin;
using System.Web;
using RouteAttribute = System.Web.Http.RouteAttribute;

namespace Api.Controllers
{

    public class PdfController : ApiController
    {

        // api/pdf
        [Route("api/pdf")]
        [HttpPost]
        public string CreatePdf(Configurator configurator)
        {
            GlobalConfig options = new GlobalConfig();

            options.SetMargins(0, 0, 0, 0)
                .SetDocumentTitle("ahun no se we")
                .SetPaperSize(System.Drawing.Printing.PaperKind.Letter);
            string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Scripts\test");
            string html = File.ReadAllText(HttpContext.Current.Server.MapPath("~/Views/Home/test.cshtml"));
            html.Replace("{name}", configurator.Name);
            html.Replace("{print}", configurator.print);
            //string path = @"~/Views/Home/test.cshtml";
            //return html;
            byte[] pdfContent = new SimplePechkin(options).Convert(html);

            //string directory = "C:\\Users\\Juan\\Desktop\\";
            // Name of the PDF
            
            string filename = Guid.NewGuid() + ".pdf";
            File.WriteAllBytes(Path.Combine(HttpContext.Current.Server.MapPath("~"), @"wwwroot\" + filename), pdfContent);
            return filename;
        }

        public string Get()
        {
            return @"WORKING WITH CORS";
        }

        [Route("api/image")]
        [HttpPost]
        public HttpResponseMessage UploadImage(Image postedFile)
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
