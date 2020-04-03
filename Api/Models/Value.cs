using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api.Models
{
    public class Value
    {
        public string Name { get; set; }
        public bool Active { get; set; }
        public string PartNumber { get; set; }
        public int Price { get; set; }
    }
}