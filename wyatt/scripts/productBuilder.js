
//GET DATA
var dataDB = getFreeride;
console.log(dataDB);

//Menu building variables
var canvas = document.getElementById('wyattCanvas');
var container = document.getElementById('wyattContainer');


var loopOn = false;
var highBackOn = false;
var feature = "";
var option = "";
var collection = "";
var materialSet = ""
var modelNumberOfOptions = dataDB.Options.length;
////**************************************************************************
//********************* BABYLON ENGINE INITIALIZATION *****************
////**************************************************************************
var engine = new BABYLON.Engine(canvas, true, { premultipliedAlpha: false, preserveDrawingBuffer: true, stencil: true });
var scene = new BABYLON.Scene(engine);
var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
var photoCamera;  // Front Camera
var photoCameraB;  //Back camera
camera.setTarget(BABYLON.Vector3.Zero());
//var skyboxPath = "public/scene/roomEnvHDR.dds";
var baseUrl;
var asyncMesh;
var currentMesh;
scene.clearColor = new BABYLON.Color3(1, 1, 1); //Background color


var createScene = function () {


    // Model loader
    BABYLON.GLTFFileLoader.IncrementalLoading = false;
    baseUrl = "/assets/models/";
    lowFile = dataDB.HighFile;
    BABYLON.SceneLoader.ImportMesh("", baseUrl, lowFile, scene, function (syncMesh) {



        // Camera 
        scene.createDefaultCameraOrLight(true, true, true);
        scene.activeCamera.lowerRadiusLimit = 800;
        scene.activeCamera.upperRadiusLimit = 3000;
        scene.activeCamera.panningSensibility = 10;
        scene.activeCamera.wheelPrecision = 0.25;
        scene.activeCamera.alpha = Math.PI / 3;
        scene.activeCamera.beta = 7 * Math.PI / 16;
        photoCamera = scene.activeCamera.clone();
        photoCameraB = photoCamera.clone();
        photoCameraB.alpha = Math.PI / 3 + Math.PI;


        //Lightning
        scene.lights[0].dispose();
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 10, 0), scene);
        light.intensity = 0.5;


        for (var i = 1; i < syncMesh.length; i++) {

            syncMesh[i].actionManager = new BABYLON.ActionManager(scene); // Pointer behavior on model hover                       
            syncMesh[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (ev) {
            }, false));

            //More & more bump
            if (syncMesh[i].material && syncMesh[i].material.bumpTexture) {
                syncMesh[i].material.bumpTexture.level = 1.5;
            }

            //Show me the default
            syncMesh[i].isVisible = dataDB.DefaultLayers.includes(syncMesh[i].name);

        }

        //Env texture
        var hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("assets/environment/tokyo.dds", scene);
        hdrTexture.gammaStapce = true;
        scene.environmentTexture = hdrTexture;


        //engine.hideLoadingUI();
        currentMesh = syncMesh;


        if (!detectmob()) {
            if (dataDB.MedFile) {
                asyncDownload(dataDB.MedFile);
            }
            if (dataDB.HighFile) {
                asyncDownload(dataDB.HighFile);
                //console.log("high");
            }
        }
        //retrieveFromUser();
    }, function (evt) {
        //On progress function

        if (evt.lengthComputable) {
            console.log("Loading, please wait..." + (evt.loaded * 100 / evt.total).toFixed() + "%");
        }
        else {

            dlCount = evt.loaded / (1024 * 1024);
            console.log("Loading, please wait..." + Math.floor(dlCount * 100.0) / 100.0 + " MB already loaded.");
        }


    }, function (error) {

    }
    );


    return scene;
}



// call the createScene function
var scene = createScene();


// run the render loop
engine.runRenderLoop(function () {
    window.addEventListener("resize", function () { engine.resize(); });

    scene.render();

});


