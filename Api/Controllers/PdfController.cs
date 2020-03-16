using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Wkhtmltopdf.NetCore;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PdfController : ControllerBase
    {
        private readonly IHostingEnvironment _env;
        readonly IGeneratePdf _generatePdf;

        private readonly ILogger<PdfController> _logger;

        public PdfController(ILogger<PdfController> logger, IGeneratePdf generatePdf, IHostingEnvironment env)
        {
            _logger = logger;
            _generatePdf = generatePdf;
            _env = env;
        }

        [HttpGet]
        [EnableCors("AllowAllHeaders")]
        public IActionResult Get()
        {
            return Ok("ITS WORKING WITH CORS");
        }


        [HttpPost]
        [EnableCors("AllowAllHeaders")]
        public async Task<IActionResult> Post([FromBody] Configurator configurator)
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
            Configurator data = configurator;
            string contentRootPath = _env.ContentRootPath;
            string webRootPath = _env.WebRootPath;
            //var pdf = await _generatePdf.GetByteArrayViewInHtml(System.IO.File.ReadAllText("Assets/invoice.html"), data);
            //var pdfStream = new System.IO.MemoryStream();
            //pdfStream.Write(pdf, 0, pdf.Length);
            //pdfStream.Position = 0;
            string path = Guid.NewGuid() + ".pdf";
            System.IO.File.WriteAllBytes(webRootPath + "/" + path, await _generatePdf.GetByteArrayViewInHtml(System.IO.File.ReadAllText("Assets/invoice.cshtml"), data));
            return Ok(path);
        }
    }
}
