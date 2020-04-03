using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api.DependencyInjection
{
    public interface IPdfInjection
    {
        IHostingEnvironment  GetEnvironment();
    }
}