//console.log("hellothere");
var allModels = [
    {
        "Id": 1,
        "Code": "freeride",
        "Name": "Freeride",        
        "PartNumber": "411",    
        "Price": 649,
        "ImgSrc": "assets/layout/freeride.png",
        "Available": true,
        "Layers": null,
        "Options": null,
        "DefaultLayers": null       
    },
       {
        "Id": 2,
        "Code": "freeride-stool",
        "Name": "Freeride Stool",        
        "PartNumber": "411",    
        "Price": 849,
        "ImgSrc": "assets/layout/freeride-stool.png",
        "Available": true,
        "Layers": null,
        "Options": null,
        "DefaultLayers": null     
    },
       {
        "Id": 3,
        "Code": "g6",
        "Name": "G6",        
        "PartNumber": "711BMG",    
        "Price": 449,
        "ImgSrc": "assets/layout/g6.png",
        "Available": true,
        "Layers": null,
        "Options": null,
        "DefaultLayers": null       
    },
       {
        "Id": 4,
        "Code": "g6-stool",
        "Name": "G6 Stool",        
        "PartNumber": "711BMG",    
        "Price": 649,
        "ImgSrc": "assets/layout/g6-stool.png",
        "Available": true,
        "Layers": null,
        "Options": null,
        "DefaultLayers": null       
    },
       {
        "Id": 5,
        "Code": "roswell",
        "Name": "Roswell",        
        "PartNumber": "817",    
        "Price": 577,
        "ImgSrc": "assets/layout/roswell.png",
        "Available": true,
        "Layers": null,
        "Options": null,
        "DefaultLayers": null     
    },
       {
        "Id": 6,
        "Code": "extra",
        "Name": "Extra",        
        "PartNumber": "5-MS-FA",
        "Price": 339,
        "ImgSrc": "assets/layout/extra.png",
        "Available": true,
        "Layers": null,
        "Options": null,
        "DefaultLayers": null    
    },
       {
        "Id": 7,
        "Code": "la-mia",
        "Name": "La Mia",        
        "PartNumber": "LM-MS",    
        "Price": 225,
        "ImgSrc": "assets/layout/freeride-stool.png",
        "Available": true,
        "Layers": null,
        "Options": null,
        "DefaultLayers": null      
    },
       {
        "Id": 8,
        "Code": "tether-stool",
        "Name": "Tether Stool",        
        "PartNumber": "R05",    
        "Price": 350,
        "ImgSrc": "assets/layout/tether-stool.png",
        "Available": true,
        "Layers": null,
        "Options": null,
        "DefaultLayers": null       
    }
]
;