//************************************************************
//******************** ASYNC DOWNLOAD **************************
//***********************************************************
function asyncDownload(lod) {
    Promise.all([

        BABYLON.SceneLoader.ImportMeshAsync(null, baseUrl, lod, scene).then(function (asyncResult) {

            asyncResult = asyncResult.meshes;
            asyncMesh = asyncResult;

            for (var i = 1; i < asyncResult.length; i++) {
                asyncResult[i].receiveShadows = true;

                asyncResult[i].actionManager = new BABYLON.ActionManager(scene);

                //ON MOUSE ENTER
                asyncResult[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (ev) {

                }, false));

                //More & more bump
                if (asyncResult[i].material && asyncResult[i].material.bumpTexture) {
                    asyncResult[i].material.bumpTexture.level = 1.5;
                }
            }


        }),
        //select the options here
    ]).then(() => {
        for (var i = 1; i < currentMesh.length; i++) {
            asyncMesh[i]._material = currentMesh[i]._material;
            asyncMesh[i].isVisible = currentMesh[i].isVisible;
            currentMesh[i].dispose();
        }
        currentMesh = asyncMesh;
    });
}

function detectmob() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}


//MENU BUILDING

var productName = document.getElementById("productName");
productName.textContent = dataDB.Name;
var totalPrice = dataDB.Price;
var currentOptionPrice = Array(dataDB.Options.length);

//PRICE CALCULATION
var productPrice = document.getElementById("productPrice");

function priceCalculation() {

    for (var nOptions = 0; nOptions < dataDB.Options.length; nOptions++) {
        for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {
            if (dataDB.Options[nOptions].Values[nValues].Active == true) {
                currentOptionPrice[nOptions] = dataDB.Options[nOptions].Values[nValues].Price;

            }
        }
        for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {
            dataDB.Options[nOptions].Values[nValues].Price -= currentOptionPrice[nOptions]
        }
        totalPrice += currentOptionPrice[nOptions];
        productPrice.textContent = "$ " + totalPrice + ".00";
    }
}
priceCalculation();


//OPTIONS BUILDING

var optionsMenu = document.getElementById("optionsMenu");

var $accordion = $("<div>", { "class": "accordion", "id": "wyattAccordion" });
$("#optionsMenu").append($accordion);

//Build accordions as many features are in the model
console.log(dataDB)
for (var nOptions = 0; nOptions < dataDB.Options.length; nOptions++) {  

    var $card = $("<div>", { "class": "card" });
    $accordion.append($card);
    var cardName = dataDB.Options[nOptions].Code;
    //var $divider = $("</br>");
    //$accordion.append($divider);
    var $cardHeader = $("<div>", { "class": "class-header", "id": cardName + "Header" });
    $card.append($cardHeader);
    var $mb = $("<h2>", { "class": "mb-0" });
    $cardHeader.append($mb);

    var $cardButton = $("<button>", {
        "class": "btn btn-link", 'type': "button",
        "data-toggle": "collapse", "data-target": "#" + cardName,
        "aria-expanded": "true", "aria-controls": cardName, "text": cardName,
        "id": cardName + "Name"
    });
    $mb.append($cardButton);
    

    var $accordionInfoContainer = $("<div>", {
        "id": cardName, "class": "collapse",
        "aria-labelledby": cardName + "Header", "data-parent": "#wyattAccordion",
        "heightStyle": "content"
    });
    $card.append($accordionInfoContainer);

    var $accordionInfo = $("<div>", { "class": "card-body" });
    $accordionInfoContainer.append($accordionInfo);

    //ADD CARD INFO TO $accordionInfo
    var $rowDivider = $("<div>", { "class": "row no-gutter", "id": cardName + "-row" });
    $accordionInfo.append($rowDivider);



    if (!cardName.includes("grade")) {

        var $listGroup = $("<div>", { "class": "list-group list-group-flush", "id": "listTab", "role": "tablist" });
        $rowDivider.append($listGroup);
        
        for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {
            if (dataDB.Options[nOptions].Values[nValues].Active) { //Current active option
                var selectedOption = dataDB.Options[nOptions].Values[nValues].Name;
                var $featureOptions = $("<a>", {
                    "class": "list-group-item list-group-item-action active", "id": "list-" + selectedOption + "-list",
                    "data-toggle": "list", "href": "#list-" + selectedOption, "role": "tab", "aria-controls": selectedOption,
                    "onClick": "optionChangedOnFeature(\"" + dataDB.Options[nOptions].Name + "," + selectedOption + "\")",
                    "text": selectedOption
                });
                $cardButton.text(dataDB.Options[nOptions].Description);

            }

            else {
                var nonSelectedOption = dataDB.Options[nOptions].Values[nValues].Name;
                var $featureOptions = $("<a>", {
                    "class": "list-group-item list-group-item-action", "id": "list-" + nonSelectedOption + "-list",
                    "data-toggle": "list", "href": "#list-" + nonSelectedOption, "role": "tab", "aria-controls": nonSelectedOption,
                    "onClick": "optionChangedOnFeature(\"" + dataDB.Options[nOptions].Name + "," + nonSelectedOption + "\")",
                    "text": nonSelectedOption
                });
            }

            
            $listGroup.append($featureOptions);
            
        }
    }
    
    if (cardName.includes("grade")) {
        var $baseRow = $("<div>", { "class": "row no-gutter", "id": "gradesBaseRow" });
        var $baseFilterRow = $("<div>", { "class": "row no-gutter", "id": "gradesFilterRow" })
        var $dropdownColGrades = $("<div>", { "class": "col", "id": "dropdownColGrades" });
        var $dropdownColMats = $("<div>", { "class": "col", "id": "dropdownColMats" });
        var $imagesContainer = $("<div>", { "class": "row no-gutter", "id": "imagesContainer" });
        $rowDivider.append($baseFilterRow);
        $rowDivider.append($baseRow);
        $baseFilterRow.append($dropdownColGrades);
        $baseFilterRow.append($dropdownColMats);
        $baseRow.append($imagesContainer);

        materialStructureBuilding(nOptions);

    }

}

