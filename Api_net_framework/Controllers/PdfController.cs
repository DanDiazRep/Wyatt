using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Hosting;
using Api.Models;
using Pechkin;
using Pechkin.Synchronized;
using Microsoft.AspNetCore.Hosting;
using System.Web.Mvc;
using Api.DependencyInjection;
using System.Web;
using System.Web.Http.Cors;
using RazorLight;

namespace Api.Controllers
{
    
    public class PdfController : ApiController
    {

        // api/pdf
        public string Post(Configurator configurator)
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
    }
}
