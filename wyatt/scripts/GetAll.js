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
    BackSize: 2,
    Options: [
        {
            Code: "back",
            Name: "Back Selection",
            Description: "Height",
            Type: "F",
            RelatedLayers: ["BackHolder1", "BackHolder2"],
            Depth: 1,
            Values: [
                {
                    Code: "Mid-Back",
                    Name: "Mid-Back",
                    Active: true,
                    PartNumber: "B",
                    Price: 0,
                    Show: true,
                    Uses: ["Mesh", "Fabric", "Vinyl"],
                    Layers: [
                        {
                            Layer: "BackHolder1",
                            Visibility: true
                        },
                        {
                            Layer: "BackHolder2",
                            Visibility: false
                        }], 
                },
                {
                    Code: "High-Back",
                    Name: "High-Back",
                    Active: false,
                    PartNumber: "A",
                    Price: 77,
                    Show: true,
                    Uses: ["HighbackVin"],
                    Layers: [
                        {
                            Layer: "BackHolder1",
                            MaterialFile: null,
                            Color: null,
                            Visibility: false
                        },
                        {
                            Layer: "BackHolder2",
                            MaterialFile: null,
                            Color: null,
                            Visibility: true
                        }]

                }
            ],
            
        }, // BACK
        {
            Code: "back-material",
            Name: "Back Material",
            Description: "Material",
            Type: "F",
            Depth: 2,
            RelatedLayers: ["Back1", "Back2", "Back3"],
            Values: [
                {
                    Code: "Mesh",
                    Name: "Mesh",
                    Active: true,
                    PartNumber: "M",
                    Show: true,
                    Price: 0,
                    Uses: ["Grey-Mesh", "Black-Mesh", "Red-Mesh", "Blue-Mesh"],
                    Layers: [
                        {
                            Layer: "Back1",
                            Visibility: true
                        },
                        {
                            Layer: "Back2",
                            Visibility: false
                        },
                        {
                            Layer: "Back3",
                            Visibility: false
                        },
                        {
                            Layer: "Back4",
                            Visibility: false
                        }]
                }, // MID-BACK MESH
                {
                    Code: "Fabric",
                    Name: "Fabric",
                    Active: false,
                    PartNumber: "F",
                    Show: true,
                    Price: 50,
                    Uses: ["Cardigan", "Billy-4C"],
                    Layers: [
                        {
                            Layer: "Back1",
                            Visibility: false
                        },
                        {
                            Layer: "Back2",
                            Visibility: false
                        },
                        {
                            Layer: "Back3",
                            Visibility: false
                        },
                        {
                            Layer: "Back4",
                            Visibility: true
                        }],                  
                }, // MID-BACK FABRIC
                {
                    Code: "Vinyl",
                    Name: "Vinyl",
                    Active: false,
                    PartNumber: "V",
                    Show: true,
                    Price: 43,
                    Uses: ["Black-V-Mid", "Grey-V-Mid"],
                    Layers: [
                        {
                            Layer: "Back1",
                            Visibility: false
                        },
                        {
                            Layer: "Back2",
                            Visibility: true
                        },
                        {
                            Layer: "Back3",
                            Visibility: false
                        },
                        {
                            Layer: "Back4",
                            Visibility: false
                        }],                   
                }, // MID-BACK VINYL
                {
                    Code: "HighbackVin",
                    Name: "Vinyl",
                    Active: false,
                    PartNumber: "V",
                    Show: false,
                    Price: 43,
                    Uses: ["Black-V-High", "Grey-V-High"],
                    Layers: [
                        {
                            Layer: "Back1",
                            Visibility: false
                        },
                        {
                            Layer: "Back2",
                            Visibility: false
                        },
                        {
                            Layer: "Back3",
                            Visibility: true
                        },
                        {
                            Layer: "Back4",
                            Visibility: false
                        }],
                }, // HIGH-BACK VINYL


            ]
        },//BACK MATERIAL
        {
            Code: "back-color",
            Name: "Back Color",
            Description: "Color",
            Type: "M",
            Depth: 3,
            Price: 0,
            RelatedLayers: ["Back1", "Back2", "Back3", "Back4"],
            Values: [
                {
                    Code: "Grey-Mesh",
                    Name: "Grey",
                    Active: false,
                    PartNumber: "G",
                    Price: 0,
                    Show: true,
                    Layers: ["Back1"]
                },
                {
                    Code: "Black-Mesh",
                    Name: "Black",
                    Active: true,
                    PartNumber: "B",
                    Price: 0,
                    Show: true,
                    Layers: ["Back1"]
                },
                {
                    Code: "Red-Mesh",
                    Name: "Red",
                    Active: false,
                    PartNumber: "R",
                    Price: 0,
                    Show: true,
                    Layers: ["Back1"]
                },
                {
                    Code: "Blue-Mesh",
                    Name: "Blue",
                    Active: false,
                    PartNumber: "B",
                    Price: 0,
                    Show: true,
                    Layers: ["Back1"]
                },
                {
                    Code: "Cardigan",
                    Name: "Cardigan",
                    Active: false,
                    PartNumber: "1311",
                    Price: 0,
                    Show: false,
                    Layers: ["Back2"]
                },
                {
                    Code: "Billy-4C",
                    Name: "Billy 4C",
                    Active: false,
                    PartNumber: "1301",
                    Price: 0,
                    Show: false,
                    Layers: ["Back2"]
                },
                {
                    Code: "Black-V-Mid",
                    Name: "Black",
                    Active: false,
                    PartNumber: "B",
                    Price: 0,
                    Show: false,
                    Layers: ["Back3"]
                },
                {
                    Code: "Grey-V-Mid",
                    Name: "Grey",
                    Active: false,
                    PartNumber: "G",
                    Price: 0,
                    Show: false,
                    Layers: ["Back3"]
                },
                {
                    Code: "Black-V-High",
                    Name: "Black",
                    Active: false,
                    PartNumber: "B",
                    Price: 0,
                    Show: false,
                    Layers: ["Back3"]
                },
                {
                    Code: "Grey-V-High",
                    Name: "Grey",
                    Active: false,
                    PartNumber: "G",
                    Price: 0,
                    Show: false,
                    Layers: ["Back3"]
                },

            ]
        },//BACK MATERIAL COLOR
        {
            Code: "base",
            Name: "Base Selection",
            Description: "Base",
            Type: "M",
            RelatedLayers: ["Base"],
            Values: [
                {
                    Code: "nylon-base",
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
                    Code: "aluminum-base",
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
            Name: "Mechanism Selection",
            Description: "Mechanism",
            Type: "F",
            RelatedLayers: ["Config1", "Config2"],
            Values: [
                {
                    Code: "3-mechanism",
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
                    Code: "5-mechanism",
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
            Name: "Arm Style Selection",
            Description: "Arm Style",
            Type: "F",
            RelatedLayers: ["Arms1", "Arms2", "Arms3", "Arms4", "Arms5"],
            Values: [
                {
                    Code: "armless",
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
                    Code: "height-adjustable-arms",
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
                    Code: "3D-adjustable-arms-b",
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
                    Code: "4D-adjustable-arms-b",
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
                    Code: "fixed-aluminum-loop-arms",
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
                            Visibility: false
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
        }, //ARMS
        {
            Code: "grade",
            Name: "Seat Fabric Selection",
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
                        }
                    ]
                },
                {
                    Code: "grade4",
                    Name: "Grade 4",
                    Active: false,
                    PartNumber: "4",
                    Price: 135,
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
                    Price: 158,
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
    ],
    FabricName: "I.O.U - Billy 4C",
    FabricPartNumber: "1301",
    SeatPad: false,
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
    BackSize: 2,
    Options: [
        {
            Code: "back",
            Name: "Back Selection",
            Description: "Height",
            Type: "F",
            RelatedLayers: ["BackHolder1", "BackHolder2"],
            Depth: 1,
            Values: [
                {
                    Code: "Mid-Back",
                    Name: "Mid-Back",
                    Active: true,
                    PartNumber: "B",
                    Price: 0,
                    Show: true,
                    Uses: ["Mesh", "Fabric", "Vinyl"],
                    Layers: [
                        {
                            Layer: "BackHolder1",
                            Visibility: true
                        },
                        {
                            Layer: "BackHolder2",
                            Visibility: false
                        }],
                },
                {
                    Code: "High-Back",
                    Name: "High-Back",
                    Active: false,
                    PartNumber: "A",
                    Price: 77,
                    Show: true,
                    Uses: ["HighbackVin"],
                    Layers: [
                        {
                            Layer: "BackHolder1",
                            MaterialFile: null,
                            Color: null,
                            Visibility: false
                        },
                        {
                            Layer: "BackHolder2",
                            MaterialFile: null,
                            Color: null,
                            Visibility: true
                        }]

                }
            ],

        }, // BACK
        {
            Code: "back-material",
            Name: "Back Material",
            Description: "Material",
            Type: "F",
            Depth: 2,
            RelatedLayers: ["Back1", "Back2", "Back3"],
            Values: [
                {
                    Code: "Mesh",
                    Name: "Mesh",
                    Active: true,
                    PartNumber: "M",
                    Show: true,
                    Price: 0,
                    Uses: ["Grey-Mesh", "Black-Mesh", "Red-Mesh", "Blue-Mesh"],
                    Layers: [
                        {
                            Layer: "Back1",
                            Visibility: true
                        },
                        {
                            Layer: "Back2",
                            Visibility: false
                        },
                        {
                            Layer: "Back3",
                            Visibility: false
                        },
                        {
                            Layer: "Back4",
                            Visibility: false
                        }]
                }, // MID-BACK MESH
                {
                    Code: "Fabric",
                    Name: "Fabric",
                    Active: false,
                    PartNumber: "F",
                    Show: true,
                    Price: 50,
                    Uses: ["Cardigan", "Billy-4C"],
                    Layers: [
                        {
                            Layer: "Back1",
                            Visibility: false
                        },
                        {
                            Layer: "Back2",
                            Visibility: false
                        },
                        {
                            Layer: "Back3",
                            Visibility: false
                        },
                        {
                            Layer: "Back4",
                            Visibility: true
                        }],
                }, // MID-BACK FABRIC
                {
                    Code: "Vinyl",
                    Name: "Vinyl",
                    Active: false,
                    PartNumber: "V",
                    Show: true,
                    Price: 43,
                    Uses: ["Black-V-Mid", "Grey-V-Mid"],
                    Layers: [
                        {
                            Layer: "Back1",
                            Visibility: false
                        },
                        {
                            Layer: "Back2",
                            Visibility: true
                        },
                        {
                            Layer: "Back3",
                            Visibility: false
                        },
                        {
                            Layer: "Back4",
                            Visibility: false
                        }],
                }, // MID-BACK VINYL
                {
                    Code: "HighbackVin",
                    Name: "Vinyl",
                    Active: false,
                    PartNumber: "V",
                    Show: false,
                    Price: 43,
                    Uses: ["Black-V-High", "Grey-V-High"],
                    Layers: [
                        {
                            Layer: "Back1",
                            Visibility: false
                        },
                        {
                            Layer: "Back2",
                            Visibility: false
                        },
                        {
                            Layer: "Back3",
                            Visibility: true
                        },
                        {
                            Layer: "Back4",
                            Visibility: false
                        }],
                }, // HIGH-BACK VINYL


            ]
        },//BACK MATERIAL
        {
            Code: "back-color",
            Name: "Back Color",
            Description: "Color",
            Type: "M",
            Depth: 3,
            Price: 0,
            RelatedLayers: ["Back1", "Back2", "Back3", "Back4"],
            Values: [
                {
                    Code: "Grey-Mesh",
                    Name: "Grey",
                    Active: false,
                    PartNumber: "G",
                    Price: 0,
                    Show: true,
                    Layers: ["Back1"]
                },
                {
                    Code: "Black-Mesh",
                    Name: "Black",
                    Active: true,
                    PartNumber: "B",
                    Price: 0,
                    Show: true,
                    Layers: ["Back1"]
                },
                {
                    Code: "Red-Mesh",
                    Name: "Red",
                    Active: false,
                    PartNumber: "R",
                    Price: 0,
                    Show: true,
                    Layers: ["Back1"]
                },
                {
                    Code: "Blue-Mesh",
                    Name: "Blue",
                    Active: false,
                    PartNumber: "B",
                    Price: 0,
                    Show: true,
                    Layers: ["Back1"]
                },
                {
                    Code: "Cardigan",
                    Name: "Cardigan",
                    Active: false,
                    PartNumber: "1311",
                    Price: 0,
                    Show: false,
                    Layers: ["Back2"]
                },
                {
                    Code: "Billy-4C",
                    Name: "Billy 4C",
                    Active: false,
                    PartNumber: "1301",
                    Price: 0,
                    Show: false,
                    Layers: ["Back2"]
                },
                {
                    Code: "Black-V-Mid",
                    Name: "Black",
                    Active: false,
                    PartNumber: "B",
                    Price: 0,
                    Show: false,
                    Layers: ["Back3"]
                },
                {
                    Code: "Grey-V-Mid",
                    Name: "Grey",
                    Active: false,
                    PartNumber: "G",
                    Price: 0,
                    Show: false,
                    Layers: ["Back3"]
                },
                {
                    Code: "Black-V-High",
                    Name: "Black",
                    Active: false,
                    PartNumber: "B",
                    Price: 0,
                    Show: false,
                    Layers: ["Back3"]
                },
                {
                    Code: "Grey-V-High",
                    Name: "Grey",
                    Active: false,
                    PartNumber: "G",
                    Price: 0,
                    Show: false,
                    Layers: ["Back3"]
                },

            ]
        },//BACK MATERIAL COLOR
        {
            Code: "mechanism",
            Name: "Mechanism Selection",
            Description: "Mechanism",
            Type: "F",
            RelatedLayers: ["Config1"],
            Values: [
                {
                    Code: "sk",
                    Name: "Stool Kit",
                    Active: true,
                    PartNumber: "SK",
                    Price: 0,
                    Layers: [
                        {
                            Layer: "Config1",
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
            Name: "Arm Style Selection",
            Description: "Arm Style",
            Type: "F",
            RelatedLayers: ["Arms1", "Arms2", "Arms3", "Arms4", "Arms5"],
            Values: [
                {
                    Code: "armless",
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
                    Code: "height-adjustable-arms",
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
                    Code: "3D-adjustable-arms-b",
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
                    Code: "4D-adjustable-arms-b",
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
                    Code: "fixed-aluminum-loop-arms",
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
                            Visibility: false
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
        }, //ARMS
        {
            Code: "grade",
            Name: "Seat Fabric Selection",
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
                        }
                    ]
                },
                {
                    Code: "grade4",
                    Name: "Grade 4",
                    Active: false,
                    PartNumber: "4",
                    Price: 135,
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
                    Price: 158,
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
    ],
    FabricName: "I.O.U - Billy 4C",
    FabricPartNumber: "1301",
    SeatPad: false,
};
var getG6 = {
    Code: "g6",
    Name: "G6",
    PartNumber: "711BMG",
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
        "Base",
        "SeatHolder",
        "Seat"
    ],
    Options: [
        {
            Code: "base",
            Name: "Base Selection",
            Description: "Base",
            Type: "M",
            RelatedLayers: ["Base"],
            Values: [
                {
                    Code: "nylon-base",
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
                    Code: "aluminum-base",
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
            Name: "Mechanism Selection",
            Description: "Mechanism",
            Type: "F",
            RelatedLayers: ["Config1", "Config2"],
            Values: [
                {
                    Code: "3-mechanism",
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
                    Code: "5-mechanism",
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
            Name: "Arm Style Selection",
            Description: "Arm Style",
            Type: "F",
            RelatedLayers: ["Arms1", "Arms2"],
            isHighBack: false,
            Values: [
                {
                    Code: "armless",
                    Name: "Armless option",
                    Active: false,
                    PartNumber: "A000",
                    Price: -25,
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
                    Code: "height-adjustable-arms",
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
                    Code: "3d-adjustable-arms-b",
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
            Name: "Seat Fabric Selection",
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
                    Price: 135,
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
                    Price: 158,
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
    ],
    FabricName: "I.O.U - Billy 4C",
    FabricPartNumber: "1301",
    SeatPad: false,
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
            Code: "mechanism",
            Name: "Mechanism Selection",
            Description: "Mechanism",
            Type: "F",
            RelatedLayers: ["Config"],
            Values: [
                {
                    Code: "sk",
                    Name: "Stool Kit",
                    Active: true,
                    PartNumber: "SK",
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
            Name: "Arm Style Selection",
            Description: "Arm Style",
            Type: "F",
            RelatedLayers: ["Arms", "Arms1"],
            isHighBack: false,
            Values: [
                {
                    Code: "armless",
                    Name: "Armless option",
                    Active: false,
                    PartNumber: "A000",
                    Price: -25,
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
                    Code: "height-adjustable-arms",
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
                    Code: "3d-adjustable-arms-b",
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
            Name: "Seat Fabric Selection",
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
                    Price: 135,
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
                    Price: 158,
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
    ],
    FabricName: "I.O.U - Billy 4C",
    FabricPartNumber: "1301",
    SeatPad: false,
};
var getRoswell = {
    Code: "roswell",
    Name: "Roswell",
    PartNumber: "817",
    LowFile: "roswell-low.glb",
    MedFile: null,
    HighFile: "roswell-high.glb",
    Price: 577,
    ImgSrc: "assets/layout/roswell.png",
    DefaultLayers: [
        "Arms2",
        "Back1",
        "BackHolder1",
        "Base",
        "Casters",
        "Config",
        "Seat",
        "SeatHolder"
    ],
    BackSize: 3,
    Options: [
        {
            Code: "back",
            Name: "Back Selection",
            Description: "Back",
            Type: "F",
            RelatedLayers: [],
            Depth: 1,
            Values: [
                {
                    Code: "BlackBack",
                    Name: "Black",
                    Active: true,
                    PartNumber: "B",
                    Price: 0,
                    Show: true,
                    Uses: ["GreyFrame", "BlackFrame"],
                    Layers: [],
                }, //BLACK
                {
                    Code: "WhiteBack",
                    Name: "White",
                    Active: false,
                    PartNumber: "W",
                    Price: 25,
                    Show: true,
                    Uses: ["GreyV2"],
                    Layers: []

                } //WHITE
            ],

        }, // BACK
        {
            Code: "back-frame",
            Name: "Back Frame",
            Description: "Frame",
            Type: "F",
            Depth: 2,
            RelatedLayers: ["BackHolder1"],
            Values: [
                {
                    Code: "BlackFrame",
                    Name: "Black",
                    Active: false,
                    PartNumber: "B",
                    Show: true,
                    Price: 0,
                    Uses: ["Mesh", "Fabric"],
                    Layers: [
                        {
                            Layer: "BackHolder1",
                            MaterialFile: "/roswell/back/backholder1",
                            Visibility: true
                        },
                        {
                            Layer: "HeadrestHolder",
                            MaterialFile: "/roswell/headrest/headrest",
                            Visibility: null
                        },
                        ]
                }, // Black Frame
                {
                    Code: "GreyFrame",
                    Name: "Grey",
                    Active: true,
                    PartNumber: "G",
                    Show: true,
                    Price: 0,
                    Uses: ["MeshV2"],
                    Layers: [
                        {
                            Layer: "BackHolder1",
                            MaterialFile: "/roswell/back/backholder1",
                            Visibility: true
                        },
                        {
                            Layer: "HeadrestHolder",
                            MaterialFile: "/roswell/headrest/headrest",
                            Visibility: null
                        },
                    ]
                }, // Grey Frame
                {
                    Code: "GreyV2",
                    Name: "Grey",
                    Active: false,
                    PartNumber: "G",
                    Show: false,
                    Price: 0,
                    Uses: ["MeshV2"],
                    Layers: [
                        {
                            Layer: "BackHolder1",
                            MaterialFile: "/roswell/back/backholder1",
                            Visibility: true
                        },
                        {
                            Layer: "HeadrestHolder",
                            MaterialFile: "/roswell/headrest/headrest",
                            Visibility: null
                        },
                    ]
                }, // White Back Grey Frame


            ]
        },//BACK FRAME
        {
            Code: "back-material",
            Name: "Back Material",
            Description: "Material",
            Type: "F",
            Depth: 3,
            RelatedLayers: ["Back1"],
            Values: [
                {
                    Code: "Mesh",
                    Name: "Mesh",
                    Active: true,
                    PartNumber: "M",
                    Show: true,
                    Price: 0,
                    Uses: ["Black-Mesh"],
                    Layers: [
                        {
                            Layer: "Back1",                            
                            Visibility: true
                        },
                    ]
                }, // Mesh
                {
                    Code: "Fabric",
                    Name: "Fabric",
                    Active: false,
                    PartNumber: "F",
                    Show: false,
                    Price: 50,
                    Uses: ["Cardigan", "Billy-4C"],
                    Layers: [
                        {
                            Layer: "Back1",
                            Visibility: true
                        },
                    ]
                }, // Fabric
                {
                    Code: "MeshV2",
                    Name: "Mesh",
                    Active: false,
                    PartNumber: "M",
                    Show: false,
                    Price: 0,
                    Uses: ["Grey-Mesh"],
                    Layers: [
                        {
                            Layer: "BackHolder1",
                            Visibility: true
                        },
                    ]
                }, // Black Mesh


            ]
        },//BACK MATERIAL
        {
            Code: "back-color",
            Name: "Back Color",
            Description: "Color",
            Type: "M",
            Depth: 4,
            Price: 0,
            RelatedLayers: ["Back1", "Headrest"],
            Values: [
                {
                    Code: "Grey-Mesh",
                    Name: "Grey",
                    Active: true,
                    PartNumber: "G",
                    Price: 0,
                    Show: true,
                    Layers: ["Back1"]
                },
                {
                    Code: "Black-Mesh",
                    Name: "Black",
                    Active: false,
                    PartNumber: "B",
                    Price: 0,
                    Show: false,
                    Layers: ["Back1"]
                },               
                {
                    Code: "Cardigan",
                    Name: "I.O.U.- Cardigan",
                    Active: false,
                    PartNumber: "1311",
                    Price: 0,
                    Show: false,
                    Layers: ["Back1"]
                },
                {
                    Code: "Billy-4C",
                    Name: "I.O.U.- Billy 4C",
                    Active: false,
                    PartNumber: "1301",
                    Price: 0,
                    Show: false,
                    Layers: ["Back1"]
                },             

            ]
        },//BACK MATERIAL COLOR
        {
            Code: "back-headrest",
            Name: "Back Headrest",
            Description: "Headrest",
            Type: "F",
            Depth: 5,
            RelatedLayers: ["Headrest"],
            Values: [
                {
                    Code: "Without Headrest",
                    Name: "Without Headrest",
                    Active: true,
                    PartNumber: "",
                    Show: true,
                    Price: 0,
                    Uses: [""],
                    Layers: [
                        {
                            Layer: "Headrest",
                            Visibility: false
                        },
                        {
                            Layer: "HeadrestHolder",
                            Visibility: false
                        },
                    ]
                }, // No Headrest
                {
                    Code: "With Headrest",
                    Name: "With Headrest",
                    Active: false,
                    PartNumber: "HR",
                    Show: true,
                    Price: 62,
                    Uses: [""],
                    Layers: [
                        {
                            Layer: "Headrest",
                            Visibility: true
                        },
                        {
                            Layer: "HeadrestHolder",
                            Visibility: true
                        },
                    ]
                }, // Headrest
               


            ]
        },//BACK HEADREST
        {
            Code: "base",
            Name: "Base Selection",
            Description: "Base",
            Type: "M",
            RelatedLayers: ["Base"],
            Values: [
                {
                    Code: "nylon-base",
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
                    Code: "aluminum-base",
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
            Name: "Mechanism Selection",
            Description: "Mechanism",
            Type: "F",
            RelatedLayers: ["Config"],
            Values: [
                {
                    Code: "4-pos",
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
            Name: "Arm Style Selection",
            Description: "Arm Style",
            Type: "F",
            RelatedLayers: ["Arms1", "Arms2"],
            Values: [
                {
                    Code: "armless",
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
                    Code: "height-adjustable-arms-b",
                    Name: "Height adjustable arms (black)",
                    Active: false,
                    PartNumber: "A1DB",
                    Price: -46,
                    Layers: [
                        {
                            Layer: "Arms1",
                            MaterialFile: "/roswell/arms/arms1",
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
                    Code: "3D-adjustable-arms-b",
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
                            MaterialFile: "/roswell/arms/arms2",
                            Color: null,
                            Visibility: true
                        }
                    ]
                },
                {
                    Code: "height-adjustable-arms-w",
                    Name: "Height adjustable arms (white)",
                    Active: false,
                    PartNumber: "A1DW",
                    Price: 30,
                    Layers: [
                        {
                            Layer: "Arms1",
                            MaterialFile: "/roswell/arms/arms1",
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
                    Code: "3D-adjustable-arms-w",
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
                            MaterialFile: "/roswell/arms/arms2",
                            Color: null,
                            Visibility: true
                        }
                    ]
                }
            ]
        }, //ARMS
        {
            Code: "grade",
            Name: "Seat Fabric Selection",
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
                        }
                    ]
                },
                {
                    Code: "grade4",
                    Name: "Grade 4",
                    Active: false,
                    PartNumber: "4",
                    Price: 135,
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
                    Price: 158,
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
    ],
    FabricName: "I.O.U - Billy 4C",
    FabricPartNumber: "1301",
    SeatPad: false,
};
var getRoswellStool = {
    Code: "roswellStool",
    Name: "Roswell Stool",
    PartNumber: "817",
    LowFile: "roswellStool-low.glb",
    MedFile: null,
    HighFile: "roswellStool-high.glb",
    Price: 777,
    ImgSrc: "assets/layout/roswellStool.png",
    DefaultLayers: [
        "Arms2",
        "Back1",
        "BackHolder1",
        "Base",
        "Casters",
        "Config",
        "Seat",
        "SeatHolder"
    ],
    BackSize: 3,
    Options: [
        {
            Code: "back",
            Name: "Back Selection",
            Description: "Back",
            Type: "F",
            RelatedLayers: [],
            Depth: 1,
            Values: [
                {
                    Code: "BlackBack",
                    Name: "Black",
                    Active: true,
                    PartNumber: "B",
                    Price: 0,
                    Show: true,
                    Uses: ["GreyFrame", "BlackFrame"],
                    Layers: [],
                }, //BLACK
                {
                    Code: "WhiteBack",
                    Name: "White",
                    Active: false,
                    PartNumber: "W",
                    Price: 25,
                    Show: true,
                    Uses: ["GreyV2"],
                    Layers: []

                } //WHITE
            ],

        }, // BACK
        {
            Code: "back-frame",
            Name: "Back Frame",
            Description: "Frame",
            Type: "F",
            Depth: 2,
            RelatedLayers: ["BackHolder1"],
            Values: [
                {
                    Code: "BlackFrame",
                    Name: "Black",
                    Active: false,
                    PartNumber: "B",
                    Show: true,
                    Price: 0,
                    Uses: ["Mesh", "Fabric"],
                    Layers: [
                        {
                            Layer: "BackHolder1",
                            MaterialFile: "/roswell/back/backholder1",
                            Visibility: true
                        },
                        {
                            Layer: "HeadrestHolder",
                            MaterialFile: "/roswell/headrest/headrest",
                            Visibility: null
                        },
                    ]
                }, // Black Frame
                {
                    Code: "GreyFrame",
                    Name: "Grey",
                    Active: true,
                    PartNumber: "G",
                    Show: true,
                    Price: 0,
                    Uses: ["MeshV2"],
                    Layers: [
                        {
                            Layer: "BackHolder1",
                            MaterialFile: "/roswell/back/backholder1",
                            Visibility: true
                        },
                        {
                            Layer: "HeadrestHolder",
                            MaterialFile: "/roswell/headrest/headrest",
                            Visibility: null
                        },
                    ]
                }, // Grey Frame
                {
                    Code: "GreyV2",
                    Name: "Grey",
                    Active: false,
                    PartNumber: "G",
                    Show: false,
                    Price: 0,
                    Uses: ["MeshV2"],
                    Layers: [
                        {
                            Layer: "BackHolder1",
                            MaterialFile: "/roswell/back/backholder1",
                            Visibility: true
                        },
                        {
                            Layer: "HeadrestHolder",
                            MaterialFile: "/roswell/headrest/headrest",
                            Visibility: null
                        },
                    ]
                }, // White Back Grey Frame


            ]
        },//BACK FRAME
        {
            Code: "back-material",
            Name: "Back Material",
            Description: "Material",
            Type: "F",
            Depth: 3,
            RelatedLayers: ["Back1"],
            Values: [
                {
                    Code: "Mesh",
                    Name: "Mesh",
                    Active: true,
                    PartNumber: "M",
                    Show: true,
                    Price: 0,
                    Uses: ["Black-Mesh"],
                    Layers: [
                        {
                            Layer: "Back1",
                            Visibility: true
                        },
                    ]
                }, // Mesh
                {
                    Code: "Fabric",
                    Name: "Fabric",
                    Active: false,
                    PartNumber: "F",
                    Show: false,
                    Price: 50,
                    Uses: ["Cardigan", "Billy-4C"],
                    Layers: [
                        {
                            Layer: "Back1",
                            Visibility: true
                        },
                    ]
                }, // Fabric
                {
                    Code: "MeshV2",
                    Name: "Mesh",
                    Active: false,
                    PartNumber: "M",
                    Show: false,
                    Price: 0,
                    Uses: ["Grey-Mesh"],
                    Layers: [
                        {
                            Layer: "BackHolder1",
                            Visibility: true
                        },
                    ]
                }, // Black Mesh


            ]
        },//BACK MATERIAL
        {
            Code: "back-color",
            Name: "Back Color",
            Description: "Color",
            Type: "M",
            Depth: 4,
            Price: 0,
            RelatedLayers: ["Back1", "Headrest"],
            Values: [
                {
                    Code: "Grey-Mesh",
                    Name: "Grey",
                    Active: true,
                    PartNumber: "G",
                    Price: 0,
                    Show: true,
                    Layers: ["Back1"]
                },
                {
                    Code: "Black-Mesh",
                    Name: "Black",
                    Active: false,
                    PartNumber: "B",
                    Price: 0,
                    Show: false,
                    Layers: ["Back1"]
                },
                {
                    Code: "Cardigan",
                    Name: "I.O.U.- Cardigan",
                    Active: false,
                    PartNumber: "1311",
                    Price: 0,
                    Show: false,
                    Layers: ["Back1"]
                },
                {
                    Code: "Billy-4C",
                    Name: "I.O.U.- Billy 4C",
                    Active: false,
                    PartNumber: "1301",
                    Price: 0,
                    Show: false,
                    Layers: ["Back1"]
                },

            ]
        },//BACK MATERIAL COLOR
        {
            Code: "back-headrest",
            Name: "Back Headrest",
            Description: "Headrest",
            Type: "F",
            Depth: 5,
            RelatedLayers: ["Headrest"],
            Values: [
                {
                    Code: "Without Headrest",
                    Name: "Without Headrest",
                    Active: true,
                    PartNumber: "",
                    Show: true,
                    Price: 0,
                    Uses: [""],
                    Layers: [
                        {
                            Layer: "Headrest",
                            Visibility: false
                        },
                        {
                            Layer: "HeadrestHolder",
                            Visibility: false
                        },
                    ]
                }, // No Headrest
                {
                    Code: "With Headrest",
                    Name: "With Headrest",
                    Active: false,
                    PartNumber: "HR",
                    Show: true,
                    Price: 62,
                    Uses: [""],
                    Layers: [
                        {
                            Layer: "Headrest",
                            Visibility: true
                        },
                        {
                            Layer: "HeadrestHolder",
                            Visibility: true
                        },
                    ]
                }, // Headrest



            ]
        },//BACK HEADREST
        {
            Code: "mechanism",
            Name: "Mechanism Selection",
            Description: "Mechanism",
            Type: "F",
            RelatedLayers: ["Config"],
            Values: [
                {
                    Code: "sk",
                    Name: "Stool Kit",
                    Active: true,
                    PartNumber: "SK",
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
            Name: "Arm Style Selection",
            Description: "Arm Style",
            Type: "F",
            RelatedLayers: ["Arms1", "Arms2"],
            Values: [
                {
                    Code: "armless",
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
                    Code: "height-adjustable-arms-b",
                    Name: "Height adjustable arms (black)",
                    Active: false,
                    PartNumber: "A1DB",
                    Price: -46,
                    Layers: [
                        {
                            Layer: "Arms1",
                            MaterialFile: "/roswell/arms/arms1",
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
                    Code: "3D-adjustable-arms-b",
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
                            MaterialFile: "/roswell/arms/arms2",
                            Color: null,
                            Visibility: true
                        }
                    ]
                },
                {
                    Code: "height-adjustable-arms-w",
                    Name: "Height adjustable arms (white)",
                    Active: false,
                    PartNumber: "A1DW",
                    Price: 30,
                    Layers: [
                        {
                            Layer: "Arms1",
                            MaterialFile: "/roswell/arms/arms1",
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
                    Code: "3D-adjustable-arms-w",
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
                            MaterialFile: "/roswell/arms/arms2",
                            Color: null,
                            Visibility: true
                        }
                    ]
                }
            ]
        }, //ARMS
        {
            Code: "grade",
            Name: "Seat Fabric Selection",
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
                        }
                    ]
                },
                {
                    Code: "grade4",
                    Name: "Grade 4",
                    Active: false,
                    PartNumber: "4",
                    Price: 135,
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
                    Price: 158,
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
    ],
    FabricName: "I.O.U - Billy 4C",
    FabricPartNumber: "1301",
    SeatPad: false,
};
var getLamia = {
    Code: "lamia",
    Name: "La Mia",
    PartNumber: "LM-MS-",
    LowFile: "lamia-high.glb",
    MedFile: null,
    HighFile: null,
    Price: 225,
    ImgSrc: "assets/layout/lamia.png",
    DefaultLayers: ["General", "Back", "Seat"],
    Options: [
        {
            Code: "colorSeat",
            Name: "Seat Color Selection",
            Description: "Back Color",
            Type: "G",
            RelatedLayers: ["Seat"],
            Values: [
                {
                    Code: "cow-tipping",
                    Name: "Cow Tipping",
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
                    Code: "sugar-packet",
                    Name: "Sugar Packet",
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
                    Code: "rhino",
                    Name: "Rhino",
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
                    Code: "dinghy",
                    Name: "Dinghy",
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
                    Code: "pine-tree",
                    Name: "Pine Tree",
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
                }, //GREEN
                {
                    Code: "ketchup-popsicle",
                    Name: "Ketchup Popsicle",
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
                    Code: "bear-claw",
                    Name: "Bear Claw",
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
            Name: "Back Color Selection",
            Description: "Back Color",
            Type: "G",
            RelatedLayers: ["Back"],
            Values: [
                {
                    Code: "cow-tipping",
                    Name: "Cow Tipping",
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
                    Code: "sugar-packet",
                    Name: "Sugar Packet",
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
                    Code: "rhino",
                    Name: "Rhino",
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
                    Code: "dinghy",
                    Name: "Dinghy",
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
                    Code: "pine-tree",
                    Name: "Pine Tree",
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
                    Code: "ketchup-popsicle",
                    Name: "Ketchup Popsicle",
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
                    Code: "bear-claw",
                    Name: "Bear Claw",
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
        }, //BACK COLOR

    ],
    FabricName : null,
    FabricPartNumber: null,
    SeatPad: false,
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
            Name: "Seat Fabric Selection",
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
                        }
                    ]
                },
                {
                    Code: "grade4",
                    Name: "Grade 4",
                    Active: false,
                    PartNumber: "4",
                    Price: 135,
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
                    Price: 158,
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
    ],
    FabricName: "I.O.U - Billy 4C",
    FabricPartNumber: "1301",
    SeatPad: false,
};
var getTether = {
    Code: "tether",
    Name: "Tether",
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
            Name: "Seat Fabric Selection",
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
                        }
                    ]
                },
                {
                    Code: "grade4",
                    Name: "Grade 4",
                    Active: false,
                    PartNumber: "4",
                    Price: 135,
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
                    Price: 158,
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
    ],
    FabricName: "I.O.U - Billy 4C",
    FabricPartNumber: "1301",
    SeatPad: false,
};