// Material Grades structure
function materialStructureBuilding(nOptions) {
    $cardButton.text(dataDB.Options[nOptions].Values[0].Name);

    var $dropdownGrades = $("<div>", { "class": "dropdown" });
    $("#dropdownColGrades").append($dropdownGrades);
    var $dropdownButton = $("<div>", {
        "class": "btn btn-info btn-sm m-0 mr-3 p-2 dropdown-toggle", "type": "button", "id": "materialGrades",
        "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false"
        //"onClick": "materialCollectionCardBuildingAndEdition(\""+ nOptions + "\")"
    });

    $dropdownGrades.append($dropdownButton);

    var $dropdownContent = $("<div>", { "class": "dropdown-menu", "id": "gradesDropdown", "aria-labelledby": "dropdownMenuButton" });
    $dropdownGrades.append($dropdownContent);
    for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {
        var $dropdownItem = $("<a>", {
            "class": "dropdown-item d-block", "onClick": "materialCollectionCardBuildingAndEdition(\"" + nOptions + "," +
                dataDB.Options[nOptions].Values[nValues].Name + "\")",
            "text": dataDB.Options[nOptions].Values[nValues].Name, "href": "#"
        });
        $dropdownContent.append($dropdownItem);
        if (dataDB.Options[nOptions].Values[nValues].Active) {
            $dropdownButton.text(dataDB.Options[nOptions].Values[nValues].Name);
        }
    }
    materialCollectionCardBuildingAndEdition(nOptions + ",");

}

