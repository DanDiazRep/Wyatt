using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Model
{
    public class Value
    {
        public string Name { get; set; }
        public bool Active { get; set; }
        public string PartNumber { get; set; }
        public int Price { get; set; }
    }
}
