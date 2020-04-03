using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Configurator
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string PartNumber { get; set; }
        public string LowFile { get; set; }
        public string MedFile { get; set; }
        public string HighFile { get; set; }
        public int Price { get; set; }
        public int TotalPrice { get; set; }
        public List<string> DefaultLayers { get; set; }
        public List<Option> Options { get; set; }
        public string print { get; set; }
    }
}