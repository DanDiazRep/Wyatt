using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api.Models
{
    public class Option
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public List<string> RelatedLayers { get; set; }
        public List<Value> Values { get; set; }
        
    }
}