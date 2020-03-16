//console.log("hellothere");
var allModels = [
  {
    Id: 1,
    Code: "freeride",
    Name: "Freeride",
    PartNumber: "411",
    Price: 649,
    ImgSrc: "assets/layout/freeride.png",
    Available: true,
    Layers: null,
    Options: null,
    DefaultLayers: null
  },
  {
    Id: 2,
    Code: "freeride-stool",
    Name: "Freeride Stool",
    PartNumber: "411",
    Price: 849,
    ImgSrc: "assets/layout/freeride-stool.png",
    Available: true,
    Layers: null,
    Options: null,
    DefaultLayers: null
  },
  {
    Id: 3,
    Code: "g6",
    Name: "G6",
    PartNumber: "711BMG",
    Price: 449,
    ImgSrc: "assets/layout/g6.png",
    Available: true,
    Layers: null,
    Options: null,
    DefaultLayers: null
  },
  {
    Id: 4,
    Code: "g6-stool",
    Name: "G6 Stool",
    PartNumber: "711BMG",
    Price: 649,
    ImgSrc: "assets/layout/g6-stool.png",
    Available: true,
    Layers: null,
    Options: null,
    DefaultLayers: null
  },
  {
    Id: 5,
    Code: "roswell",
    Name: "Roswell",
    PartNumber: "817",
    Price: 577,
    ImgSrc: "assets/layout/roswell.png",
    Available: true,
    Layers: null,
    Options: null,
    DefaultLayers: null
  },
  {
    Id: 6,
    Code: "extra",
    Name: "Extra",
    PartNumber: "5-MS-FA",
    Price: 339,
    ImgSrc: "assets/layout/extra.png",
    Available: true,
    Layers: null,
    Options: null,
    DefaultLayers: null
  },
  {
    Id: 7,
    Code: "la-mia",
    Name: "La Mia",
    PartNumber: "LM-MS",
    Price: 225,
    ImgSrc: "assets/layout/freeride-stool.png",
    Available: true,
    Layers: null,
    Options: null,
    DefaultLayers: null
  },
  {
    Id: 8,
    Code: "tether-stool",
    Name: "Tether Stool",
    PartNumber: "R05",
    Price: 350,
    ImgSrc: "assets/layout/tether-stool.png",
    Available: true,
    Layers: null,
    Options: null,
    DefaultLayers: null
  }
];