var getG6 =
{
    "Id": 1,
    "Code": "g6",
    "Name": "G6",
    "PartNumber": "711BMG",
    "LowFile": "g6-low.glb",
    "MedFile": null,
    "HighFile": "g6-high.glb",
    "Price": 449,
    "ImgSrc": "assets/layout/g6.png",
    "DefaultLayers": [
        "Back1",
        "Casters1",
        "Seat1",
        "Config1",
        "Arms1",
        "Seat1Holder",
    ],
    "Layers": [
        {
            "Id": 11,
            "Layer": "Arms1",
            "Default": false
        },
        {
            "Id": 12,
            "Layer": "Arms2",
            "Default": false
        },
        {
            "Id": 13,
            "Layer": "Back1",
            "Default": true
        },
        {
            "Id": 14,
            "Layer": "Back2",
            "Default": false
        },
        {
            "Id": 15,
            "Layer": "Casters1",
            "Default": true
        },
        {
            "Id": 16,
            "Layer": "Config1",
            "Default": true
        },
        {
            "Id": 17,
            "Layer": "Config2",
            "Default": false
        },
        {
            "Id": 18,
            "Layer": "Seat1",
            "Default": true
        },
        {
            "Id": 19,
            "Layer": "Seat2",
            "Default": false
        },
        {
            "Id": 20,
            "Layer": "Arms005",
            "Default": false
        },
        {
            "Id": 21,
            "Layer": "Arms",
            "Default": false
        },
        {
            "Id": 22,
            "Layer": "Circle",
            "Default": false
        },
        {
            "Id": 23,
            "Layer": "Seat1Holder",
            "Default": false
        },
        {
            "Id": 24,
            "Layer": "Seat2Holder",
            "Default": false
        }
    ],
    "Options": [
        {
            "Id": 7,
            "Code": "base",
            "Name": "Base",
            "Description": "Pick your Base",
            "Type": "M",
            "RelatedLayers": [
                {
                    "Id": 1,
                    "Layer": "Arms1"
                },
                {
                    "Id": 2,
                    "Layer": "Arms2"
                },
                {
                    "Id": 3,
                    "Layer": "Back1"
                },
                {
                    "Id": 4,
                    "Layer": "Back2"
                },
                {
                    "Id": 5,
                    "Layer": "Casters1"
                },
                {
                    "Id": 6,
                    "Layer": "Config1"
                },
                {
                    "Id": 7,
                    "Layer": "Config2"
                },
                {
                    "Id": 8,
                    "Layer": "Seat1"
                },
                {
                    "Id": 9,
                    "Layer": "Seat2"
                },
                {
                    "Id": 10,
                    "Layer": "Arms"
                },
                {
                    "Id": 11,
                    "Layer": "Arms005"
                },
                {
                    "Id": 12,
                    "Layer": "Circle"
                }
            ],
            "Moves": null,
            "Values": [
                {
                    "Id": 5,
                    "Code": 1,
                    "Name": "Nylon Base",
                    "Description": null,
                    "Active": true,
                    "PartNumber": "BN",
                    "Price": 0,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": true,
                    "YDistance": 0,
                    "Layers": [
                        {
                            "Id": 1,
                            "Layer": "Config1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Id": 23,
                            "Layer": "Casters1",
                            "MaterialFile": "/g6/base/Casters1",
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Id": 24,
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                            "isArm": true
                        },
                        {
                            "Id": 24,
                            "Layer": "Arms",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                            "isArm": true
                        },
                        {
                            "Id": 24,
                            "Layer": "Back1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Id": 24,
                            "Layer": "Seat1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                },
                {
                    "Id": 6,
                    "Code": 2,
                    "Name": "Aluminum Base",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "BA",
                    "Price": 60,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": true,
                    "YDistance": 0,
                    "Layers": [
                        {
                            "Id": 1,
                            "Layer": "Config1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Id": 23,
                            "Layer": "Casters1",
                            "MaterialFile": "/g6/base/Casters1",
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Id": 24,
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                            "isArm": true
                        },
                        {
                            "Id": 24,
                            "Layer": "Arms",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                            "isArm": true
                        },
                        {
                            "Id": 24,
                            "Layer": "Back1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Id": 24,
                            "Layer": "Seat1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                },
                {
                    "Id": 6,
                    "Code": 2,
                    "Name": "Stool Kit",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "SK",
                    "Price": 200,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": true,
                    "YDistance": 0.18,
                    "Layers": [
                        {
                            "Id": 1,
                            "Layer": "Config2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Id": 23,
                            "Layer": "Casters1",
                            "MaterialFile": "/g6/base/Casters1",
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Id": 1,
                            "Layer": "Circle",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Id": 24,
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                            "isArm": true
                        },
                        {
                            "Id": 24,
                            "Layer": "Arms005",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                            "isArm": true
                        },
                        {
                            "Id": 24,
                            "Layer": "Back2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Id": 24,
                            "Layer": "Seat2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                }
            ]
        }, // BASE AND STOOL
        {
            "Id": 6,
            "Code": "mechanism",
            "Name": "Mechanism",
            "Description": "Pick your Mechanism",
            "Type": "F",
            "RelatedLayers": [
                {
                    
                }
            ],
            "Moves": null,
            "Values": [
                {
                    "Id": 5,
                    "Code": 1,
                    "Name": "3 Position Tilting Locking Synchro Mechanism with Seat Slider",
                    "Description": null,
                    "Active": true,
                    "PartNumber": "M3",
                    "Price": 0,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Layers": [
                      
                    ]
                },
                {
                    "Id": 6,
                    "Code": 2,
                    "Name": "5 Position Tilting Locking Synchro Mechanism with Seat Slider",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "M5",
                    "Price": 55,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Layers": [
                       
                    ]
                },
                {
                    "Id": 6,
                    "Code": 2,
                    "Name": "Stool Kit Mechanism",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "SK",
                    "Price": 0,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Layers": [

                    ]
                }
            ]
        }, //MECHANISM
        {
            "Id": 5,
            "Code": "arm",
            "Name": "Arm",
            "Description": "Pick Your Arm Style",
            "Type": "F",            
            "RelatedLayers": [
                {
                    "Id": 5,
                    "Layer": "Arms1"
                },
                {
                    "Id": 5,
                    "Layer": "Arms005"
                },
                {
                    "Id": 5,
                    "Layer": "Arms"
                },
                {
                    "Id": 5,
                    "Layer": "Arms2"
                }
            ],
            "Moves": null,
            "Values": [
                {
                    "Id": 11,
                    "Code": 1,
                    "Name": "Armless option",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "A000",
                    "Price": 0,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Layers": [
                                 
                    ]
                },
                {
                    "Id": 12,
                    "Code": 2,
                    "Name": "Height adjustable arms",
                    "Description": null,
                    "Active": true,
                    "PartNumber": "A1DB",
                    "Price": 25,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Layers": [
                        {
                            "Id": 13,
                            "Layer": "Arms",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                            "usedWithStool": false
                        },
                        {
                            "Id": 13,
                            "Layer": "Arms005",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                            "usedWithStool": true
                        }
                    ]
                },
                {
                    "Id": 13,
                    "Code": 3,
                    "Name": "3D adjsutable arms (black)",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "51A",
                    "Price": 71,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Layers": [
                        {
                            "Id": 13,
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                            "usedWithStool": false


                        },
                        {
                            "Id": 13,
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                            "usedWithStool": true
                        }
                    ]
                }
            ]
        }, //ARMS
        {
            "Id": 4,
            "Code": "grade",
            "Name": "Seat Fabric Grade",
            "Description": "Pick Your Seat Fabric Grade",
            "Type": "G",
            "RelatedLayers": [
                {
                    "Id": 8,
                    "Layer": "Seat1"
                },
                {
                    "Id": 8,
                    "Layer": "Seat2"
                },
                {
                    "Id": 8,
                    "Layer": "Seat1Holder"
                },
                {
                    "Id": 8,
                    "Layer": "Seat2Holder"    
                }
            ],
            "Moves": null,
            "Values": [
                {
                    "Id": 17,
                    "Code": "grade",
                    "Name": "Grade 1",
                    "Description": null,
                    "Active": true,
                    "PartNumber": "1",
                    "Price": 0,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Collections": [
                        {
                            "Name": "Link",
                            "Active": true
                        },
                        {
                            "Name": "I.O.U",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Id": 8,
                            "Layer": "Seat1"
                        }

                    ]


                },
                {
                    "Id": 18,
                    "Code": "grade",
                    "Name": "Grade V",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "V",
                    "Price": 41,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Collections": [
                        {
                            "Name": "Vinyl",
                            "Active": true
                        }
                    ],
                    "Layers": [
                        {
                            "Id": 8,
                            "Layer": "Seat1"
                        }
                    ]
                },
                {
                    "Id": 19,
                    "Code": "grade",
                    "Name": "Grade 2",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "2",
                    "Price": 66,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Collections": [
                        {
                            "Name": "Foundation 10",
                            "Active": true
                        },
                        {
                            "Name": "Key Largo",
                            "Active": false
                        },
                        {
                            "Name": "Patio",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Id": 8,
                            "Layer": "Seat1"
                        }
                    ]


                },
                {
                    "Id": 20,
                    "Code": "grade",
                    "Name": "Grade 3",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "3",
                    "Price": 109,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Collections": [
                        {
                            "Name": "Habersash",
                            "Active": true
                        },
                        {
                            "Name": "Echo",
                            "Active": false
                        },
                        {
                            "Name": "Cosmopolitan",
                            "Active": false
                        }

                    ],
                    "Layers": [
                        {
                            "Id": 8,
                            "Layer": "Seat1"
                        },
                        {
                            "Id": 8,
                            "Layer": "Seat2"
                        },
                        {
                            "Id": 8,
                            "Layer": "Seat1Holder"
                        },
                        {
                            "Id": 8,
                            "Layer": "Seat2Holder"
                        }
                    ]

                }


            ],
            "Layers": [
                {
                    "Id": 510,
                    "Layer": "Seat1"                    
                },
                {
                    "Id": 446,
                    "Layer": "Seat2"                    
                },
                {
                    "Id": 422,
                    "Layer": "Back1"
                },
                {
                    "Id": 518,
                    "Layer": "Back2"
                },
                 {
                    "Id": 8,
                    "Layer": "Seat1Holder"
                },
                {
                    "Id": 8,
                    "Layer": "Seat2Holder"
                }
            ]
            
        }  //GRADES AND FABRICS
    ]
};


var getLamia =
{
    "Id": 1,
    "Code": "lamia",
    "Name": "La Mia",
    "PartNumber": "LM",
    "LowFile": "lamia-low.glb",
    "MedFile": null,
    "HighFile": "lamia-high.glb",
    "Price": 225,
    "ImgSrc": "assets/layout/lamia.png",
    "DefaultLayers": [
        "Accesories001",
        "Back001",
        "Seat011_Retopo"
    ],    
    "Options": [
        {
            "Id": 1,
            "Code": "grade",
            "Name": "Seat Color",
            "Description": "Pick Your Seat Color",
            "Type": "G",
            "RelatedLayers": [
                {
                    "Id": 8,
                    "Layer": "Seat011_Retopo"
                }
            ],
            "Moves": null,
            "Values": [
                {
                    "Id": 17,
                    "Code": "grade",
                    "Name": "Grade 1",
                    "Description": null,
                    "Active": true,
                    "PartNumber": "1",
                    "Price": 0,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Collections": [
                        {
                            "Name": "Circus Boy Plastics",
                            "Active": true
                        }
                    ],
                    "Layers": [
                        {
                            "Id": 8,
                            "Layer": "Seat011_Retopo"
                        }
                    ]


                }
            ],
            "Layers": [
                {
                    "Id": 510,
                    "Layer": "Seat011_Retopo"
                }
            ]

        },  //Seat Color
        {
            "Id": 1,
            "Code": "grade",
            "Name": "Back Color",
            "Description": "Pick Your Back Color",
            "Type": "G",
            "RelatedLayers": [
                {
                    "Id": 8,
                    "Layer": "Back001"
                }
            ],
            "Moves": null,
            "Values": [
                {
                    "Id": 17,
                    "Code": "grade",
                    "Name": "Grade 1",
                    "Description": null,
                    "Active": true,
                    "PartNumber": null,
                    "Price": 0,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Collections": [
                        {
                            "Name": "Circus Boy Plastics",
                            "Active": true
                        }
                    ],
                    "Layers": [
                        {
                            "Id": 8,
                            "Layer": "Back001"
                        }
                    ]


                }
            ],
            "Layers": [
                {
                    "Id": 510,
                    "Layer": "Back001"
                }
               
            ]

        } // Back Color
    ]
};