function materialCollectionCardBuildingAndEdition(selection) {
    console.log("MATERIAL COLLECTIONS", selection)
    var res = selection.split(",");
    var nOptions = res[0];
    var gradeSelection = res[1];

    if (document.getElementById("materialCollections") != null) { //    Edition       
        for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {
            if (dataDB.Options[nOptions].Values[nValues].Name == gradeSelection) {
                dataDB.Options[nOptions].Values[nValues].Active = true;
                $("#materialGrades").text(dataDB.Options[nOptions].Values[nValues].Name); //Change Grades Button
                $("#materialCollections").text(dataDB.Options[nOptions].Values[nValues].Collections[0].Name); //Change Collection button
                $("#gradeName").text(dataDB.Options[nOptions].Values[nValues].Name); //Change title
                var $dropdownContentCollections = $("#collectionDropdown");
                $dropdownContentCollections.empty();
                for (var nCollections = 0; nCollections < dataDB.Options[nOptions].Values[nValues].Collections.length; nCollections++) {

                    var $dropdownItemCollections = $("<a>", {
                        "class": "dropdown-item", "href": "#",
                        "id": dataDB.Options[nOptions].Values[nValues].Collections[nCollections].Name,
                        "text": dataDB.Options[nOptions].Values[nValues].Collections[nCollections].Name,
                        "onClick": "collectionSet(\"" + dataDB.Options[nOptions].Values[nValues].Collections[nCollections].Name + "\")"
                    });
                    $dropdownContentCollections.append($dropdownItemCollections);
                    var $dropdownButtonCollections = $("#materialCollections");
                    collection = dataDB.Options[nOptions].Values[nValues].Collections[0].Name;
                    if (dataDB.Options[nOptions].Values[nValues].Collections[nCollections].Active) {
                        $("#materialCollections").text(dataDB.Options[nOptions].Values[nValues].Collections[nCollections].Name);
                        collection = dataDB.Options[nOptions].Values[nValues].Collections[nCollections].Name;
                    }

                }



            }
            else dataDB.Options[nOptions].Values[nValues].Active = false;
        }
        priceCalculation();


        var Materials = listOfMaterials(collection);
        $("#imagesContainer").empty();
        $(".pagination").empty();
        
        for (var nMaterials = 0; nMaterials < Materials.Content.length; nMaterials++) {
            if (Materials.Content[nMaterials].Name) {

                var $materialItem = $("<div>", {
                    "class": "material-item", //"text": Materials.Content[nMaterials].Name,
                    "id": Materials.Content[nMaterials].Name + "-material",
                    "onClick": "changeMaterial(\"" + collection + "," + Materials.Content[nMaterials].Name + "," + gradeSelection + "," + nOptions
                        + "," + Materials.Content[nMaterials].ColorCode + "\")"
                });
                var $materialImage = $("<img>", {
                    "src": "assets/layout/material thumbnails/" + gradeSelection + "/" +
                        collection + "/" +
                        Materials.Content[nMaterials].Name + ".jpg"
                });
                $materialItem.append($materialImage);
                $("#imagesContainer").append($materialItem);
            }
        }
        $("#imagesContainer").pagify(6, ".material-item");

    }
    else {  //Collections dropdown Building


        var $dropdownCollections = $("<div>", { "class": "dropdown float-right", "id": "dropdownCollections" });
        $("#dropdownColMats").append($dropdownCollections);
        var $dropdownButtonCollections = $("<div>", {
            "class": "btn btn-secondary dropdown-toggle", "type": "button", "id": "materialCollections",
            "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false"
        });

        $dropdownCollections.append($dropdownButtonCollections);

        var $dropdownContentCollections = $("<div>", { "class": "dropdown-menu", "id": "collectionDropdown", "aria-labelledby": "dropdownMenuButton" });
        $dropdownCollections.append($dropdownContentCollections);
        for (var nCollections = 0; nCollections < dataDB.Options[nOptions].Values[0].Collections.length; nCollections++) {
            var $dropdownItemCollections = $("<a>", {
                "class": "dropdown-item d-block", "href": "#",
                "id": dataDB.Options[nOptions].Values[0].Collections[nCollections].Name,
                "text": dataDB.Options[nOptions].Values[0].Collections[nCollections].Name,
                "onClick": "collectionSet(\"" + dataDB.Options[nOptions].Values[0].Collections[nCollections].Name + "\")"
            });

            $dropdownContentCollections.append($dropdownItemCollections);
            if (dataDB.Options[nOptions].Values[0].Collections[nCollections].Active) {
                $dropdownButtonCollections.text(dataDB.Options[nOptions].Values[0].Collections[nCollections].Name);
                collection = dataDB.Options[nOptions].Values[0].Collections[nCollections].Name;
            }


        }

        //Images Grid creation
        var Materials = listOfMaterials(collection);

        for (var nMaterials = 0; nMaterials < Materials.Content.length; nMaterials++) {
            if (Materials.Content[nMaterials].Name) {

                var $materialItem = $("<div>", {
                    "class": "material-item", //"text": Materials.Content[nMaterials].Name,
                    "id": Materials.Content[nMaterials].Name + "-material",
                    "onClick": "changeMaterial(\"" + collection + "," + Materials.Content[nMaterials].Name + "," + dataDB.Options[nOptions].Values[0].Name + "," + nOptions
                        + "," + Materials.Content[nMaterials].ColorCode + "\")"
                });
                var $materialImage = $("<img>", {
                    "src": "assets/layout/material thumbnails/Grade 1/" + collection + "/" +
                        Materials.Content[nMaterials].Name + ".jpg"
                });
                $materialItem.append($materialImage);
                $("#imagesContainer").append($materialItem);

            }
        }


    }

}