var getFreeride = {
  Code: "freeride",
  Name: "Freeride",
  PartNumber: "411",
  LowFile: "freeride-low.glb",
  MedFile: null,
  HighFile: "freeride-high.glb",
  Price: 649,
  ImgSrc: "assets/layout/freeride.png",
  DefaultLayers: [
    "Back1",
    "Casters",
    "Config2",
    "Arms2",
    "Seat",
    "SeatHolder",
    "Base",
    "BackHolder1"
  ],
  Options: [
    {
      Code: "back",
      Name: "Back",
      Description: "Back",
      Type: "F",
      RelatedLayers: ["BackHolder1", "BackHolder2", "Back1", "Back2", "Back3","Back4"],
      Values: [
        {
          Name: "Mid-Back Grey Mesh",
          Active: true,
          PartNumber: "BMG",
          Price: 0,
          Layers: [
            {
              Layer: "BackHolder1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "BackHolder2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back3",
              MaterialFile: null,
              Color: null,
              Visibility: false
              },
              {
                  Layer: "Back4",
                  MaterialFile: null,
                  Color: null,
                  Visibility: false
              },
              {
                  Layer: "Arms4",
                  MaterialFile: null,
                  Color: null,
                  Visibility: true
              },
              {
                  Layer: "Arms5",
                  MaterialFile: null,
                  Color: null,
                  Visibility: false
              }
          ]
        },
        {
          Name: "Mid-Back Black Vinyl",
          Active: false,
          PartNumber: "BVB",
          Price: 43,
          Layers: [
            {
              Layer: "BackHolder1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "BackHolder2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back3",
              MaterialFile: null,
              Color: null,
              Visibility: false
              },
              {
                  Layer: "Back4",
                  MaterialFile: null,
                  Color: null,
                  Visibility: true
              },
              {
                  Layer: "Arms4",
                  MaterialFile: null,
                  Color: null,
                  Visibility: true
              },
              {
                  Layer: "Arms5",
                  MaterialFile: null,
                  Color: null,
                  Visibility: false
              }
          ]
        },
        {
          Name: "Grey Fabric Back",
          Active: false,
          PartNumber: "BFG",
          Price: 50,
          Layers: [
            {
              Layer: "BackHolder1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "BackHolder2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back3",
              MaterialFile: null,
              Color: null,
              Visibility: false
              },
              {
                  Layer: "Back4",
                  MaterialFile: null,
                  Color: null,
                  Visibility: true
              },
              {
                  Layer: "Arms4",
                  MaterialFile: null,
                  Color: null,
                  Visibility: true
              },
              {
                  Layer: "Arms5",
                  MaterialFile: null,
                  Color: null,
                  Visibility: false
              }
          ]
        },
        {
          Name: "High-Back Black Vinyl",
          Active: false,
          PartNumber: "AVB",
          Price: 120,
          Layers: [
            {
              Layer: "BackHolder2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "BackHolder1",
              MaterialFile: null,
              Color: null,
              Visibility: false
              },
              {
                  Layer: "Back4",
                  MaterialFile: null,
                  Color: null,
                  Visibility: false
              },
            {
              Layer: "Back3",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms4",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms5",
              MaterialFile: null,
              Color: null,
              Visibility: true
            }
          ]
        }
      ]
    }, // BACK
    {
      Code: "base",
      Name: "Base",
      Description: "Base",
      Type: "M",
      RelatedLayers: ["Base"],
      Values: [
        {
          Name: "Nylon Base",
          Active: true,
          PartNumber: "BN",
          Price: 0,
          Move: true,
          Layers: [
            {
              Layer: "Base",
              MaterialFile: "/freeride/base/base",
              Color: null,
              Visibility: true
            }
          ]
        },
        {
          Name: "Aluminum Base",
          Active: false,
          PartNumber: "BA",
          Price: 60,
          Move: true,
          Layers: [
            {
              Layer: "Base",
              MaterialFile: "/freeride/base/base",
              Color: null,
              Visibility: true
            }
          ]
        }
      ]
    }, // BASE
    {
      Code: "mechanism",
      Name: "Mechanism",
      Description: "Mechanism",
      Type: "F",
      RelatedLayers: ["Config1", "Config2"],
      Values: [
        {
          Name: "3 Position Tilting Locking Synchro Mechanism with Seat Slider",
          Active: false,
          PartNumber: "M3",
          Price: -55,
          Layers: [
            {
              Layer: "Config1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Config2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "5 Position Tilting Locking Synchro Mechanism with Seat Slider",
          Active: true,
          PartNumber: "M5",
          Price: 0,
          Layers: [
            {
              Layer: "Config1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Config2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            }
          ]
        }
      ]
    }, //MECHANISM
    {
      Code: "arm",
      Name: "Arm",
      Description: "Arm Style",
      Type: "F",
      RelatedLayers: ["Arms1", "Arms2", "Arms3", "Arms4", "Arms5"],
      Values: [
        {
          Name: "Armless option",
          Active: false,
          PartNumber: "A000",
          Price: -71,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms3",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms4",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms5",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "Height adjustable arms",
          Active: false,
          PartNumber: "A1DB",
          Price: -46,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms3",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms4",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms5",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "3D adjustable arms (black)",
          Active: true,
          PartNumber: "A3DB",
          Price: 0,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms3",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms4",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms5",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "4D adjustable arms (black)",
          Active: false,
          PartNumber: "A4DB",
          Price: 38,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms3",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms4",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms5",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "Fixed aluminum loop arms",
          Active: false,
          PartNumber: "AFA",
          Price: 65,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms3",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms4",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms5",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "BackHolder1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "BackHolder2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            }
          ]
        }
      ]
    }, //ARMS
    {
      Code: "grade",
      Name: "Seat Fabric Grade",
      Description: "Seat Fabric Grade",
      Type: "G",
      RelatedLayers: ["Seat"],
      Values: [
        {
          Code: "grade",
          Name: "Grade 1",
          Active: true,
          PartNumber: "1",
          Price: 0,
          Collections: [
            {
                Name: "Link",
                Active: false
            },
            {
                Name: "I.O.U",
                Active: true
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade",
          Name: "Grade V",
          Active: false,
          PartNumber: "V",
          Price: 41,
          Collections: [
            {
              Name: "Vinyl",
              Active: true
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade",
          Name: "Grade 2",
          Active: false,
          PartNumber: "2",
          Price: 66,
          Collections: [
            {
              Name: "Foundation 10",
              Active: true
            },
            {
              Name: "Key Largo",
              Active: false
            },
            {
              Name: "Patio",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade",
          Name: "Grade 3",
          Active: false,
          PartNumber: "3",
          Price: 109,
          Collections: [
            {
              Name: "Habersash",
              Active: true
            },
            {
              Name: "Echo",
              Active: false
            },
            {
              Name: "Cosmopolitan",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
          },
        {
              Code: "grade4",
              Name: "Grade 4",
              Active: false,
              PartNumber: "4",
              Price: 109,
              Collections: [
                  {
                      Name: "TBD",
                      Active: true
                  }
              ],
              Layers: [
                  {
                      Layer: "Seat"
                  }
              ]
          },
        {
              Code: "grade5",
              Name: "Grade 5",
              Active: false,
              PartNumber: "5",
              Price: 109,
              Collections: [
                  {
                      Name: "TBD",
                      Active: true
                  }
              ],
              Layers: [
                  {
                      Layer: "Seat"
                  }
              ]
          }
      ],
      Layers: [
        {
          Layer: "Seat"
        }
      ]
    } //GRADES AND FABRICS
  ]
};
var getFreerideStool = {
  Code: "freerideStool",
  Name: "Freeride Stool",
  PartNumber: "411",
  LowFile: "freerideStool-low.glb",
  MedFile: null,
  HighFile: "freerideStool-high.glb",
  Price: 849,
  ImgSrc: "assets/layout/freerideStool.png",
  DefaultLayers: [
    "Back1",
    "Casters1",
    "Config1",
    "Arms2",
    "Seat",
    "SeatHolder001",
    "Base",
    "BackHolder1",
    "Casters",
      "Stool",
    "Ring"
  ],
  Options: [
    {
      Code: "back",
      Name: "Back",
      Description: "Back",
      Type: "F",
      RelatedLayers: ["BackHolder1", "BackHolder2", "Back1", "Back2", "Back3", "Back4"],
      Values: [
        {
          Name: "Mid-Back Grey Mesh",
          Active: true,
          PartNumber: "BMG",
          Price: 0,
          Layers: [
            {
              Layer: "BackHolder1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "BackHolder2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back3",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "Mid-Back Black Vinyl",
          Active: false,
          PartNumber: "BVB",
          Price: 43,
          Layers: [
            {
              Layer: "BackHolder1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "BackHolder2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back3",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "Grey Fabric Back",
          Active: false,
          PartNumber: "BFG",
          Price: 50,
          Layers: [
            {
              Layer: "BackHolder1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "BackHolder2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back4",
              MaterialFile: null,
              Color: null,
              Visibility: true
              },
              {
                  Layer: "Back3",
                  MaterialFile: null,
                  Color: null,
                  Visibility: false
              }
          ]
        },
        {
          Name: "High-Back Black Vinyl",
          Active: false,
          PartNumber: "AVB",
          Price: 120,
          Layers: [
            {
              Layer: "BackHolder2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "BackHolder1",
              MaterialFile: null,
              Color: null,
              Visibility: false
              },
              {
                  Layer: "Back4",
                  MaterialFile: null,
                  Color: null,
                  Visibility: false
              },
            {
              Layer: "Back3",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Back1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms4",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms5",
              MaterialFile: null,
              Color: null,
              Visibility: true
            }
          ]
        }
      ]
    }, // BACK
    {
      Code: "arm",
      Name: "Arm",
      Description: "Arm Style",
      Type: "F",
      RelatedLayers: ["Arms1", "Arms2", "Arms3", "Arms4", "Arms5"],
      Values: [
        {
          Name: "Armless option",
          Active: false,
          PartNumber: "A000",
          Price: -71,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms3",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms4",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms5",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "Height adjustable arms",
          Active: false,
          PartNumber: "A1DB",
          Price: -46,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms3",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms4",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms5",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "3D adjustable arms (black)",
          Active: true,
          PartNumber: "A3DB",
          Price: 0,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms3",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms4",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms5",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "4D adjustable arms (black)",
          Active: false,
          PartNumber: "A4DB",
          Price: 38,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms3",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms4",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms5",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "Fixed aluminum loop arms",
          Active: false,
          PartNumber: "AFA",
          Price: 65,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms3",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms4",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms5",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "BackHolder1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "BackHolder2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            }
          ]
        }
      ]
    }, //ARMS
    {
      Code: "grade",
      Name: "Seat Fabric Grade",
      Description: "Seat Fabric Grade",
      Type: "G",
      RelatedLayers: ["Seat"],
      Values: [
        {
          Code: "grade",
          Name: "Grade 1",
          Active: true,
          PartNumber: "1",
          Price: 0,
          Collections: [
            {
              Name: "Link",
              Active: false
            },
            {
              Name: "I.O.U",
              Active: true
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade",
          Name: "Grade V",
          Active: false,
          PartNumber: "V",
          Price: 41,
          Collections: [
            {
              Name: "Vinyl",
              Active: true
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade",
          Name: "Grade 2",
          Active: false,
          PartNumber: "2",
          Price: 66,
          Collections: [
            {
              Name: "Foundation 10",
              Active: true
            },
            {
              Name: "Key Largo",
              Active: false
            },
            {
              Name: "Patio",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade",
          Name: "Grade 3",
          Active: false,
          PartNumber: "3",
          Price: 109,
          Collections: [
            {
              Name: "Habersash",
              Active: true
            },
            {
              Name: "Echo",
              Active: false
            },
            {
              Name: "Cosmopolitan",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
          },
        {
              Code: "grade4",
              Name: "Grade 4",
              Active: false,
              PartNumber: "4",
              Price: 109,
              Collections: [
                  {
                      Name: "TBD",
                      Active: true
                  }
              ],
              Layers: [
                  {
                      Layer: "Seat"
                  }
              ]
          },
        {
              Code: "grade5",
              Name: "Grade 5",
              Active: false,
              PartNumber: "5",
              Price: 109,
              Collections: [
                  {
                      Name: "TBD",
                      Active: true
                  }
              ],
              Layers: [
                  {
                      Layer: "Seat"
                  }
              ]
          }
      ],
      Layers: [
        {
          Layer: "Seat"
        }
      ]
    } //GRADES AND FABRICS
  ]
};
var getG6 = {
  Code: "g6",
  Name: "G6",
  PartNumber: "711MG",
  LowFile: "g6-low.glb",
  MedFile: null,
  HighFile: "g6-high.glb",
  Price: 449,
  ImgSrc: "assets/layout/g6.png",
  DefaultLayers: [
    "Arms",
    "Casters",
    "Config1",
    "Back",
    "BackHolder",
    ,
    "Base",
    "SeatHolder",
    "Seat"
  ],
  Options: [
    {
      Code: "base",
      Name: "Base",
      Description: "Base",
      Type: "M",
      RelatedLayers: ["Base"],
      Values: [
        {
          Name: "Nylon Base",
          Active: true,
          PartNumber: "BN",
          Price: 0,
          Layers: [
            {
              Layer: "Base",
              MaterialFile: "/g6/base/base",
              Color: null,
              Visibility: true
            }
          ]
        },
        {
          Name: "Aluminum Base",
          Active: false,
          PartNumber: "BA",
          Price: 60,
          Layers: [
            {
              Layer: "Base",
              MaterialFile: "/g6/base/base",
              Color: null,
              Visibility: true
            }
          ]
        }
      ]
    }, // BASE
    {
      Code: "mechanism",
      Name: "Mechanism",
      Description: "Mechanism",
      Type: "F",
      RelatedLayers: ["Config1", "Config2"],
      Values: [
        {
          Name: "3 Position Tilting Locking Synchro Mechanism with Seat Slider",
          Active: true,
          PartNumber: "M3",
          Price: 0,
          Layers: [
            {
              Layer: "Config2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Config1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            }
          ]
        },
        {
          Name: "5 Position Tilting Locking Synchro Mechanism with Seat Slider",
          Active: false,
          PartNumber: "M5",
          Price: 55,
          Layers: [
            {
              Layer: "Config2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Config1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        }
      ]
    }, //MECHANISM
    {
      Code: "arm",
      Name: "Arm",
      Description: "Arm Style",
      Type: "F",
      RelatedLayers: ["Arms", "Arms1"],
      isHighBack: false,
      Values: [
        {
          Name: "Armless option",
          Active: false,
          PartNumber: "A000",
          Price: -25,
          Layers: [
            {
              Layer: "Arms",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "Height adjustable arms",
          Active: true,
          PartNumber: "A1DB",
          Price: 0,
          Layers: [
            {
              Layer: "Arms",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "3D adjustable arms (black)",
          Active: false,
          PartNumber: "A3DB",
          Price: 46,
          Layers: [
            {
              Layer: "Arms",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            }
          ]
        }
      ]
    }, //ARMS
    {
      Code: "grade",
      Name: "Seat Fabric Grade",
      Description: "Seat Fabric Grade",
      Type: "G",
      RelatedLayers: ["Seat"],
      Values: [
        {
          Code: "grade1",
          Name: "Grade 1",
          Active: true,
          PartNumber: "1",
          Price: 0,
          Collections: [
            {
              Name: "Link",
              Active: false
            },
            {
              Name: "I.O.U",
              Active: true
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "gradev",
          Name: "Grade V",
          Active: false,
          PartNumber: "V",
          Price: 41,
          Collections: [
            {
              Name: "Vinyl",
              Active: true
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade2",
          Name: "Grade 2",
          Active: false,
          PartNumber: "2",
          Price: 66,
          Collections: [
            {
              Name: "Foundation 10",
              Active: true
            },
            {
              Name: "Key Largo",
              Active: false
            },
            {
              Name: "Patio",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade3",
          Name: "Grade 3",
          Active: false,
          PartNumber: "3",
          Price: 109,
          Collections: [
            {
              Name: "Habersash",
              Active: true
            },
            {
              Name: "Echo",
              Active: false
            },
            {
              Name: "Cosmopolitan",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            },
            {
              Layer: "SeatHolder"
            }
          ]
          },
          {
              Code: "grade4",
              Name: "Grade 4",
              Active: false,
              PartNumber: "4",
              Price: 109,
              Collections: [
                  {
                      Name: "TBD",
                      Active: true
                  }
              ],
              Layers: [
                  {
                      Layer: "Seat"
                  }
              ]
          },
          {
              Code: "grade5",
              Name: "Grade 5",
              Active: false,
              PartNumber: "5",
              Price: 109,
              Collections: [
                  {
                      Name: "TBD",
                      Active: true
                  }
              ],
              Layers: [
                  {
                      Layer: "Seat"
                  }
              ]
          }
      ],
      Layers: [
        {
          Layer: "Seat"
        },
        {
          Layer: "SeatHolder"
        }
      ]
    } //GRADES AND FABRICS
  ]
};
var getG6Stool = {
  Code: "g6Stool",
  Name: "G6 Stool",
  PartNumber: "711BMG-SK",
  LowFile: "g6Stool-low.glb",
  MedFile: null,
  HighFile: "g6Stool-high.glb",
  Price: 649,
  ImgSrc: "assets/layout/g6.png",
  DefaultLayers: [
    "Arms1",
    "Casters",
    "Config1",
    "Back",
    "BackHolder",    
    "Base",
    "SeatHolder",
    "Seat",
    "Stool"
  ],
  Options: [
    {
      Code: "arm",
      Name: "Arm",
      Description: "Arm Style",
      Type: "F",
      RelatedLayers: ["Arms1", "Arms2"],
      Values: [
        {
          Name: "Armless option",
          Active: false,
          PartNumber: "A000",
          Price: -25,
          Layers: [
            {
              Layer: "Arms",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "Height adjustable arms",
          Active: true,
          PartNumber: "A1DB",
          Price: 0,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "3D adjustable arms (black)",
          Active: false,
          PartNumber: "A3DB",
          Price: 46,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            }
          ]
        }
      ]
    }, //ARMS
    {
      Code: "grade",
      Name: "Seat Fabric Grade",
      Description: "Seat Fabric Grade",
      Type: "G",
      RelatedLayers: ["Seat"],
      Values: [
        {
          Code: "grade1",
          Name: "Grade 1",
          Active: true,
          PartNumber: "1",
          Price: 0,
          Collections: [
            {
              Name: "Link",
              Active: false
            },
            {
              Name: "I.O.U",
              Active: true
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "gradev",
          Name: "Grade V",
          Active: false,
          PartNumber: "V",
          Price: 41,
          Collections: [
            {
              Name: "Vinyl",
              Active: true
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade2",
          Name: "Grade 2",
          Active: false,
          PartNumber: "2",
          Price: 66,
          Collections: [
            {
              Name: "Foundation 10",
              Active: true
            },
            {
              Name: "Key Largo",
              Active: false
            },
            {
              Name: "Patio",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade3",
          Name: "Grade 3",
          Active: false,
          PartNumber: "3",
          Price: 109,
          Collections: [
            {
              Name: "Habersash",
              Active: true
            },
            {
              Name: "Echo",
              Active: false
            },
            {
              Name: "Cosmopolitan",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            },
            {
              Layer: "SeatHolder"
            }
          ]
          },
        {
              Code: "grade4",
              Name: "Grade 4",
              Active: false,
              PartNumber: "4",
              Price: 109,
              Collections: [
                  {
                      Name: "TBD",
                      Active: true
                  }
              ],
              Layers: [
                  {
                      Layer: "Seat"
                  }
              ]
          },
        {
              Code: "grade5",
              Name: "Grade 5",
              Active: false,
              PartNumber: "5",
              Price: 109,
              Collections: [
                  {
                      Name: "TBD",
                      Active: true
                  }
              ],
              Layers: [
                  {
                      Layer: "Seat"
                  }
              ]
          }
      ],
      Layers: [
        {
          Layer: "Seat"
        },
        {
          Layer: "SeatHolder"
        }
      ]
    } //GRADES AND FABRICS
  ]
};
var getRoswell = {
  Code: "roswell",
  Name: "Roswell",
  PartNumber: "817",
  LowFile: "roswell-high.glb",
  MedFile: null,
  HighFile: null,
  Price: 577,
  ImgSrc: "assets/layout/roswell.png",
  DefaultLayers: [
    "Arms2",
    "Back",
    "BackHolder",
    "Base",
    "Casters",
    "Config",
    "Seat",
    "SeatHolder"
  ],
  Options: [
    {
      Code: "back",
      Name: "Back",
      Description: "Back",
      Type: "F",
      RelatedLayers: ["BackHolder", "Back"],
      Values: [
        {
          Name: "Black Back with Grey Outer Frame and Grey Mesh",
          Active: true,
          PartNumber: "BGG",
          Price: 0,
          Layers: [
            {
              Layer: "BackHolder",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back",
              MaterialFile: null,
              Color: "#000",
              Visibility: true
            },
            {
                Layer: "Headrest",
                MaterialFile: null,
                Color: "#101000",
                Visibility: false
            }
          ]
        },
        {
          Name: "White Back with Grey Outer Frame and Grey Mesh",
          Active: false,
          PartNumber: "WGG",
          Price: 25,
          Layers: [
            {
              Layer: "BackHolder",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
                Layer: "Headrest",
                MaterialFile: null,
                Color: "#101000",
                Visibility: false
            }
          ]
        },
        {
          Name: "Black Back with Black Outer Frame and Grey Fabric",
          Active: false,
          PartNumber: "BBGF",
          Price: 50,
          Layers: [
            {
              Layer: "BackHolder",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back1",
              MaterialFile: null,
              Color: "#000",
              Visibility: true
            },
            {
                Layer: "Headrest",
                MaterialFile: null,
                Color: "#101000",
                Visibility: false
            }
          ]
        },
        {
          Name:
            "Black Back with Grey Outer Frame; Grey Mesh with Black Frame and Headrest",
          Active: false,
          PartNumber: "BGHR",
          Price: 62,
          Layers: [
            {
              Layer: "BackHolder",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back",
              MaterialFile: null,
              Color: "#101000",
              Visibility: true
            },
            {
                Layer: "Headrest",
                MaterialFile: null,
                Color: "#101000",
                Visibility: true
            }
          ]
        },
        {
          Name:
            "White Back with Grey Outer Frame; Grey Mesh with Black Frame and Headrest",
          Active: false,
          PartNumber: "WBHR",
          Price: 86,
          Layers: [
            {
              Layer: "BackHolder",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back",
              MaterialFile: null,
              Color: "#1010FF",
              Visibility: true
            },
            {
                Layer: "Headrest",
                MaterialFile: null,
                Color: "#101000",
                Visibility: true
            }
          ]
        }
      ]
    }, // BACK
    {
      Code: "base",
      Name: "Base",
      Description: "Base",
      Type: "M",
      RelatedLayers: ["Base"],
      Values: [
        {
          Name: "Nylon Base",
          Active: true,
          PartNumber: "BN",
          Price: 0,
          Layers: [
            {
              Layer: "Base",
              MaterialFile: "/roswell/base/base",
              Color: null,
              Visibility: true
            }
          ]
        },
        {
          Name: "Aluminum Base",
          Active: false,
          PartNumber: "BA",
          Price: 60,
          Layers: [
            {
              Layer: "Base",
              MaterialFile: "/roswell/base/base",
              Color: null,
              Visibility: true
            }
          ]
        }
      ]
    }, // BASE
    {
      Code: "mechanism",
      Name: "Mechanism",
      Description: "Mechanism",
      Type: "F",
      RelatedLayers: ["Config"],
      Values: [
        {
          Name: "4 Position Tilting Locking Synchro Mechanism with Seat Slider",
          Active: true,
          PartNumber: "M4",
          Price: 0,
          Layers: [
            {
              Layer: "Config",
              MaterialFile: null,
              Color: null,
              Visibility: true
            }
          ]
        }
      ]
    }, //MECHANISM
    {
      Code: "arm",
      Name: "Arm",
      Description: "Arm Style",
      Type: "F",
      RelatedLayers: ["Arms1", "Arms2"],
      Values: [
        {
          Name: "Armless option",
          Active: false,
          PartNumber: "A000",
          Price: -71,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "Height adjustable arms (black)",
          Active: false,
          PartNumber: "A1DB",
          Price: -46,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "3D adjustable arms (black)",
          Active: true,
          PartNumber: "A3DB",
          Price: 0,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            }
          ]
        },
        {
          Name: "Height adjustable arm (white)",
          Active: false,
          PartNumber: "A1DW",
          Price: 30,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "3D adjustable arms (white)",
          Active: false,
          PartNumber: "A3DW",
          Price: 76,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            }
          ]
        }
      ]
    }, //ARMS
    {
      Code: "grade",
      Name: "Seat Fabric Grade",
      Description: "Seat Fabric Grade",
      Type: "G",
      RelatedLayers: ["Seat"],
      Values: [
        {
          Code: "grade",
          Name: "Grade 1",
          Active: true,
          PartNumber: "1",
          Price: 0,
          Collections: [
            {
              Name: "Link",
              Active: false
            },
            {
              Name: "I.O.U",
              Active: true
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade",
          Name: "Grade V",
          Active: false,
          PartNumber: "V",
          Price: 41,
          Collections: [
            {
              Name: "Vinyl",
              Active: true
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade",
          Name: "Grade 2",
          Active: false,
          PartNumber: "2",
          Price: 66,
          Collections: [
            {
              Name: "Foundation 10",
              Active: true
            },
            {
              Name: "Key Largo",
              Active: false
            },
            {
              Name: "Patio",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade",
          Name: "Grade 3",
          Active: false,
          PartNumber: "3",
          Price: 109,
          Collections: [
            {
              Name: "Habersash",
              Active: true
            },
            {
              Name: "Echo",
              Active: false
            },
            {
              Name: "Cosmopolitan",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
          },
        {
              Code: "grade4",
              Name: "Grade 4",
              Active: false,
              PartNumber: "4",
              Price: 109,
              Collections: [
                  {
                      Name: "TBD",
                      Active: true
                  }
              ],
              Layers: [
                  {
                      Layer: "Seat"
                  }
              ]
          },
        {
              Code: "grade5",
              Name: "Grade 5",
              Active: false,
              PartNumber: "5",
              Price: 109,
              Collections: [
                  {
                      Name: "TBD",
                      Active: true
                  }
              ],
              Layers: [
                  {
                      Layer: "Seat"
                  }
              ]
          }
      ],
      Layers: [
        {
          Layer: "Seat"
        }
      ]
    } //GRADES AND FABRICS
  ]
};
var getRoswellStool = {
  Code: "roswellStool",
  Name: "Roswell Stool",
  PartNumber: "817",
  LowFile: "roswellStool-high.glb",
  MedFile: null,
  HighFile: null,
  Price: 777,
  ImgSrc: "assets/layout/roswellStool.png",
  DefaultLayers: [
    "Arms2",
    "Back",
    "BackHolder",
    "Base",
    "Casters",
    "Config",
    "Seat",
    "SeatHolder"
  ],
  Options: [
    {
      Code: "back",
      Name: "Back",
      Description: "Back",
      Type: "F",
      RelatedLayers: ["BackHolder", "Back"],
      Values: [
        {
          Name: "Black Back with Grey Outer Frame and Grey Mesh",
          Active: true,
          PartNumber: "BGG",
          Price: 0,
          Layers: [
            {
              Layer: "BackHolder",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back",
              MaterialFile: null,
              Color: "#000",
              Visibility: true
            }
          ]
        },
        {
          Name: "White Back with Grey Outer Frame and Grey Mesh",
          Active: false,
          PartNumber: "WGG",
          Price: 25,
          Layers: [
            {
              Layer: "BackHolder",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back",
              MaterialFile: null,
              Color: null,
              Visibility: true
            }
          ]
        },
        {
          Name: "Black Back with Black Outer Frame and Grey Fabric",
          Active: false,
          PartNumber: "BBGF",
          Price: 50,
          Layers: [
            {
              Layer: "BackHolder",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back1",
              MaterialFile: null,
              Color: "#000",
              Visibility: true
            }
          ]
        },
        {
          Name:
            "Black Back with Grey Outer Frame; Grey Mesh with Black Frame and Headrest",
          Active: false,
          PartNumber: "BGHR",
          Price: 62,
          Layers: [
            {
              Layer: "BackHolder",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back",
              MaterialFile: null,
              Color: "#101000",
              Visibility: true
            }
          ]
        },
        {
          Name:
            "White Back with Grey Outer Frame; Grey Mesh with Black Frame and Headrest",
          Active: false,
          PartNumber: "WBHR",
          Price: 86,
          Layers: [
            {
              Layer: "BackHolder",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Back",
              MaterialFile: null,
              Color: "#1010FF",
              Visibility: true
            }
          ]
        }
      ]
    }, // BACK
    {
      Code: "arm",
      Name: "Arm",
      Description: "Arm Style",
      Type: "F",
      RelatedLayers: ["Arms1", "Arms2"],
      Values: [
        {
          Name: "Armless option",
          Active: false,
          PartNumber: "A000",
          Price: -71,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "Height adjustable arms (black)",
          Active: false,
          PartNumber: "A1DB",
          Price: -46,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "3D adjustable arms (black)",
          Active: true,
          PartNumber: "A3DB",
          Price: 0,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            }
          ]
        },
        {
          Name: "Height adjustable arm (white)",
          Active: false,
          PartNumber: "A1DW",
          Price: 30,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: true
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: false
            }
          ]
        },
        {
          Name: "3D adjustable arms (white)",
          Active: false,
          PartNumber: "A3DW",
          Price: 76,
          Layers: [
            {
              Layer: "Arms1",
              MaterialFile: null,
              Color: null,
              Visibility: false
            },
            {
              Layer: "Arms2",
              MaterialFile: null,
              Color: null,
              Visibility: true
            }
          ]
        }
      ]
    }, //ARMS
    {
      Code: "grade",
      Name: "Seat Fabric Grade",
      Description: "Seat Fabric Grade",
      Type: "G",
      RelatedLayers: ["Seat"],
      Values: [
        {
          Code: "grade",
          Name: "Grade 1",
          Active: true,
          PartNumber: "1",
          Price: 0,
          Collections: [
            {
              Name: "Link",
              Active: false
            },
            {
              Name: "I.O.U",
              Active: true
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade",
          Name: "Grade V",
          Active: false,
          PartNumber: "V",
          Price: 41,
          Collections: [
            {
              Name: "Vinyl",
              Active: true
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade",
          Name: "Grade 2",
          Active: false,
          PartNumber: "2",
          Price: 66,
          Collections: [
            {
              Name: "Foundation 10",
              Active: true
            },
            {
              Name: "Key Largo",
              Active: false
            },
            {
              Name: "Patio",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade",
          Name: "Grade 3",
          Active: false,
          PartNumber: "3",
          Price: 109,
          Collections: [
            {
              Name: "Habersash",
              Active: true
            },
            {
              Name: "Echo",
              Active: false
            },
            {
              Name: "Cosmopolitan",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
          },
        {
              Code: "grade4",
              Name: "Grade 4",
              Active: false,
              PartNumber: "4",
              Price: 109,
              Collections: [
                  {
                      Name: "TBD",
                      Active: true
                  }
              ],
              Layers: [
                  {
                      Layer: "Seat"
                  }
              ]
          },
        {
              Code: "grade5",
              Name: "Grade 5",
              Active: false,
              PartNumber: "5",
              Price: 109,
              Collections: [
                  {
                      Name: "TBD",
                      Active: true
                  }
              ],
              Layers: [
                  {
                      Layer: "Seat"
                  }
              ]
          }
      ],
      Layers: [
        {
          Layer: "Seat"
        }
      ]
    } //GRADES AND FABRICS
  ]
};
var getLamia = {
  Code: "lamia",
  Name: "La Mia",
  PartNumber: "LM-MS",
  LowFile: "lamia-high.glb",
  MedFile: null,
  HighFile: null,
  Price: 225,
  ImgSrc: "assets/layout/lamia.png",
  DefaultLayers: ["General", "Back", "Seat"],
  Options: [
    {
      Code: "colorSeat",
      Name: "Seat Color",
      Description: "Back Color",
      Type: "G",
      RelatedLayers: ["Seat"],
      Values: [
        {
          Name: "Black",
          Active: false,
          PartNumber: "S01",
          Price: 0,
          Layers: [
            {
              Layer: "Back",
              MaterialFile: "/lamia/seat/Back", //"/lamia/seat/Seat011_Retopo",
              Color: "#000",
              Visibility: true
            }
          ]
        }, // BLACK
        {
          Name: "White",
          Active: false,
          PartNumber: "S02",
          Price: 0,
          Layers: [
            {
              Layer: "Back",
              MaterialFile: "/lamia/seat/Back", //"/lamia/seat/Seat011_Retopo",
              Color: "#FFFFFF",
              Visibility: true
            }
          ]
        }, //WHITE
        {
          Name: "Grey",
          Active: false,
          PartNumber: "S03",
          Price: 0,
          Layers: [
            {
              Layer: "Back",
              MaterialFile: "/lamia/seat/Back", //"/lamia/seat/Seat011_Retopo",
              Color: "#101010",
              Visibility: true
            }
          ]
        }, //GREY
        {
          Name: "Blue",
          Active: false,
          PartNumber: "S04",
          Price: 0,
          Layers: [
            {
              Layer: "Back",
              MaterialFile: "/lamia/seat/Back", //"/lamia/seat/Seat011_Retopo",
              Color: "#101010",
              Visibility: true
            }
          ]
        }, //BLUE
        {
          Name: "Green",
          Active: false,
          PartNumber: "S05",
          Price: 0,
          Layers: [
            {
              Layer: "Back",
              MaterialFile: "/lamia/seat/Back", //"/lamia/seat/Seat011_Retopo",
              Color: "#101010",
              Visibility: true
            }
          ]
        }, //GREEEN
        {
          Name: "Red",
          Active: true,
          PartNumber: "S06",
          Price: 0,
          Layers: [
            {
              Layer: "Back",
              MaterialFile: "/lamia/seat/Back", //"/lamia/seat/Seat011_Retopo",
              Color: "#101010",
              Visibility: true
            }
          ]
        }, //RED
        {
          Name: "Sand",
          Active: false,
          PartNumber: "S07",
          Price: 0,
          Layers: [
            {
              Layer: "Back",
              MaterialFile: "/lamia/seat/Back", //"/lamia/seat/Seat011_Retopo",
              Color: "#101010",
              Visibility: true
            }
          ]
        } //SAND
      ]
    }, //SEAT COLOR
    {
      Code: "colorBack",
      Name: "Back Color",
      Description: "Seat Color",
      Type: "G",
      RelatedLayers: ["Back"],
      Values: [
        {
          Name: "Black",
          Active: false,
          PartNumber: "S01",
          Price: 0,
          Layers: [
            {
              Layer: "Seat",
              MaterialFile: "/lamia/seat/Seat", //"/lamia/seat/Seat011_Retopo",
              Color: "#000",
              Visibility: true
            }
          ]
        }, // BLACK
        {
          Name: "White",
          Active: false,
          PartNumber: "S02",
          Price: 0,
          Layers: [
            {
              Layer: "Seat",
              MaterialFile: "/lamia/seat/Seat", //"/lamia/seat/Seat011_Retopo",
              Color: "#FFFFFF",
              Visibility: true
            }
          ]
        }, //WHITE
        {
          Name: "Grey",
          Active: false,
          PartNumber: "S03",
          Price: 0,
          Layers: [
            {
              Layer: "Seat",
              MaterialFile: "/lamia/seat/Seat", //"/lamia/seat/Seat011_Retopo",
              Color: "#101010",
              Visibility: true
            }
          ]
        }, //GREY
        {
          Name: "Blue",
          Active: false,
          PartNumber: "S04",
          Price: 0,
          Layers: [
            {
              Layer: "Seat",
              MaterialFile: "/lamia/seat/Seat", //"/lamia/seat/Seat011_Retopo",
              Color: "#101010",
              Visibility: true
            }
          ]
        }, //BLUE
        {
          Name: "Green",
          Active: false,
          PartNumber: "S05",
          Price: 0,
          Layers: [
            {
              Layer: "Seat",
              MaterialFile: "/lamia/seat/Seat", //"/lamia/seat/Seat011_Retopo",
              Color: "#101010",
              Visibility: true
            }
          ]
        }, //GREEEN
        {
          Name: "Red",
          Active: true,
          PartNumber: "S06",
          Price: 0,
          Layers: [
            {
              Layer: "Seat",
              MaterialFile: "/lamia/seat/Seat", //"/lamia/seat/Seat011_Retopo",
              Color: "#101010",
              Visibility: true
            }
          ]
        }, //RED
        {
          Name: "Sand",
          Active: false,
          PartNumber: "S07",
          Price: 0,
          Layers: [
            {
              Layer: "Seat",
              MaterialFile: "/lamia/seat/Seat", //"/lamia/seat/Seat011_Retopo",
              Color: "#101010",
              Visibility: true
            }
          ]
        } //SAND
      ]
    } //BACK COLOR
  ]
};
var getExtra = {
    Code: "extra",
    Name: "Extra",
    PartNumber: "52-MS-FA-",
    LowFile: "extra-high.glb",
    MedFile: null,
    HighFile: null,
    Price: 339,
    ImgSrc: "assets/layout/extra.png",
    DefaultLayers: ["Back", "Seat", "Plastic"],
    Options: [
        {
            Code: "grade",
            Name: "Seat Fabric Grade",
            Description: "Seat Fabric Grade",
            Type: "G",
            RelatedLayers: ["Seat"],
            Values: [
                {
                    Code: "grade",
                    Name: "Grade 1",
                    Active: true,
                    PartNumber: "1",
                    Price: 0,
                    Collections: [
                        {
                            Name: "Link",
                            Active: false
                        },
                        {
                            Name: "I.O.U",
                            Active: true
                        }
                    ],
                    Layers: [
                        {
                            Layer: "Seat"
                        }
                    ]
                },
                {
                    Code: "gradev",
                    Name: "Grade V",
                    Active: false,
                    PartNumber: "V",
                    Price: 41,
                    Collections: [
                        {
                            Name: "Vinyl",
                            Active: true
                        }
                    ],
                    Layers: [
                        {
                            Layer: "Seat"
                        }
                    ]
                },
                {
                    Code: "grade2",
                    Name: "Grade 2",
                    Active: false,
                    PartNumber: "2",
                    Price: 66,
                    Collections: [
                        {
                            Name: "Foundation 10",
                            Active: true
                        },
                        {
                            Name: "Key Largo",
                            Active: false
                        },
                        {
                            Name: "Patio",
                            Active: false
                        }
                    ],
                    Layers: [
                        {
                            Layer: "Seat"
                        }
                    ]
                },
                {
                    Code: "grade3",
                    Name: "Grade 3",
                    Active: false,
                    PartNumber: "3",
                    Price: 109,
                    Collections: [
                        {
                            Name: "Habersash",
                            Active: true
                        },
                        {
                            Name: "Echo",
                            Active: false
                        },
                        {
                            Name: "Cosmopolitan",
                            Active: false
                        }
                    ],
                    Layers: [
                        {
                            Layer: "Seat"
                        }
                    ]
                },
                {
                    Code: "grade4",
                    Name: "Grade 4",
                    Active: false,
                    PartNumber: "4",
                    Price: 109,
                    Collections: [
                        {
                            Name: "TBD",
                            Active: true
                        }
                    ],
                    Layers: [
                        {
                            Layer: "Seat"
                        }
                    ]
                },
                {
                    Code: "grade5",
                    Name: "Grade 5",
                    Active: false,
                    PartNumber: "5",
                    Price: 109,
                    Collections: [
                        {
                            Name: "TBD",
                            Active: true
                        }
                    ],
                    Layers: [
                        {
                            Layer: "Seat"
                        }
                    ]
                }
            ],
            Layers: [
                {
                    Layer: "Seat1"
                },
                {
                    Layer: "Seat2"
                },
                {
                    Layer: "Back1"
                },
                {
                    Layer: "Back2"
                },
                {
                    Layer: "Seat1Holder"
                },
                {
                    Layer: "Seat2Holder"
                }
            ]
        } //GRADES AND FABRICS
    ]
};
var getTether = {
  Code: "tether",
  Name: "Tether Stool",
  PartNumber: "R05",
  LowFile: "tether-high.glb",
  MedFile: null,
  HighFile: null,
  Price: 350,
  ImgSrc: "assets/layout/tether.png",
  DefaultLayers: ["Base", "Seat"],
  Options: [
    {
      Code: "grade",
      Name: "Seat Fabric Grade",
      Description: "Seat Fabric Grade",
      Type: "G",
      RelatedLayers: ["Seat"],
      Values: [
        {
          Code: "grade",
          Name: "Grade 1",
          Active: true,
          PartNumber: "1",
          Price: 0,
          Collections: [
            {
              Name: "Link",
              Active: false
            },
            {
              Name: "I.O.U",
              Active: true
            },
            {
              Name: "Circus Boy Plastics",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "gradev",
          Name: "Grade V",
          Active: false,
          PartNumber: "V",
          Price: 41,
          Collections: [
            {
              Name: "Vinyl",
              Active: true
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade2",
          Name: "Grade 2",
          Active: false,
          PartNumber: "2",
          Price: 66,
          Collections: [
            {
              Name: "Foundation 10",
              Active: true
            },
            {
              Name: "Key Largo",
              Active: false
            },
            {
              Name: "Patio",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
        },
        {
          Code: "grade3",
          Name: "Grade 3",
          Active: false,
          PartNumber: "3",
          Price: 109,
          Collections: [
            {
              Name: "Habersash",
              Active: true
            },
            {
              Name: "Echo",
              Active: false
            },
            {
              Name: "Cosmopolitan",
              Active: false
            }
          ],
          Layers: [
            {
              Layer: "Seat"
            }
          ]
          },
        {
              Code: "grade4",
              Name: "Grade 4",
              Active: false,
              PartNumber: "4",
              Price: 109,
              Collections: [
                  {
                      Name: "TBD",
                      Active: true
                  }
              ],
              Layers: [
                  {
                      Layer: "Seat"
                  }
              ]
          },
        {
              Code: "grade5",
              Name: "Grade 5",
              Active: false,
              PartNumber: "5",
              Price: 109,
              Collections: [
                  {
                      Name: "TBD",
                      Active: true
                  }
              ],
              Layers: [
                  {
                      Layer: "Seat"
                  }
              ]
          }
      ],
      Layers: [
        {
          Layer: "Seat1"
        },
        {
          Layer: "Seat2"
        },
        {
          Layer: "Back1"
        },
        {
          Layer: "Back2"
        },
        {
          Layer: "Seat1Holder"
        },
        {
          Layer: "Seat2Holder"
        }
      ]
    } //GRADES AND FABRICS
  ]
};
