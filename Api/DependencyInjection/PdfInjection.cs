using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace Api.DependencyInjection
{
    public class PdfInjection: IPdfInjection
    {
        private readonly IHostingEnvironment _appEnvironment;
        //readonly IGeneratePdf _generatePdf;
        //private readonly Logger<PdfController> _logger;

        public PdfInjection(IHostingEnvironment appEnvironment)
        {
            //_logger = logger;
            //_generatePdf = generatePdf;
            _appEnvironment = appEnvironment;
        }

        public IHostingEnvironment GetEnvironment() {
            return _appEnvironment;
        }
    }
}