function collectionSet(collectionSelected) {
    var currentOption;
    var gradeSelection;
    collection = collectionSelected;
    for (var nOptions = 0; nOptions < dataDB.Options.length; nOptions++) {
        for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {
            if (dataDB.Options[nOptions].Values[nValues].Code) {
                if (dataDB.Options[nOptions].Values[nValues].Code.includes("grade")) {
                    for (var nCollections = 0; nCollections < dataDB.Options[nOptions].Values[nValues].Collections.length; nCollections++) {
                        if (dataDB.Options[nOptions].Values[nValues].Collections[nCollections].Name == collectionSelected) {
                            dataDB.Options[nOptions].Values[nValues].Collections[nCollections].Active = true;
                            $("#materialCollections").text(dataDB.Options[nOptions].Values[nValues].Collections[nCollections].Name);

                            gradeSelection = dataDB.Options[nOptions].Values[nValues].Name;
                            currentOption = nOptions;
                        }
                        else
                            dataDB.Options[nOptions].Values[nValues].Collections[nCollections].Active = false;
                    }
                }
            }
        }
    }
        
 
    var Materials = listOfMaterials(collection);
    $(".pagination").empty();
    $("#imagesContainer").empty();
    console.log("MATERIAL LOADING", collection)
    for (var nMaterials = 0; nMaterials < Materials.Content.length; nMaterials++) {
        if (Materials.Content[nMaterials].Name) {
            var $materialItem = $("<div>", {
                "class": "material-item", //"text": Materials.Content[nMaterials].Name,
                "id": Materials.Content[nMaterials].Name + "-material",
                "onClick": "changeMaterial(\"" + collection + "," + Materials.Content[nMaterials].Name + "," + gradeSelection + "," + currentOption
                    + "," + Materials.Content[nMaterials].ColorCode + "\")"
            });
            var $materialImage = $("<img>", {
                "src": "assets/layout/material thumbnails/" + gradeSelection + "/" + collection + "/" +
                    Materials.Content[nMaterials].Name + ".jpg"
            });
            $materialItem.append($materialImage);
            $("#imagesContainer").append($materialItem);

        }
        $("#imagesContainer").pagify(6, ".material-item");
    }
}

function changeMaterial(value) {
    var res = value.split(",");

    var collectionName = res[0];
    var materialName = res[1]
    var grade = res[2];
    var nOptions = parseInt(res[3]);
    var colorCode = res[4];

    for (var nLayers = 0; nLayers < dataDB.Options[nOptions].RelatedLayers.length; nLayers++) {
        console.log("optionName: " + dataDB.Options[nOptions].RelatedLayers[nLayers]);
        for (var nMeshes = 1; nMeshes < currentMesh.length; nMeshes++) {
            if (dataDB.Options[nOptions].RelatedLayers[nLayers] == currentMesh[nMeshes]._material.name) {
                var path = "assets/materials/" + dataDB.Name.toLowerCase()
                    + "/fabrics/" + grade.toLowerCase() + "/" + collectionName.toLowerCase() + "/" +
                    materialName + "_" + dataDB.Options[nOptions].RelatedLayers[nLayers];


                if (path) {
                    currentMesh[nMeshes]._material._albedoTexture = new BABYLON.Texture(path + "_Base_Color.png", scene);
                    currentMesh[nMeshes]._material._albedoTexture.vAng = -Math.PI;
                    currentMesh[nMeshes]._material._albedoTexture.wAng = -Math.PI;
                }
                //currentMesh[nMeshes]._material._normalTexture = new BABYLON.Texture(path + "_Normal.png", scene);

                if (!(colorCode == "null" || colorCode == "undefined")) {
                    currentMesh[nMeshes]._material._albedoColor = new BABYLON.Color3.FromHexString(colorCode);
                }
            }

        }

    }
}