var getRoswell =
{
    "Id": 1,
    "Code": "g6",
    "Name": "Roswell",
    "PartNumber": "711BMG",
    "LowFile": "roswell-low.glb",
    "MedFile": null,
    "HighFile": "roswell-high.glb",
    "Price": 577,
    "ImgSrc": "assets/layout/g6.png",
    "DefaultLayers": [
        "Arms",
        "Back",
        "Backholder1",
        "BackHolder2",
        "Base",
        "BaseBars",
        "Casters",
        "Config",
        "Seat",
        "Seat_bottom_plastic002"
    ], 
    "Options": [
        {
            "Id": 7,
            "Code": "back",
            "Name": "Back",
            "Description": "Pick your Back",
            "Type": "M",
            "RelatedLayers": [
                {
                    "Id": 1,
                    "Layer": "Back"
                }
            ],
            "Moves": null,
            "Values": [
                {
                    "Id": 5,
                    "Code": 1,
                    "Name": "Black Back with Grey Outer Frame and Grey Mesh",
                    "Description": null,
                    "Active": true,
                    "PartNumber": "BGG",
                    "Price": 0,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": true,
                    "YDistance": 0,
                    "Layers": [
                        {
                            "Id": 1,
                            "Layer": "Back",
                            "MaterialFile": "assests/materials/g6/Config1",
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                },
                {
                    "Id": 5,
                    "Code": 1,
                    "Name": "Black Back with Grey Outer Frame and Grey Mesh",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "WGG",
                    "Price": 25,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": true,
                    "YDistance": 0,
                    "Layers": [
                        {
                            "Id": 1,
                            "Layer": "Back",
                            "MaterialFile": "assests/materials/g6/Config1",
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                },
                {
                    "Id": 5,
                    "Code": 1,
                    "Name": "Black Back with Black Outer Frame and Grey Fabric",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "BBGF",
                    "Price": 50,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": true,
                    "YDistance": 0,
                    "Layers": [
                        {
                            "Id": 1,
                            "Layer": "Back",
                            "MaterialFile": "assests/materials/g6/Config1",
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                },

            ]
        }, // BACK
        {
            "Id": 7,
            "Code": "base",
            "Name": "Base",
            "Description": "Pick your Base",
            "Type": "F",
            "RelatedLayers": [
                {
                    "Id": 1,
                    "Layer": "Arms1"
                },
                {
                    "Id": 2,
                    "Layer": "Arms2"
                },
                {
                    "Id": 3,
                    "Layer": "Back1"
                },
                {
                    "Id": 4,
                    "Layer": "Back2"
                },
                {
                    "Id": 5,
                    "Layer": "Casters1"
                },
                {
                    "Id": 6,
                    "Layer": "Config1"
                },
                {
                    "Id": 7,
                    "Layer": "Config2"
                },
                {
                    "Id": 8,
                    "Layer": "Seat1"
                },
                {
                    "Id": 9,
                    "Layer": "Seat2"
                }
            ],
            "Moves": null,
            "Values": [
                {
                    "Id": 5,
                    "Code": 1,
                    "Name": "Nylon Base",
                    "Description": null,
                    "Active": true,
                    "PartNumber": "BN",
                    "Price": 0,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": true,
                    "YDistance": 0,
                    "Layers": [
                        {
                            "Id": 1,
                            "Layer": "Base",
                            "MaterialFile": "assests/materials/g6/Config1",
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Id": 23,
                            "Layer": "BaseBars",
                            "MaterialFile": "assests/materials/g6/Casters1",
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                },
                {
                    "Id": 6,
                    "Code": 2,
                    "Name": "Aluminum Base",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "BA",
                    "Price": 60,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": true,
                    "YDistance": 0,
                    "Layers": [
                        {
                            "Id": 1,
                            "Layer": "Base",
                            "MaterialFile": "assests/materials/g6/Config1",
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Id": 23,
                            "Layer": "BaseBars",
                            "MaterialFile": "assests/materials/g6/Casters1",
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                }
            ]
        }, // BASE
        {
            "Id": 6,
            "Code": "mechanism",
            "Name": "Mechanism",
            "Description": "Pick your Mechanism",
            "Type": "F",
            "RelatedLayers": [
                {

                }
            ],
            "Moves": null,
            "Values": [
                {
                    "Id": 5,
                    "Code": 1,
                    "Name": "4 Position Tilting Locking Synchro Mechanism with Seat Slider",
                    "Description": null,
                    "Active": true,
                    "PartNumber": "M3",
                    "Price": 0,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Layers": [

                    ]
                }
            ]
        }, //MECHANISM
        {
            "Id": 5,
            "Code": "arm",
            "Name": "Arm",
            "Description": "Pick Your Arm Style",
            "Type": "F",
            "RelatedLayers": [
                {
                    "Id": 5,
                    "Layer": "Arms"
                }                
            ],
            "Moves": null,
            "Values": [
                {
                    "Id": 11,
                    "Code": 1,
                    "Name": "Armless option",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "A000",
                    "Price": -71,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Layers": [

                    ]
                },
                {
                    "Id": 12,
                    "Code": 2,
                    "Name": "Height Adjustable Arm (Black)",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "A1DB",
                    "Price": -46,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Layers": [
                        {
                            "Id": 13,
                            "Layer": "Arms",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                },
                {
                    "Id": 12,
                    "Code": 2,
                    "Name": "3D Adjustable Arms (Black)",
                    "Description": null,
                    "Active": true,
                    "PartNumber": "A3DB",
                    "Price": 0,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Layers": [
                        {
                            "Id": 13,
                            "Layer": "Arms",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                },
                {
                    "Id": 12,
                    "Code": 2,
                    "Name": "Height adjustable Arm (White)",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "A1DW",
                    "Price": 30,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Layers": [
                        {
                            "Id": 13,
                            "Layer": "Arms",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                },
                {
                    "Id": 12,
                    "Code": 2,
                    "Name": "3D Adjustable Arms (White)",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "A3DW",
                    "Price": 76,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Layers": [
                        {
                            "Id": 13,
                            "Layer": "Arms",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                }
            ]
        }, //ARMS
        {
            "Id": 4,
            "Code": "grade",
            "Name": "Seat Fabric Grade",
            "Description": "Pick Your Seat Fabric Grade",
            "Type": "G",
            "RelatedLayers": [
                {
                    "Id": 8,
                    "Layer": "Seat"
                }
            ],
            "Moves": null,
            "Values": [
                {
                    "Id": 17,
                    "Code": "grade",
                    "Name": "Grade 1",
                    "Description": null,
                    "Active": true,
                    "PartNumber": "1",
                    "Price": 0,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Collections": [
                        {
                            "Name": "Link",
                            "Active": true
                        },
                        {
                            "Name": "I.O.U",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Id": 8,
                            "Layer": "Seat"
                        }
                    ]


                },
                {
                    "Id": 18,
                    "Code": "grade",
                    "Name": "Grade V",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "V",
                    "Price": 41,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Collections": [
                        {
                            "Name": "Vinyl",
                            "Active": true
                        }
                    ],
                    "Layers": [
                        {
                            "Id": 8,
                            "Layer": "Seat"
                        }
                    ]
                },
                {
                    "Id": 19,
                    "Code": "grade",
                    "Name": "Grade 2",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "2",
                    "Price": 66,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Collections": [
                        {
                            "Name": "Foundation 10",
                            "Active": true
                        },
                        {
                            "Name": "Key Largo",
                            "Active": false
                        },
                        {
                            "Name": "Patio",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Id": 8,
                            "Layer": "Seat"
                        }
                    ]


                },
                {
                    "Id": 20,
                    "Code": "grade",
                    "Name": "Grade 3",
                    "Description": null,
                    "Active": false,
                    "PartNumber": "3",
                    "Price": 109,
                    "ImgSrc": null,
                    "ImgDescription": null,
                    "Move": false,
                    "Collections": [
                        {
                            "Name": "Habersash",
                            "Active": true
                        },
                        {
                            "Name": "Echo",
                            "Active": false
                        },
                        {
                            "Name": "Cosmopolitan",
                            "Active": false
                        }
                        
                    ],
                    "Layers": [
                        {
                            "Id": 8,
                            "Layer": "Seat"
                        }
                    ]

                }


            ],
            "Layers": [
 
            ]

        }  //GRADES AND FABRICS
    ]
};



var getFreeride =
{
    "Code": "freeride",
    "Name": "Freeride",
    "PartNumber": "411",
    "LowFile": "freeride-low.glb",
    "MedFile": null,
    "HighFile": "freeride-high.glb",
    "Price": 649,
    "ImgSrc": "assets/layout/freeride.png",
    "DefaultLayers": [
        "Back1",
        "Casters",
        "Config2",
        "Arms2",
        "Seat",
        "SeatHolder",
        "Base",
        "BackHolder1"
    ],  
    "Options": [
        {
            "Code": "back",
            "Name": "Back",
            "Description": "Pick your Back",
            "Type": "F",
            "RelatedLayers": [
                "BackHolder1",
                "BackHolder2",
                "Back1",
                "Back2",
                "Back3"
            ],
            "Values": [
                {
                    "Name": "Mid-Back Grey Mesh",
                    "Active": true,
                    "PartNumber": "BMG",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "BackHolder1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "BackHolder2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },

                    ]
                },
                {
                    "Name": "Mid-Back Black Vinyl",
                    "Active": false,
                    "PartNumber": "BVB",
                    "Price": 43,
                    "Layers": [
                        {
                            "Layer": "BackHolder1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "BackHolder2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },

                    ]
                },
                {
                    "Name": "Grey Fabric Back",
                    "Active": false,
                    "PartNumber": "BFG",
                    "Price": 50,
                    "Layers": [
                        {
                            "Layer": "BackHolder1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "BackHolder2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },

                    ]
                },
                {
                    "Name": "High-Back Black Vinyl",
                    "Active": false,
                    "PartNumber": "AVB",
                    "Price": 120,
                    "Layers": [
                        {
                            "Layer": "BackHolder2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "BackHolder1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Arms4",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Arms5",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        }

                    ]
                }

            ]
        }, // BACK
        {
            "Code": "base",
            "Name": "Base",
            "Description": "Pick your Base",
            "Type": "M",
            "RelatedLayers": [
             "Base"
            ],
            "Values": [
                {
                    "Name": "Nylon Base",
                    "Active": true,
                    "PartNumber": "BN",
                    "Price": 0,
                    "Move": true,
                    "Layers": [
                        {
                            "Layer": "Base",
                            "MaterialFile": "/freeride/base/base",
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                },
                {
                    "Name": "Aluminum Base",
                    "Active": false,
                    "PartNumber": "BA",
                    "Price": 60,
                    "Move": true,
                    "Layers": [                     
                        {
                            "Layer": "Base",
                            "MaterialFile": "/freeride/base/base",
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                }
             
            ]
        }, // BASE
        {
            "Code": "mechanism",
            "Name": "Mechanism",
            "Description": "Pick your Mechanism",
            "Type": "F",
            "RelatedLayers": [
                "Config1",
                "Config2"
            ],
            "Values": [
                {
                    "Name": "3 Position Tilting Locking Synchro Mechanism with Seat Slider",
                    "Active": false,
                    "PartNumber": "M3",
                    "Price": -55,
                    "Layers": [
                        {
                            "Layer": "Config1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Config2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        }
                    ]
                },
                {
                    "Name": "5 Position Tilting Locking Synchro Mechanism with Seat Slider",
                    "Active": true,
                    "PartNumber": "M5",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "Config1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Config2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        }
                       

                    ]
                }
            ]
        }, //MECHANISM
        {
            "Code": "arm",
            "Name": "Arm",
            "Description": "Pick Your Arm Style",
            "Type": "F",
            "RelatedLayers": [
                "Arms1",
                "Arms2",
                "Arms3",
                "Arms4",
                "Arms5"
            ],
            "Values": [
                {
                    "Name": "Armless option",
                    "Active": false,
                    "PartNumber": "A000",
                    "Price": -71,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms4",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms5",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }
                    ]
                },
                {
                    "Name": "Height adjustable arms",
                    "Active": false,
                    "PartNumber": "A1DB",
                    "Price": -46,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms4",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms5",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }
                    ]
                },
                {
                    "Name": "3D adjustable arms (black)",
                    "Active": true,
                    "PartNumber": "A3DB",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "Arms3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms4",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms5",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }
                    ]
                },
                {
                    "Name": "4D adjustable arms (black)",
                    "Active": false,
                    "PartNumber": "A4DB",
                    "Price": 38,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "Arms4",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms5",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }

                    ]
                },
                {
                    "Name": "Fixed aluminum loop arms",
                    "Active": false,
                    "PartNumber": "AFA",
                    "Price": 65,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms4",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "Arms5",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "BackHolder1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "BackHolder2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        }
                    ]
                }
            ]
        }, //ARMS
        {
            "Code": "grade",
            "Name": "Seat Fabric Grade",
            "Description": "Pick Your Seat Fabric Grade",
            "Type": "G",
            "RelatedLayers": [
                "Seat"

            ],
            "Values": [
                {
                    "Code": "grade",
                    "Name": "Grade 1",
                    "Active": true,
                    "PartNumber": "1",
                    "Price": 0,
                    "Collections": [
                        {
                            "Name": "Link",
                            "Active": true
                        },
                        {
                            "Name": "I.O.U",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }

                    ]


                },
                {
                    "Code": "grade",
                    "Name": "Grade V",
                    "Active": false,
                    "PartNumber": "V",
                    "Price": 41,
                    "Collections": [
                        {
                            "Name": "Vinyl",
                            "Active": true
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]
                },
                {
                    "Code": "grade",
                    "Name": "Grade 2",
                    "Active": false,
                    "PartNumber": "2",
                    "Price": 66,
                    "Collections": [
                        {
                            "Name": "Foundation 10",
                            "Active": true
                        },
                        {
                            "Name": "Key Largo",
                            "Active": false
                        },
                        {
                            "Name": "Patio",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]


                },
                {
                    "Code": "grade",
                    "Name": "Grade 3",
                    "Active": false,
                    "PartNumber": "3",
                    "Price": 109,
                    "Collections": [
                        {
                            "Name": "Habersash",
                            "Active": true
                        },
                        {
                            "Name": "Echo",
                            "Active": false
                        },
                        {
                            "Name": "Cosmopolitan",
                            "Active": false
                        }

                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]

                }


            ],
            "Layers": [
                {
                    "Layer": "Seat"
                }
            ]

        }  //GRADES AND FABRICS
    ]
};
var getFreerideStool =
{
    "Code": "freerideStool",
    "Name": "Freeride Stool",
    "PartNumber": "411",
    "LowFile": "freerideStool-low.glb",
    "MedFile": null,
    "HighFile": "freerideStool-high.glb",
    "Price": 849,
    "ImgSrc": "assets/layout/freerideStool.png",
    "DefaultLayers": [
        "Back1",
        "Casters",
        "Config2",
        "Arms2",
        "Seat",
        "SeatHolder",
        "Base",
        "BackHolder1",
        "Casters",
        "Stool"
    ],
    "Options": [
        {
            "Code": "back",
            "Name": "Back",
            "Description": "Pick your Back",
            "Type": "F",
            "RelatedLayers": [
                "BackHolder1",
                "BackHolder2",
                "Back1",
                "Back2",
                "Back3"
            ],
            "Values": [
                {
                    "Name": "Mid-Back Grey Mesh",
                    "Active": true,
                    "PartNumber": "BMG",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "BackHolder1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "BackHolder2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },

                    ]
                },
                {
                    "Name": "Mid-Back Black Vinyl",
                    "Active": false,
                    "PartNumber": "BVB",
                    "Price": 43,
                    "Layers": [
                        {
                            "Layer": "BackHolder1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "BackHolder2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },

                    ]
                },
                {
                    "Name": "Grey Fabric Back",
                    "Active": false,
                    "PartNumber": "BFG",
                    "Price": 50,
                    "Layers": [
                        {
                            "Layer": "BackHolder1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "BackHolder2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },

                    ]
                },
                {
                    "Name": "High-Back Black Vinyl",
                    "Active": false,
                    "PartNumber": "AVB",
                    "Price": 120,
                    "Layers": [
                        {
                            "Layer": "BackHolder2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "BackHolder1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Back1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Arms4",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Arms5",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        }

                    ]
                }

            ]
        }, // BACK
        {
            "Code": "arm",
            "Name": "Arm",
            "Description": "Pick Your Arm Style",
            "Type": "F",
            "RelatedLayers": [
                "Arms1",
                "Arms2",
                "Arms3",
                "Arms4",
                "Arms5"
            ],
            "Values": [
                {
                    "Name": "Armless option",
                    "Active": false,
                    "PartNumber": "A000",
                    "Price": -71,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms4",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms5",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }
                    ]
                },
                {
                    "Name": "Height adjustable arms",
                    "Active": false,
                    "PartNumber": "A1DB",
                    "Price": -46,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms4",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms5",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }
                    ]
                },
                {
                    "Name": "3D adjustable arms (black)",
                    "Active": true,
                    "PartNumber": "A3DB",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "Arms3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms4",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms5",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }
                    ]
                },
                {
                    "Name": "4D adjustable arms (black)",
                    "Active": false,
                    "PartNumber": "A4DB",
                    "Price": 38,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "Arms4",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms5",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }

                    ]
                },
                {
                    "Name": "Fixed aluminum loop arms",
                    "Active": false,
                    "PartNumber": "AFA",
                    "Price": 65,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms3",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms4",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "Arms5",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "BackHolder1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "BackHolder2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        }
                    ]
                }
            ]
        }, //ARMS
        {
            "Code": "grade",
            "Name": "Seat Fabric Grade",
            "Description": "Pick Your Seat Fabric Grade",
            "Type": "G",
            "RelatedLayers": [
                "Seat"
            ],
            "Values": [
                {
                    "Code": "grade",
                    "Name": "Grade 1",
                    "Active": true,
                    "PartNumber": "1",
                    "Price": 0,
                    "Collections": [
                        {
                            "Name": "Link",
                            "Active": true
                        },
                        {
                            "Name": "I.O.U",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }

                    ]


                },
                {
                    "Code": "grade",
                    "Name": "Grade V",
                    "Active": false,
                    "PartNumber": "V",
                    "Price": 41,
                    "Collections": [
                        {
                            "Name": "Vinyl",
                            "Active": true
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]
                },
                {
                    "Code": "grade",
                    "Name": "Grade 2",
                    "Active": false,
                    "PartNumber": "2",
                    "Price": 66,
                    "Collections": [
                        {
                            "Name": "Foundation 10",
                            "Active": true
                        },
                        {
                            "Name": "Key Largo",
                            "Active": false
                        },
                        {
                            "Name": "Patio",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]


                },
                {
                    "Code": "grade",
                    "Name": "Grade 3",
                    "Active": false,
                    "PartNumber": "3",
                    "Price": 109,
                    "Collections": [
                        {
                            "Name": "Habersash",
                            "Active": true
                        },
                        {
                            "Name": "Echo",
                            "Active": false
                        },
                        {
                            "Name": "Cosmopolitan",
                            "Active": false
                        }

                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]

                }


            ],
            "Layers": [
                {
                    "Layer": "Seat"
                }
            ]

        }  //GRADES AND FABRICS
    ]
};
var getG6 =
{
    "Code": "g6",
    "Name": "G6",
    "PartNumber": "711MG",
    "LowFile": "g6-low.glb",
    "MedFile": null,
    "HighFile": "g6-high.glb",
    "Price": 449,
    "ImgSrc": "assets/layout/g6.png",
    "DefaultLayers": [
        "Arms",
        "Casters",
        "Config1",
        "Back",
        "BackHolder", ,
        "Base",
        "SeatHolder",
        "Seat"
    ],
    "Options": [
  
        {
            "Code": "base",
            "Name": "Base",
            "Description": "Pick your Base",
            "Type": "M",
            "RelatedLayers": [
                "Base"
            ],
            "Values": [
                {
                    "Name": "Nylon Base",
                    "Active": true,
                    "PartNumber": "BN",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "Casters",
                            "MaterialFile": "/g6/base/Casers1",
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                },
                {
                    "Name": "Aluminum Base",
                    "Active": false,
                    "PartNumber": "BA",
                    "Price": 60,
                    "Layers": [
                        {
                            "Layer": "Casters",
                            "MaterialFile": "/g6/base/Casters1",
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                }

            ]
        }, // BASE
        {
            "Code": "mechanism",
            "Name": "Mechanism",
            "Description": "Pick your Mechanism",
            "Type": "F",
            "RelatedLayers": [
                "Config1",
                "Config2"
            ],
            "Values": [
                {
                    "Name": "3 Position Tilting Locking Synchro Mechanism with Seat Slider",
                    "Active": true,
                    "PartNumber": "M3",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "Config1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Config2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        }
                    ]
                },
                {
                    "Name": "5 Position Tilting Locking Synchro Mechanism with Seat Slider",
                    "Active": false,
                    "PartNumber": "M5",
                    "Price": 55,
                    "Layers": [
                        {
                            "Layer": "Config1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false
                        },
                        {
                            "Layer": "Config2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        }


                    ]
                }
            ]
        }, //MECHANISM
        {
            "Code": "arm",
            "Name": "Arm",
            "Description": "Pick Your Arm Style",
            "Type": "F",
            "RelatedLayers": [
                "Arms",
                "Arms1"
            ],
            "isHighBack": false,
            "Values": [
                {
                    "Name": "Armless option",
                    "Active": false,
                    "PartNumber": "A000",
                    "Price": -25,
                    "Layers": [
                        {
                            "Layer": "Arms",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }
                    ]
                },
                {
                    "Name": "Height adjustable arms",
                    "Active": true,
                    "PartNumber": "A1DB",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "Arms",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }
                    ]
                },
                {
                    "Name": "3D adjustable arms (black)",
                    "Active": false,
                    "PartNumber": "A3DB",
                    "Price": 46,
                    "Layers": [
                        {
                            "Layer": "Arms",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        }
                    ]
                }
            ]
        }, //ARMS
        {
            "Code": "grade",
            "Name": "Seat Fabric Grade",
            "Description": "Pick Your Seat Fabric Grade",
            "Type": "G",
            "RelatedLayers": [
                "Seat"
            ],
            "Values": [
                {
                    "Code": "grade1",
                    "Name": "Grade 1",
                    "Active": true,
                    "PartNumber": "1",
                    "Price": 0,
                    "Collections": [
                        {
                            "Name": "Link",
                            "Active": true
                        },
                        {
                            "Name": "I.O.U",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }

                    ]


                },
                {
                    "Code": "gradev",
                    "Name": "Grade V",
                    "Active": false,
                    "PartNumber": "V",
                    "Price": 41,
                    "Collections": [
                        {
                            "Name": "Vinyl",
                            "Active": true
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]
                },
                {
                    "Code": "grade2",
                    "Name": "Grade 2",
                    "Active": false,
                    "PartNumber": "2",
                    "Price": 66,
                    "Collections": [
                        {
                            "Name": "Foundation 10",
                            "Active": true
                        },
                        {
                            "Name": "Key Largo",
                            "Active": false
                        },
                        {
                            "Name": "Patio",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]


                },
                {
                    "Code": "grade3",
                    "Name": "Grade 3",
                    "Active": false,
                    "PartNumber": "3",
                    "Price": 109,
                    "Collections": [
                        {
                            "Name": "Habersash",
                            "Active": true
                        },
                        {
                            "Name": "Echo",
                            "Active": false
                        },
                        {
                            "Name": "Cosmopolitan",
                            "Active": false
                        }

                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        },
                        {
                            "Layer": "SeatHolder"
                        }
                    ]

                }


            ],
            "Layers": [
                {
                    "Layer": "Seat"
                },
                {
                    "Layer": "SeatHolder"
                }
            ]

        }  //GRADES AND FABRICS
    ]
};
var getG6Stool =
{
    "Code": "g6Stool",
    "Name": "G6 Stool",
    "PartNumber": "711BMG-SK",
    "LowFile": "g6Stool-low.glb",
    "MedFile": null,
    "HighFile": "g6Stool-high.glb",
    "Price": 649,
    "ImgSrc": "assets/layout/g6.png",
    "DefaultLayers": [
        "Arms1",
        "Casters",
        "Config1",
        "Back",
        "BackHolder", ,
        "Base",
        "SeatHolder",
        "Seat"
    ],
    "Options": [
      
        {
            "Code": "arm",
            "Name": "Arm",
            "Description": "Pick Your Arm Style",
            "Type": "F",
            "RelatedLayers": [
                "Arms1",
                "Arms2"
            ],
            "Values": [
                {
                    "Name": "Armless option",
                    "Active": false,
                    "PartNumber": "A000",
                    "Price": -25,
                    "Layers": [
                        {
                            "Layer": "Arms",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }
                    ]
                },
                {
                    "Name": "Height adjustable arms",
                    "Active": true,
                    "PartNumber": "A1DB",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }
                    ]
                },
                {
                    "Name": "3D adjustable arms (black)",
                    "Active": false,
                    "PartNumber": "A3DB",
                    "Price": 46,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        }
                    ]
                }
            ]
        }, //ARMS
        {
            "Code": "grade",
            "Name": "Seat Fabric Grade",
            "Description": "Pick Your Seat Fabric Grade",
            "Type": "G",
            "RelatedLayers": [
                "Seat"
            ],
            "Values": [
                {
                    "Code": "grade1",
                    "Name": "Grade 1",
                    "Active": true,
                    "PartNumber": "1",
                    "Price": 0,
                    "Collections": [
                        {
                            "Name": "Link",
                            "Active": true
                        },
                        {
                            "Name": "I.O.U",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }

                    ]


                },
                {
                    "Code": "gradev",
                    "Name": "Grade V",
                    "Active": false,
                    "PartNumber": "V",
                    "Price": 41,
                    "Collections": [
                        {
                            "Name": "Vinyl",
                            "Active": true
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]
                },
                {
                    "Code": "grade2",
                    "Name": "Grade 2",
                    "Active": false,
                    "PartNumber": "2",
                    "Price": 66,
                    "Collections": [
                        {
                            "Name": "Foundation 10",
                            "Active": true
                        },
                        {
                            "Name": "Key Largo",
                            "Active": false
                        },
                        {
                            "Name": "Patio",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]


                },
                {
                    "Code": "grade3",
                    "Name": "Grade 3",
                    "Active": false,
                    "PartNumber": "3",
                    "Price": 109,
                    "Collections": [
                        {
                            "Name": "Habersash",
                            "Active": true
                        },
                        {
                            "Name": "Echo",
                            "Active": false
                        },
                        {
                            "Name": "Cosmopolitan",
                            "Active": false
                        }

                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        },
                        {
                            "Layer": "SeatHolder"
                        }
                    ]

                }


            ],
            "Layers": [
                {
                    "Layer": "Seat"
                },
                {
                    "Layer": "SeatHolder"
                }
            ]

        }  //GRADES AND FABRICS
    ]
};
var getRoswell =
{
    "Code": "roswell",
    "Name": "Roswell",
    "PartNumber": "817",
    "LowFile": "roswell-low.glb",
    "MedFile": null,
    "HighFile": "roswell-high.glb",
    "Price": 577,
    "ImgSrc": "assets/layout/roswell.png",
    "DefaultLayers": [
        "Arms2",
        "Back",
        "BackHolder",
        "Base",
        "Casters",
        "Config",
        "Seat",
        "SeatHolder"        
    ],
    "Options": [
        {
            "Code": "back",
            "Name": "Back",
            "Description": "Pick your Back",
            "Type": "F",
            "RelatedLayers": [               
                "BackHolder",
                "Back"
            ],
            "Values": [
                {
                    "Name": "Black Back with Grey Outer Frame and Grey Mesh",
                    "Active": true,
                    "PartNumber": "BGG",
                    "Price": 0,
                    "Layers": [                      
                        {
                            "Layer": "BackHolder",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back",
                            "MaterialFile": null,
                            "Color": "#000",
                            "Visibility": true
                        }

                    ]
                },
                {
                    "Name": "White Back with Grey Outer Frame and Grey Mesh",
                    "Active": false,
                    "PartNumber": "WGG",
                    "Price": 25,
                    "Layers": [
                       
                        {
                            "Layer": "BackHolder",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        }

                    ]
                },
                {
                    "Name": "Black Back with Black Outer Frame and Grey Fabric",
                    "Active": false,
                    "PartNumber": "BBGF",
                    "Price": 50,
                    "Layers": [
                       
                        {
                            "Layer": "BackHolder",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back1",
                            "MaterialFile": null,
                            "Color": "#000",
                            "Visibility": true
                        }

                    ]
                },
                {
                    "Name": "Black Back with Grey Outer Frame; Grey Mesh with Black Frame and Headrest",
                    "Active": false,
                    "PartNumber": "BGHR",
                    "Price": 62,
                    "Layers": [
                       
                        {
                            "Layer": "BackHolder",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back",
                            "MaterialFile": null,
                            "Color": "#101000",
                            "Visibility": true
                        }

                    ]
                },
                {
                    "Name": "White Back with Grey Outer Frame; Grey Mesh with Black Frame and Headrest",
                    "Active": false,
                    "PartNumber": "WBHR",
                    "Price": 86,
                    "Layers": [                       
                        {
                            "Layer": "BackHolder",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back",
                            "MaterialFile": null,
                            "Color": "#1010FF",
                            "Visibility": true
                        }

                    ]
                }

            ]
        }, // BACK
        {
            "Code": "base",
            "Name": "Base",
            "Description": "Pick your Base",
            "Type": "M",
            "RelatedLayers": [
                "Base"
            ],
            "Values": [
                {
                    "Name": "Nylon Base",
                    "Active": true,
                    "PartNumber": "BN",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "Base",
                            "MaterialFile": "/roswell/base/base",
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                },
                {
                    "Name": "Aluminum Base",
                    "Active": false,
                    "PartNumber": "BA",
                    "Price": 60,
                    "Layers": [
                        {
                            "Layer": "Base",
                            "MaterialFile": "/roswell/base/base",
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                }

            ]
        }, // BASE
        {
            "Code": "mechanism",
            "Name": "Mechanism",
            "Description": "Pick your Mechanism",
            "Type": "F",
            "RelatedLayers": [
                "Config",
            ],
            "Values": [
                {
                    "Name": "4 Position Tilting Locking Synchro Mechanism with Seat Slider",
                    "Active": true,
                    "PartNumber": "M4",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "Config",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        }
                    ]
                }
         
            ]
        }, //MECHANISM
        {
            "Code": "arm",
            "Name": "Arm",
            "Description": "Pick Your Arm Style",
            "Type": "F",
            "RelatedLayers": [
                "Arms1",
                "Arms2"
            ],
            "Values": [
                {
                    "Name": "Armless option",
                    "Active": false,
                    "PartNumber": "A000",
                    "Price": -71,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }
                    ]
                },
                {
                    "Name": "Height adjustable arms (black)",
                    "Active": false,
                    "PartNumber": "A1DB",
                    "Price": -46,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }
                    ]
                },
                {
                    "Name": "3D adjustable arms (black)",
                    "Active": true,
                    "PartNumber": "A3DB",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        }
                    ]
                },
                {
                    "Name": "Height adjustable arm (white)",
                    "Active": false,
                    "PartNumber": "A1DW",
                    "Price": 30,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }

                    ]
                },
                {
                    "Name": "3D adjustable arms (white)",
                    "Active": false,
                    "PartNumber": "A3DW",
                    "Price": 76,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        }
                    ]
                }
            ]
        }, //ARMS
        {
            "Code": "grade",
            "Name": "Seat Fabric Grade",
            "Description": "Pick Your Seat Fabric Grade",
            "Type": "G",
            "RelatedLayers": [
                "Seat"
            ],
            "Values": [
                {
                    "Code": "grade",
                    "Name": "Grade 1",
                    "Active": true,
                    "PartNumber": "1",
                    "Price": 0,
                    "Collections": [
                        {
                            "Name": "Link",
                            "Active": true
                        },
                        {
                            "Name": "I.O.U",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }

                    ]


                },
                {
                    "Code": "grade",
                    "Name": "Grade V",
                    "Active": false,
                    "PartNumber": "V",
                    "Price": 41,
                    "Collections": [
                        {
                            "Name": "Vinyl",
                            "Active": true
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]
                },
                {
                    "Code": "grade",
                    "Name": "Grade 2",
                    "Active": false,
                    "PartNumber": "2",
                    "Price": 66,
                    "Collections": [
                        {
                            "Name": "Foundation 10",
                            "Active": true
                        },
                        {
                            "Name": "Key Largo",
                            "Active": false
                        },
                        {
                            "Name": "Patio",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]


                },
                {
                    "Code": "grade",
                    "Name": "Grade 3",
                    "Active": false,
                    "PartNumber": "3",
                    "Price": 109,
                    "Collections": [
                        {
                            "Name": "Habersash",
                            "Active": true
                        },
                        {
                            "Name": "Echo",
                            "Active": false
                        },
                        {
                            "Name": "Cosmopolitan",
                            "Active": false
                        }

                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]

                }


            ],
            "Layers": [
                {
                    "Layer": "Seat"
                }
            ]

        }  //GRADES AND FABRICS
    ]
};
var getRoswellStool =
{
    "Code": "roswellStool",
    "Name": "Roswell Stool",
    "PartNumber": "817",
    "LowFile": "roswellStool-low.glb",
    "MedFile": null,
    "HighFile": "roswellStool-high.glb",
    "Price": 777,
    "ImgSrc": "assets/layout/roswellStool.png",
    "DefaultLayers": [
        "Arms2",
        "Back",
        "BackHolder",
        "Base",
        "Casters",
        "Config",
        "Seat",
        "SeatHolder"
    ],
    "Options": [
        {
            "Code": "back",
            "Name": "Back",
            "Description": "Pick your Back",
            "Type": "F",
            "RelatedLayers": [
                "BackHolder",
                "Back"
            ],
            "Values": [
                {
                    "Name": "Black Back with Grey Outer Frame and Grey Mesh",
                    "Active": true,
                    "PartNumber": "BGG",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "BackHolder",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back",
                            "MaterialFile": null,
                            "Color": "#000",
                            "Visibility": true
                        }

                    ]
                },
                {
                    "Name": "White Back with Grey Outer Frame and Grey Mesh",
                    "Active": false,
                    "PartNumber": "WGG",
                    "Price": 25,
                    "Layers": [

                        {
                            "Layer": "BackHolder",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        }

                    ]
                },
                {
                    "Name": "Black Back with Black Outer Frame and Grey Fabric",
                    "Active": false,
                    "PartNumber": "BBGF",
                    "Price": 50,
                    "Layers": [

                        {
                            "Layer": "BackHolder",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back1",
                            "MaterialFile": null,
                            "Color": "#000",
                            "Visibility": true
                        }

                    ]
                },
                {
                    "Name": "Black Back with Grey Outer Frame; Grey Mesh with Black Frame and Headrest",
                    "Active": false,
                    "PartNumber": "BGHR",
                    "Price": 62,
                    "Layers": [

                        {
                            "Layer": "BackHolder",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back",
                            "MaterialFile": null,
                            "Color": "#101000",
                            "Visibility": true
                        }

                    ]
                },
                {
                    "Name": "White Back with Grey Outer Frame; Grey Mesh with Black Frame and Headrest",
                    "Active": false,
                    "PartNumber": "WBHR",
                    "Price": 86,
                    "Layers": [
                        {
                            "Layer": "BackHolder",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true
                        },
                        {
                            "Layer": "Back",
                            "MaterialFile": null,
                            "Color": "#1010FF",
                            "Visibility": true
                        }

                    ]
                }

            ]
        }, // BACK
        {
            "Code": "arm",
            "Name": "Arm",
            "Description": "Pick Your Arm Style",
            "Type": "F",
            "RelatedLayers": [
                "Arms1",
                "Arms2"
            ],
            "Values": [
                {
                    "Name": "Armless option",
                    "Active": false,
                    "PartNumber": "A000",
                    "Price": -71,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }
                    ]
                },
                {
                    "Name": "Height adjustable arms (black)",
                    "Active": false,
                    "PartNumber": "A1DB",
                    "Price": -46,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }
                    ]
                },
                {
                    "Name": "3D adjustable arms (black)",
                    "Active": true,
                    "PartNumber": "A3DB",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        }
                    ]
                },
                {
                    "Name": "Height adjustable arm (white)",
                    "Active": false,
                    "PartNumber": "A1DW",
                    "Price": 30,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        }

                    ]
                },
                {
                    "Name": "3D adjustable arms (white)",
                    "Active": false,
                    "PartNumber": "A3DW",
                    "Price": 76,
                    "Layers": [
                        {
                            "Layer": "Arms1",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": false,
                        },
                        {
                            "Layer": "Arms2",
                            "MaterialFile": null,
                            "Color": null,
                            "Visibility": true,
                        }
                    ]
                }
            ]
        }, //ARMS
        {
            "Code": "grade",
            "Name": "Seat Fabric Grade",
            "Description": "Pick Your Seat Fabric Grade",
            "Type": "G",
            "RelatedLayers": [
                "Seat"
            ],
            "Values": [
                {
                    "Code": "grade",
                    "Name": "Grade 1",
                    "Active": true,
                    "PartNumber": "1",
                    "Price": 0,
                    "Collections": [
                        {
                            "Name": "Link",
                            "Active": true
                        },
                        {
                            "Name": "I.O.U",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }

                    ]


                },
                {
                    "Code": "grade",
                    "Name": "Grade V",
                    "Active": false,
                    "PartNumber": "V",
                    "Price": 41,
                    "Collections": [
                        {
                            "Name": "Vinyl",
                            "Active": true
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]
                },
                {
                    "Code": "grade",
                    "Name": "Grade 2",
                    "Active": false,
                    "PartNumber": "2",
                    "Price": 66,
                    "Collections": [
                        {
                            "Name": "Foundation 10",
                            "Active": true
                        },
                        {
                            "Name": "Key Largo",
                            "Active": false
                        },
                        {
                            "Name": "Patio",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]


                },
                {
                    "Code": "grade",
                    "Name": "Grade 3",
                    "Active": false,
                    "PartNumber": "3",
                    "Price": 109,
                    "Collections": [
                        {
                            "Name": "Habersash",
                            "Active": true
                        },
                        {
                            "Name": "Echo",
                            "Active": false
                        },
                        {
                            "Name": "Cosmopolitan",
                            "Active": false
                        }

                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]

                }


            ],
            "Layers": [
                {
                    "Layer": "Seat"
                }
            ]

        }  //GRADES AND FABRICS
    ]
};
var getLamia =
{
    "Code": "lamia",
    "Name": "La Mia",
    "PartNumber": "LM-MS",
    "LowFile": "lamia-low.glb",
    "MedFile": null,
    "HighFile": "lamia-high.glb",
    "Price": 225,
    "ImgSrc": "assets/layout/lamia.png",
    "DefaultLayers": [
        "General",
        "Back",
        "Seat"
    ],
    "Options": [

        {
            "Code": "color",
            "Name": "Seat Color",
            "Description": "Pick Your Seat Color",
            "Type": "G",
            "RelatedLayers": [
                "Seat"
            ],
            "Values": [
                {
                    "Name": "Black",
                    "Active": true,
                    "PartNumber": "S01",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "Seat011_Retopo",
                            "MaterialFile": null,//"/lamia/seat/Seat011_Retopo",
                            "Color": "#000",
                            "Visibility": true
                        }

                    ]
                }, // BLACK
                {
                    "Name": "White",
                    "Active": false,
                    "PartNumber": "S02",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "Seat011_Retopo",
                            "MaterialFile": null,//"/lamia/seat/Seat011_Retopo",
                            "Color": "#FFFFFF",
                            "Visibility": true
                        }

                    ]
                }, //WHITE
                {
                    "Name": "Grey",
                    "Active": false,
                    "PartNumber": "S03",
                    "Price": 0,
                    "Layers": [
                        {
                            "Layer": "Seat011_Retopo",
                            "MaterialFile": null,//"/lamia/seat/Seat011_Retopo",
                            "Color": "#101010",
                            "Visibility": true
                        }

                    ]
                }, //GREY
           
            ]
       

        },  //SEAT COLOR
        {
            "Code": "color",
            "Name": "Back Color",
            "Description": "Pick Your Back Color",
            "Type": "G",
            "RelatedLayers": [
                "Back"
            ],
            "Values": [
                {
                    "Code": "backColor",
                    "Name": "Back Color",
                    "Active": true,
                    "PartNumber": "1",
                    "Price": 0,
                    "Collections": [
                        {
                            "Name": "Circus Boy Plastics",
                            "Active": true
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Back"
                        }

                    ]


                },


            ]


        }  //BACK COLOR
    ]
};
var getTether =
{
    "Code": "tether",
    "Name": "Tether Stool",
    "PartNumber": "R05",
    "LowFile": "tether-low.glb",
    "MedFile": null,
    "HighFile": "tether-high.glb",
    "Price": 350,
    "ImgSrc": "assets/layout/tether.png",
    "DefaultLayers": [
        "Base",
        "Seat"
    ],
    "Options": [

        {
            "Code": "grade",
            "Name": "Seat Fabric Grade",
            "Description": "Pick Your Seat Fabric Grade",
            "Type": "G",
            "RelatedLayers": [
                "Seat"
            ],
            "Values": [
                {
                    "Code": "grade1",
                    "Name": "Grade 1",
                    "Active": true,
                    "PartNumber": "1",
                    "Price": 0,
                    "Collections": [
                        {
                            "Name": "Link",
                            "Active": true
                        },
                        {
                            "Name": "I.O.U",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }

                    ]


                },
                {
                    "Code": "gradev",
                    "Name": "Grade V",
                    "Active": false,
                    "PartNumber": "V",
                    "Price": 41,
                    "Collections": [
                        {
                            "Name": "Vinyl",
                            "Active": true
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]
                },
                {
                    "Code": "grade2",
                    "Name": "Grade 2",
                    "Active": false,
                    "PartNumber": "2",
                    "Price": 66,
                    "Collections": [
                        {
                            "Name": "Foundation 10",
                            "Active": true
                        },
                        {
                            "Name": "Key Largo",
                            "Active": false
                        },
                        {
                            "Name": "Patio",
                            "Active": false
                        }
                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]


                },
                {
                    "Code": "grade3",
                    "Name": "Grade 3",
                    "Active": false,
                    "PartNumber": "3",
                    "Price": 109,
                    "Collections": [
                        {
                            "Name": "Habersash",
                            "Active": true
                        },
                        {
                            "Name": "Echo",
                            "Active": false
                        },
                        {
                            "Name": "Cosmopolitan",
                            "Active": false
                        }

                    ],
                    "Layers": [
                        {
                            "Layer": "Seat"
                        }
                    ]

                }


            ],
            "Layers": [
                {
                    "Layer": "Seat1"
                },
                {
                    "Layer": "Seat2"
                },
                {
                    "Layer": "Back1"
                },
                {
                    "Layer": "Back2"
                },
                {
                    "Layer": "Seat1Holder"
                },
                {
                    "Layer": "Seat2Holder"
                }
            ]

        }  //GRADES AND FABRICS
    ]
};
