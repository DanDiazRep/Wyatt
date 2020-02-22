using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Wkhtmltopdf.NetCore;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PdfController : ControllerBase
    {
        readonly IGeneratePdf _generatePdf;

        private readonly ILogger<PdfController> _logger;

        public PdfController(ILogger<PdfController> logger, IGeneratePdf generatePdf)
        {
            _logger = logger;
            _generatePdf = generatePdf;
        }

        [HttpGet]
        public FileStreamResult Get()
        {
            var options = new ConvertOptions
            {
                PageMargins = new Wkhtmltopdf.NetCore.Options.Margins()
                {
                    Left = 0,
                    Right = 0
                }
            };
            _generatePdf.SetConvertOptions(options);
            var pdf = _generatePdf.GetPDF(System.IO.File.ReadAllText("Assets/TestInvoice1.html"));
            var pdfStream = new System.IO.MemoryStream();
            pdfStream.Write(pdf, 0, pdf.Length);
            pdfStream.Position = 0;
            return new FileStreamResult(pdfStream, "application/pdf");
        }
    }
}