function optionChangedOnFeature(selection) {
    var res = selection.split(",");

    feature = res[0];
    option = res[1];


    $("#" + feature.toLowerCase() + "Name").text(option);
    if (option.includes("Grade") || option.includes("Color"))
        materialCollectionCardBuildingAndEdition();
    else
        cardsResponseOnSelection();

    priceCalculation();

}


function cardsResponseOnSelection() {
    for (var nOptions = 0; nOptions < dataDB.Options.length; nOptions++) {
        
        if (dataDB.Options[nOptions].Name == feature) {

            for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {
                
                if (dataDB.Options[nOptions].Values[nValues].Name == option) {

                    dataDB.Options[nOptions].Values[nValues].Active = true;
                    for (var nLayers = 0; nLayers < dataDB.Options[nOptions].Values[nValues].Layers.length; nLayers++) {
                        
                        //Do the material change
                        var doMaterialChange = false;
                        if (dataDB.Options[nOptions].Values[nValues].Layers[nLayers].hasOwnProperty("MaterialFile")) {
                            if (dataDB.Options[nOptions].Values[nValues].Layers[nLayers].MaterialFile != null) {
                                doMaterialChange = true;

                                console.log("Apply a material change to the layer" +
                                    dataDB.Options[nOptions].Values[nValues].Layers[nLayers].Layer +
                                    " using " + dataDB.Options[nOptions].Values[nValues].Layers[nLayers].MaterialFile + " option selected " + feature);

                            }
                        }
                            


                        if (feature == "Back") {
                            highBackOn = false;
                            if (dataDB.Options[nOptions].Values[nValues].Name.includes("High-Back") && feature == "Back") {
                                highBackOn = true;
                            }
                        }

                        if (feature == "Arm") {
                            loopOn = false;
                            if (dataDB.Options[nOptions].Values[nValues].Name.includes("loop arms") && feature == "Arm") {
                                loopOn = true;
                            }
                        }
                        
                        for (var nMeshes = 0; nMeshes < currentMesh.length; nMeshes++) {
                           
                            if (dataDB.Options[nOptions].Values[nValues].Layers[nLayers].Layer == currentMesh[nMeshes].name) {
                                //change the material
                                if (doMaterialChange) {
                                    var path = "assets/materials" + dataDB.Options[nOptions].Values[nValues].Layers[nLayers].MaterialFile + "_";
                                    console.log("MATERIAL CHANGE", dataDB.Options[nOptions].Values[nValues].Layers[nLayers].Layer, path + dataDB.Options[nOptions].Values[nValues].Layers[nLayers].Layer + "_Base_Color" + ".png")
                                    currentMesh[nMeshes]._material._albedoTexture = new BABYLON.Texture(path + dataDB.Options[nOptions].Values[nValues].Name + "_Base_Color" + ".png", scene);
                                    currentMesh[nMeshes]._material._roughnessTexture = new BABYLON.Texture(path + dataDB.Options[nOptions].Values[nValues].Name + "_Roughness" + ".png", scene);

                                    currentMesh[nMeshes]._material._albedoTexture.vAng = -Math.PI;
                                    currentMesh[nMeshes]._material._albedoTexture.wAng = -Math.PI;

                                    currentMesh[nMeshes]._material._roughnessTexture.vAng = -Math.PI;
                                    currentMesh[nMeshes]._material._roughnessTexture.wAng = -Math.PI;

                                }     
                                currentMesh[nMeshes].isVisible = dataDB.Options[nOptions].Values[nValues].Layers[nLayers].Visibility;
                                if (!loopOn && (currentMesh[nMeshes].name == "Arms4" || currentMesh[nMeshes].name == "Arms5")) {
                                    currentMesh[nMeshes].isVisible = false;
                                }
                                if (loopOn) {
                                    if (highBackOn && (currentMesh[nMeshes].name.includes("BackHolder1") || currentMesh[nMeshes].name.includes("Arms4"))) {
                                        currentMesh[nMeshes].isVisible = false;
                                        console.log(currentMesh[nMeshes].name);
                                    }
                                    if (!highBackOn && (currentMesh[nMeshes].name == "BackHolder2" || currentMesh[nMeshes].name == "Arms5")) {
                                        currentMesh[nMeshes].isVisible = false;
                                    }

                                }
                                console.log("loopOn: " + loopOn + " highBackOn: " + highBackOn);
                                
                            }
                        }

                    }
                }
                else {
                    dataDB.Options[nOptions].Values[nValues].Active = false;
                }
            }
        }
    }

}


