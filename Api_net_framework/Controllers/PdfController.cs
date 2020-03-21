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

namespace Api.Controllers
{
    public class PdfController : ApiController
    {
        private readonly HostingEnvironment _env;
        //readonly IGeneratePdf _generatePdf;
        //private readonly Logger<PdfController> _logger;

        public PdfController(HostingEnvironment env)
        {
            //_logger = logger;
            //_generatePdf = generatePdf;
            _env = env;
        }

        // api/pdf
        public string Get()
        {
            GlobalConfig options = new GlobalConfig();

            options.SetMargins(0, 0, 0, 0)
                .SetDocumentTitle("ahun no se we")
                .SetPaperSize(System.Drawing.Printing.PaperKind.Letter);
            //string path = Path.Combine(Directory.GetCurrentDirectory(), @"\\Asserts\\test.html");
            string path = Path.Combine(Environment.CurrentDirectory, @"Asserts\test.html");
            return path;
            //byte[] pdfContent = new SimplePechkin(options).Convert(File.ReadAllText(path));

            //string directory = "C:\\Users\\Juan\\Desktop\\";
            // Name of the PDF
            //string filename = "hello_world.pdf";
            //File.WriteAllBytes(directory + filename, pdfContent);
        }
        public async void Post([FromBody]Configurator configurator)
        {
            byte[] pdfContent = new SimplePechkin(new GlobalConfig()).Convert("<html><body><h1>Hello world!</h1></body></html>");
        }
    }
}