(function ($) {
    var pagify = {
        items: {},
        container: null,
        totalPages: 1,
        perPage: 3,
        currentPage: 0,
        createNavigation: function () {
            this.totalPages = Math.ceil(this.items.length / this.perPage);

            $('.pagination', this.container.parent()).remove();
            var pagination = $('<div class="pagination"></div>').append('<a class="nav prev disabled" data-next="false"><</a>');

            for (var i = 0; i < this.totalPages; i++) {
                var pageElClass = "page";
                if (!i)
                    pageElClass = "page current";
                var pageEl = '<a class="' + pageElClass + '" data-page="' + (
                    i + 1) + '">' + (
                        i + 1) + "</a>";
                pagination.append(pageEl);
            }
            pagination.append('<a class="nav next" data-next="true">></a>');

            this.container.after(pagination);

            var that = this;
            $("body").off("click", ".nav");
            this.navigator = $("body").on("click", ".nav", function () {
                var el = $(this);
                that.navigate(el.data("next"));
            });

            $("body").off("click", ".page");
            this.pageNavigator = $("body").on("click", ".page", function () {
                var el = $(this);
                that.goToPage(el.data("page"));
            });
        },
        navigate: function (next) {
            // default perPage to 5
            if (isNaN(next) || next === undefined) {
                next = true;
            }
            $(".pagination .nav").removeClass("disabled");
            if (next) {
                this.currentPage++;
                if (this.currentPage > (this.totalPages - 1))
                    this.currentPage = (this.totalPages - 1);
                if (this.currentPage == (this.totalPages - 1))
                    $(".pagination .nav.next").addClass("disabled");
            }
            else {
                this.currentPage--;
                if (this.currentPage < 0)
                    this.currentPage = 0;
                if (this.currentPage == 0)
                    $(".pagination .nav.prev").addClass("disabled");
            }

            this.showItems();
        },
        updateNavigation: function () {

            var pages = $(".pagination .page");
            pages.removeClass("current");
            $('.pagination .page[data-page="' + (
                this.currentPage + 1) + '"]').addClass("current");
        },
        goToPage: function (page) {

            this.currentPage = page - 1;

            $(".pagination .nav").removeClass("disabled");
            if (this.currentPage == (this.totalPages - 1))
                $(".pagination .nav.next").addClass("disabled");

            if (this.currentPage == 0)
                $(".pagination .nav.prev").addClass("disabled");
            this.showItems();
        },
        showItems: function () {
            this.items.hide();
            var base = this.perPage * this.currentPage;
            this.items.slice(base, base + this.perPage).show();

            this.updateNavigation();
        },
        init: function (container, items, perPage) {
            this.container = container;
            this.currentPage = 0;
            this.totalPages = 1;
            this.perPage = perPage;
            this.items = items;
            this.createNavigation();
            this.showItems();
        }
    };

    // stuff it all into a jQuery method!
    $.fn.pagify = function (perPage, itemSelector) {
        var el = $(this);
        var items = $(itemSelector, el);

        // default perPage to 5
        if (isNaN(perPage) || perPage === undefined) {
            perPage = 3;
        }

        // don't fire if fewer items than perPage
        if (items.length <= perPage) {
            return true;
        }

        pagify.init(el, items, perPage);
    };
})(jQuery);

$("#imagesContainer").pagify(6, ".material-item");
