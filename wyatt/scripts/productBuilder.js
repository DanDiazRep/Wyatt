//Menu building variables
var canvas = document.getElementById('wyattCanvas');
var container = document.getElementById('wyattContainer');

var loopOn = false;
var highBackOn = false;
var feature = "";
var option = "";
var collection = "";
var backPartNumber = [" "];
if (dataDB.Name.includes("Freeride"))
    backPartNumber = ["B", "M", "G"];
if (dataDB.Name.includes("Roswell"))
    backPartNumber = ["B", "G", "M",""];
var modelNumberOfOptions = dataDB.Options.length;
var seatPadPrice = 0;
////**************************************************************************
//********************* BABYLON ENGINE INITIALIZATION *****************
////**************************************************************************
var engine = new BABYLON.Engine(canvas, true, { premultipliedAlpha: false, preserveDrawingBuffer: true, stencil: true });
var scene = new BABYLON.Scene(engine);
var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
var photoCamera;  // Front Camera
var photoCameraB;  //Back camera
camera.setTarget(BABYLON.Vector3.Zero());
var baseUrl;
var asyncMesh;
var currentMesh;
scene.clearColor = new BABYLON.Color3(1, 1, 1); //Background color
var maxSize = new BABYLON.Vector3(0, 0, 0);
var meshCenter = new BABYLON.Vector3(0, 0, 0);

var createScene = function () {


    // Model loader
    BABYLON.GLTFFileLoader.IncrementalLoading = false;
    baseUrl = "/assets/models/";
    lowFile = dataDB.LowFile;
    BABYLON.SceneLoader.ImportMesh("", baseUrl, lowFile, scene, function (syncMesh) {



        // Camera 
        scene.createDefaultCameraOrLight(true, true, true);

        scene.activeCamera.panningSensibility = 10;
        scene.activeCamera.wheelPrecision = 0.25;
        photoCamera = scene.activeCamera.clone();
        photoCameraB = photoCamera.clone();
        photoCameraB.alpha = Math.PI / 3 + Math.PI;


        //Lightning
        scene.lights[0].dispose();
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 10, 0), scene);
        light.intensity = 0.6;

        for (var i = 1; i < syncMesh.length; i++) {

            syncMesh[i].actionManager = new BABYLON.ActionManager(scene); // Pointer behavior on model hover                       
            syncMesh[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (env) {
            }, false));
            if (dataDB.Name == "Extra") {
                syncMesh[i].scaling.x = 0.85;
                syncMesh[i].scaling.y = 0.85;
                syncMesh[i].scaling.z = 0.85;
            }
            //More & more bump
            if (syncMesh[i].material && syncMesh[i].material.bumpTexture) {
                syncMesh[i].material.bumpTexture.level = 1.5;
            }
            syncMesh[i].position = new BABYLON.Vector3(0, 0, 0);
            var size = syncMesh[i].getBoundingInfo().boundingBox.maximumWorld;
            if ((size.x) > maxSize.x)
                maxSize.x = size.x;

            if ((size.y) > maxSize.y)
                maxSize.y = size.y;

            if ((size.z) > maxSize.z)
                maxSize.z = size.z;

            meshCenter.x += syncMesh[i].getBoundingInfo().boundingBox.centerWorld.x;
            meshCenter.y += syncMesh[i].getBoundingInfo().boundingBox.centerWorld.y;
            meshCenter.z += syncMesh[i].getBoundingInfo().boundingBox.centerWorld.z;

            //Show me the default
            syncMesh[i].isVisible = dataDB.DefaultLayers.includes(syncMesh[i].name);

        }

        meshCenter.x = meshCenter.x / syncMesh.length*0;
        meshCenter.y = meshCenter.y / syncMesh.length;
        meshCenter.z = meshCenter.z / syncMesh.length;

        //maxSize.y = maxSize.y / 7;

        scene.activeCamera.setTarget(meshCenter);
        var ratio = engine.getAspectRatio(camera);
        var h = ((maxSize.y + maxSize.x + maxSize.z)/3);
        scene.activeCamera.lowerRadiusLimit = h;
        scene.activeCamera.upperRadiusLimit = h * 4;
        scene.activeCamera.alpha = Math.PI / 2.4;
        scene.activeCamera.beta = 7 * Math.PI / 16;
        photoCamera = scene.activeCamera.clone();


        //Env texture
        var hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("assets/environment/royal" + "EnvHDR.dds", scene);
        //var hdrTexture = new BABYLON.HDRCubeTexture("assets/environment/lebombo.hdr", scene);
        hdrTexture.gammaSpace = true;
        if (dataDB.Code == "lamia")
            hdrTexture.gammaSpace = false;
        scene.environmentTexture = hdrTexture;
        currentMesh = syncMesh;


        if (!detectmob()) {
            if (dataDB.MedFile) {
                asyncDownload(dataDB.MedFile);
            }
            if (dataDB.HighFile) {
                asyncDownload(dataDB.HighFile);
            }
        }
        //retrieveFromUser();
    }, function (evt) {
        //On progress function

        if (evt.lengthComputable) {
            var percentage = (evt.loaded * 100 / evt.total).toFixed();
           // console.log("Loading, please wait..." + percentage + "%");
            $(".progress-bar").css("width", percentage + "%");
            $(".progress-bar").text(percentage + "%");
            if (percentage == 100)
                $("#LoadingScreen").fadeOut(2000);

        }
        else {

            dlCount = evt.loaded / (1024 * 1024);
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

            }


        }),
        //select the options here
    ]).then(() => {
        asyncMesh.scaling = currentMesh.scaling;
        for (var i = 1; i < currentMesh.length; i++) {
            if (currentMesh[i].name == "Seat" || (currentMesh[i].name == "Base" && !dataDB.Name.includes("Stool")))
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
var currentOptionsPDF = null;
function priceCalculation() {
   
    for (var nOptions = 0; nOptions < dataDB.Options.length; nOptions++) {
        for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {
            if (dataDB.Options[nOptions].Values[nValues].Active == true) {
                currentOptionPrice[nOptions] = dataDB.Options[nOptions].Values[nValues].Price;
            }
        }
        for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {
            dataDB.Options[nOptions].Values[nValues].Price -= currentOptionPrice[nOptions];
        }
        currentOptionsPDF = currentOptionPrice[nOptions];
        totalPrice += currentOptionPrice[nOptions];         
    }   
   productPrice.textContent = "$ " + totalPrice + ".00";
}
priceCalculation();

function sendImg(imgToSend, callback) {
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    var theUrl = "http://wyattapi.servexusinc.com/api/image";
    xmlhttp.open("POST", theUrl, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            callback(false, JSON.parse(xmlhttp.responseText).Message)
        }
        if (xmlhttp.readyState === 500) {
            callback(true, null)
        }
    };
    xmlhttp.send(JSON.stringify({ data: imgToSend }));
}

function makeMyPDF() {
    //$.LoadingOverlay("show");
    vPortHeight = engine._gl.drawingBufferHeight;
    vPortWidth = engine._gl.drawingBufferWidth;
    var pn = dataDB.PartNumber;       
    setTimeout(function () {        
        engine.setSize(1200, 1920);
        scene.render();
        BABYLON.Tools.CreateScreenshotUsingRenderTarget(engine, photoCamera, { heigth: 960, width: 600 }, function (data) {

            sendImg(data, function (error, image) {
                dataDB.print = image;
                dataDB.totalPrice = totalPrice;
                if (dataDB.BackSize)
                    dataDB.PartNumber = dataDB.PartNumber +"-"+ backPartNumber.join("");
                var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
                var theUrl = "http://wyattapi.servexusinc.com/api/pdf";
                xmlhttp.open("POST", theUrl, true);
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                        $.LoadingOverlay("hide");
                        window.open("http://wyattapi.servexusinc.com/wwwroot/" + JSON.parse(xmlhttp.responseText).Message, "_blank")
                    }
                    if (xmlhttp.readyState === 500) {
                        $.LoadingOverlay("hide");
                    }
                };
                xmlhttp.send(JSON.stringify(dataDB));
                dataDB.PartNumber = pn;
            });
        });
        engine.setSize(vPortWidth, vPortHeight);
    }, 500);

}

function takePhoto() {
    var watermarkImg = new Image;
    
    watermarkImg.src = '/assets/layout/icons/Wyatt-Seating-Logo.png';
    //A portview resize is required to set a fixed image render. Despite the current viewport size.
    vPortHeight = engine._gl.drawingBufferHeight;
    vPortWidth = engine._gl.drawingBufferWidth;
    engine.setSize(580, 1920/2);

    scene.render();
    BABYLON.Tools.CreateScreenshotUsingRenderTarget(engine, scene.activeCamera, { heigth: 1920, width: 1080, precision: 2 }, function (data) {
        watermark([data, watermarkImg])
            .image(watermark.image.lowerRight(0.5))
            .then(function (img) {
                var link = document.createElement('a');
                link.download = dataDB.Name + '.png';
                link.href = img.src;
                link.click();
            });        
    });

    engine.setSize(vPortWidth, vPortHeight);


}


//OPTIONS BUILDING

var optionsMenu = document.getElementById("optionsMenu");

var $accordion = $("<div>", { "class": "accordion", "id": "wyattAccordion" });
$("#optionsMenu").append($accordion);

//Build accordions as many features are in the model
for (var nOptions = 0; nOptions < dataDB.Options.length; nOptions++) {

    var $card = $("<div>", { "class": "card" });
    $accordion.append($card);
    var cardName = dataDB.Options[nOptions].Code;


    var $cardHeader = $("<div>", { "class": "class-header", "id": cardName + "Header" });
    $card.append($cardHeader);

    var $dropdownarrow = $("<span class=dropdown-menu-arrow></span>");    
    $cardHeader.append($dropdownarrow);


    var $cardButton = $("<div>", {
        "class": "btn btn-link", 'type': "button",
        "data-toggle": "collapse", "data-target": "#" + cardName,
            "aria-expanded": "true", "aria-controls": cardName, "text": cardName,
            "id": cardName + "Name"
        });    
    $cardHeader.append($cardButton);
   


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
    

    if (cardName === "back") {
        var $backWrapper = $("<div>", { "id": "backWrapper", style: "width:100%,"});
        $rowDivider.append($backWrapper);
    }

    if (cardName.includes("back")) {
        $cardButton.text(dataDB.Options[nOptions].Name);
        
        if (!cardName.includes("color")) {
            if (dataDB.Options[nOptions].Code == "back-headrest") {
                var $backFeature = $("<div>", { "id": "backFeatureWrapper-" + cardName, "style": "float: left; margin: 0 1%; width: 96%" });
                $backWrapper.append($backFeature);

            }
            else {
                var $backFeature = $("<div>", { "id": "backFeatureWrapper-" + cardName, "style": "float: left; margin: 0 1%; width:" + (100 - (2 * dataDB.BackSize)) / dataDB.BackSize + "%" });
                $backWrapper.append($backFeature);
            }

            var $backFeatureTitle = $("<h5>", { "id": "backFeatureTitle-" + cardName, "text": dataDB.Options[nOptions].Description, "style": "text-align: center; margin: 1% 0; font-weight: bold;" });
            $backFeature.append($backFeatureTitle);

            var $listGroup = $("<div>", { "class": "list-group list-group-flush", "id": "listTab", "role": "tablist" });
            $backFeature.append($listGroup);

            for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {
                if (dataDB.Options[nOptions].Values[nValues].Active) { //Current active option
                    var selectedOption = dataDB.Options[nOptions].Values[nValues].Code;
                    var $featureOptions = $("<a>", {
                        "class": "list-group-item list-group-item-action active", "id": "list-" + selectedOption + "-list",
                        "data-toggle": "list", "href": "#list-" + selectedOption, "role": "tab", "aria-controls": selectedOption,
                        "onClick": "optionChangedOnFeature(\"" + dataDB.Options[nOptions].Name + "," + selectedOption + "\")",
                        "text": dataDB.Options[nOptions].Values[nValues].Name,
                    });
                    /*if (selectedOption.includes("Backk")) {
                        $featureOptions.text(selectedOption.replace("Backk", ""));
                    }
                    if (selectedOption.includes("Frame")) {
                        $featureOptions.text(selectedOption.replace("Frame", ""));
                    }
                    if (selectedOption.includes("V2")) {
                        $featureOptions.text(selectedOption.replace("V2", ""));
                    }*/
                }
                
                else {
                    var nonSelectedOption = dataDB.Options[nOptions].Values[nValues].Code;
                    var $featureOptions = $("<a>", {
                        "class": "list-group-item list-group-item-action", "id": "list-" + nonSelectedOption + "-list",
                        "data-toggle": "list", "href": "#list-" + nonSelectedOption, "role": "tab", "aria-controls": nonSelectedOption,
                        "onClick": "optionChangedOnFeature(\"" + dataDB.Options[nOptions].Name + "," + nonSelectedOption + "\")",
                        "text": dataDB.Options[nOptions].Values[nValues].Name
                    });
                    if (!dataDB.Options[nOptions].Values[nValues].Show)
                        $featureOptions.hide();                   
                    /*if (nonSelectedOption.includes("Backk")) {
                        $featureOptions.text(nonSelectedOption.replace("Backk", ""));
                    }
                    if (nonSelectedOption.includes("Frame")) {
                        $featureOptions.text(nonSelectedOption.replace("Frame", ""));
                    }
                    if (nonSelectedOption.includes("V2")) {
                        $featureOptions.text(nonSelectedOption.replace("V2", ""));
                    }*/
                }

                if (selectedOption == "HighbackVin" || nonSelectedOption == "HighbackVin") {
                    $featureOptions.text("Vinyl");
                }
                
                

                $listGroup.append($featureOptions);
                if (nValues > 0)
                    if ($.inArray(dataDB.Options[nOptions].Values[nValues - 1].Name, dataDB.Options[nOptions].Values[nValues].Uses)) {
                    }

            }
        }

        else {
            var $backFeature = $("<div>", { "id": "backFeatureWrapper-" + cardName, "style": "margin: 0 1%; width: 100%; display: flow-root" });
            $backWrapper.append($backFeature);

            var $backFeatureTitle = $("<h5>", { "id": "backFeatureTitle-" + cardName, "text": dataDB.Options[nOptions].Description, "style": "text-align: center; margin: 1% 0;font-weight: bold;" });
            $backFeature.append($backFeatureTitle);
            for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {
                var $materialItem = $("<div>", {
                    "class": "material-item", 
                    "id": dataDB.Options[nOptions].Values[nValues].Code + "-back-material",
                    "onClick": "changeMaterial(\"" + "back" + "," + dataDB.Options[nOptions].Values[nValues].Code + "," + "none" + "," + nOptions
                        + "," + "null" + "," + dataDB.Options[nOptions].Values[nValues].PartNumber + "\")",
                    "style": "float: left; margin: 2% 1%; width:" + (98 - (2 * 4)) / 4 + "%" + ";",
                });
               
                $backFeature.append($materialItem);
                var $materialImage = $("<img>", {
                    "src": "assets/layout/material thumbnails/" + dataDB.Name + "/" + dataDB.Options[nOptions].Name + "/" +
                        dataDB.Options[nOptions].Values[nValues].Code + ".jpg",
                    "style": "width: 90%"
                });
                $materialItem.append($materialImage);
                if (!dataDB.Options[nOptions].Values[nValues].Show)
                    $materialItem.hide();
            }

            

        }
    }
    if (cardName.includes("back-")) {
        $("#" + cardName + "Header").parent().remove();
    }


    else if (!cardName.includes("grade") && !cardName.includes("back")) {

        var $listGroup = $("<div>", { "class": "list-group list-group-flush", "id": "listTab", "role": "tablist" });
        $rowDivider.append($listGroup);

        for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {
            if (dataDB.Options[nOptions].Values[nValues].Active) { //Current active option
                var selectedOption = dataDB.Options[nOptions].Values[nValues].Code;
                var $featureOptions = $("<a>", {
                    "class": "list-group-item list-group-item-action active", "id": "list-" + selectedOption + "-list",
                    "data-toggle": "list", "href": "#list-" + selectedOption, "role": "tab", "aria-controls": selectedOption,
                    "onClick": "optionChangedOnFeature(\"" + dataDB.Options[nOptions].Name + "," + selectedOption + "\")",
                    "text": dataDB.Options[nOptions].Values[nValues].Name
                });
                $cardButton.text(dataDB.Options[nOptions].Name);

            }

            else {
                var nonSelectedOption = dataDB.Options[nOptions].Values[nValues].Code;
                var $featureOptions = $("<a>", {
                    "class": "list-group-item list-group-item-action", "id": "list-" + nonSelectedOption + "-list",
                    "data-toggle": "list", "href": "#list-" + nonSelectedOption, "role": "tab", "aria-controls": nonSelectedOption,
                    "onClick": "optionChangedOnFeature(\"" + dataDB.Options[nOptions].Name + "," + nonSelectedOption + "\")",
                    "text": dataDB.Options[nOptions].Values[nValues].Name
                });
                $cardButton.text(dataDB.Options[nOptions].Name);
            }


            $listGroup.append($featureOptions);

        }
        
    }


    else if (cardName.includes("grade")) {
        var $baseRow = $("<div>", { "class": "row no-gutter", "id": "gradesBaseRow" });
        var $baseFilterRow = $("<div>", { "class": "row no-gutter", "id": "gradesFilterRow" })
        var $dropdownColGrades = $("<div>", { "class": "col", "id": "dropdownColGrades" });
        var $dropdownColMats = $("<div>", { "class": "col", "id": "dropdownColMats" });
        var $imagesContainer = $("<div>", { "class": "row no-gutter", "id": "imagesContainer" });
        var $SeatCoverRow = $("<div>", { "class": "row no-gutter", "id": "seatCoverRow", "style": "height: 0vh;" });        
        var $SeatCoverCheckbox = $("<input>", {
            "class": "form-check-input", "type": "checkbox", "value": "", "id": "coverCheck", 
            "onclick": "seatCover()"
            });
        var $SeatCoverLabel = $("<label>", { "class": "form-check-label", "for": "coverCheck", "text": "Removable Seat Cover:" });
        $rowDivider.append($baseFilterRow);
        $rowDivider.append($baseRow);
        $baseFilterRow.append($dropdownColGrades);
        $baseFilterRow.append($dropdownColMats);
        $baseRow.append($SeatCoverRow);
        $SeatCoverRow.append($SeatCoverCheckbox);
        $SeatCoverRow.append($SeatCoverLabel);

        $baseRow.append($imagesContainer);

        materialStructureBuilding(nOptions);
        $cardButton.text(dataDB.Options[nOptions].Name);
        $("#seatCoverRow")[0].hidden = true;
    }

}

//Seat Cover Function
function seatCover() {  
    seatPadPrice = 0; 
    if ($("#seatCoverRow")[0].hidden) {
        $("#coverCheck")[0].checked = false;
        $("#seatCoverRow").css("height", "1.6vh");
    }
    else
        $("#seatCoverRow").css("height", "auto");
    var auxPrice = totalPrice;

    dataDB.SeatPad = false;
    seatPadPrice = 0;
    if ($("#coverCheck")[0].checked && !$("#seatCoverRow")[0].hidden) {
        seatPadPrice = 90;
        auxPrice += seatPadPrice;
        dataDB.SeatPad = true;
    }
    if (!$("#coverCheck")[0].checked && !$("#seatCoverRow")[0].hidden) {
        seatPadPrice = 0;
        auxPrice += seatPadPrice;
        dataDB.SeatPad = false;
    }
    
    productPrice.textContent = "$ " + auxPrice + ".00";
    
    

}

// Material Grades structure
function materialStructureBuilding(nOptions) {
    $cardButton.text(dataDB.Options[nOptions].Values[0].Name);

    var $dropdownGrades = $("<div>", { "class": "dropdown" });
    $("#dropdownColGrades").append($dropdownGrades);
    var $dropdownButton = $("<div>", {
        "class": "btn btn-info btn-sm dropdown-toggle", "type": "button", "id": "materialGrades",
        "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false"
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
    var res = selection.split(",");
    var nOptions = res[0];
    var gradeSelection = res[1];

    if (document.getElementById("materialCollections") != null) { //    Edition       
        for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {
            if (dataDB.Options[nOptions].Values[nValues].Name == gradeSelection) {
                if ((dataDB.Name.includes("G6") || dataDB.Name.includes("Freeride"))) {
                    $("#seatCoverRow")[0].hidden = !(parseInt(gradeSelection[gradeSelection.length - 1]) > 1);
                    $("#coverCheck")[0].checked = false;
                    seatCover();
                }
                dataDB.Options[nOptions].Values[nValues].Active = true;
                $("#materialGrades").text(dataDB.Options[nOptions].Values[nValues].Name); //Change Grades Button
                $("#materialCollections").text(dataDB.Options[nOptions].Values[nValues].Collections[0].Name); //Change Collection button
                //$("#gradeName").text(dataDB.Options[nOptions].Values[nValues].Name); //Change title
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
                    "class": "material-item", 
                    "id": Materials.Content[nMaterials].Name + "-material",
                    "data-toggle": "tooltip", "title": Materials.Content[nMaterials].Name,
                    "onClick": "changeMaterial(\"" + collection + "," + Materials.Content[nMaterials].Name + "," + gradeSelection + "," + nOptions
                        + "," + Materials.Content[nMaterials].ColorCode + "," + Materials.Content[nMaterials].Name + "," + Materials.Content[nMaterials].Code + "\")",
                   
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
                    "class": "material-item", 
                    "id": Materials.Content[nMaterials].Name + "-material",
                    "onClick": "changeMaterial(\"" + collection + "," + Materials.Content[nMaterials].Name + "," + dataDB.Options[nOptions].Values[0].Name + "," + nOptions
                        + "," + Materials.Content[nMaterials].ColorCode + "," + Materials.Content[nMaterials].Name + "," + Materials.Content[nMaterials].Code + "\")",
                    "data-toggle": "tooltip", "title": Materials.Content[nMaterials].Name,
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
    for (var nMaterials = 0; nMaterials < Materials.Content.length; nMaterials++) {
        if (Materials.Content[nMaterials].Name) {
            var $materialItem = $("<div>", {
                "class": "material-item", 
                "id": Materials.Content[nMaterials].Name + "-material",
                "onClick": "changeMaterial(\"" + collection + "," + Materials.Content[nMaterials].Name + "," + gradeSelection + "," + currentOption
                    + "," + Materials.Content[nMaterials].ColorCode + "," + Materials.Content[nMaterials].Name + "," + Materials.Content[nMaterials].Code + "\")"
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
    var fabricName = res[5];
    var partNumber = res[6];

    for (var nLayers = 0; nLayers < dataDB.Options[nOptions].RelatedLayers.length; nLayers++) {
        for (var nMeshes = 1; nMeshes < currentMesh.length; nMeshes++) {
            if (dataDB.Options[nOptions].RelatedLayers[nLayers] == currentMesh[nMeshes]._material.name) {
                var path = "assets/materials/" + dataDB.Name.toLowerCase()
                    + "/fabrics/" + grade.toLowerCase() + "/" + collectionName.toLowerCase() + "/" +
                    materialName + "_" + dataDB.Options[nOptions].RelatedLayers[nLayers];
                if (grade == "none") {
                    var path = "assets/materials/" + dataDB.Name.toLowerCase()
                        + "/fabrics/" + grade.toLowerCase() + "/" + collectionName.toLowerCase() + "/" +
                        materialName +"_"+ dataDB.Options[nOptions].RelatedLayers[nLayers];
                }

                if (path) {
                    currentMesh[nMeshes]._material._albedoTexture = new BABYLON.Texture(path + "_Base_Color.png", scene);
                    if (materialName.includes("Mesh")) {
                        currentMesh[nMeshes]._material._alpha = 0.74;
                    }
                    else
                        currentMesh[nMeshes]._material._alpha = 1;
                    currentMesh[nMeshes]._material._albedoTexture.vAng = -Math.PI;
                    currentMesh[nMeshes]._material._albedoTexture.wAng = -Math.PI;
                }

                if (!(colorCode == "null" || colorCode == "undefined")) {
                    currentMesh[nMeshes]._material._albedoColor = new BABYLON.Color3.FromHexString(colorCode);
                }                
            }

        }

    }
    for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {
        if (dataDB.Options[nOptions].Values[nValues].Code == materialName) {
            dataDB.Options[nOptions].Values[nValues].Active = true;
            backPartNumber[dataDB.Options[nOptions].Depth - 1] = dataDB.Options[nOptions].Values[nValues].PartNumber;
        }
        else if (!dataDB.Options[nOptions].Values[nValues].Code.includes( "grade"))
            dataDB.Options[nOptions].Values[nValues].Active = false;

        if (dataDB.Options[nOptions].Values[nValues].Name == grade) {
            dataDB.FabricName = collectionName + " - " + fabricName;
            dataDB.FabricPartNumber = partNumber;
        }       
    }
}

function optionChangedOnFeature(selection) {
    var res = selection.split(",");
    feature = res[0];
    option = res[1]; 
    if (option.includes("grade") || option.includes("color"))
        materialCollectionCardBuildingAndEdition();
    else
        cardsResponseOnSelection();

    priceCalculation();

}


function cardsResponseOnSelection() {
    for (var nOptions = 0; nOptions < dataDB.Options.length; nOptions++) {

        if (dataDB.Options[nOptions].Name == feature) {

            for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++) {                
                var nValuesAux = nValues;
                if (dataDB.Options[nOptions].Values[nValues].Code == option) {

                    dataDB.Options[nOptions].Values[nValues].Active = true;  

                    if (dataDB.Options[nOptions].Code.includes("back")) {                                              
                        
                        if (dataDB.Options[nOptions].Depth < dataDB.BackSize + 1) {
                            for (var dependant = 0; dependant < (dataDB.BackSize + 1) - dataDB.Options[nOptions].Depth; dependant++) {
                                var check = true;                                
                                if (dependant >= 0)
                                    for (var nValuesC = 0; nValuesC < dataDB.Options[nOptions + dependant].Values.length; nValuesC++) {
                                        if (dataDB.Options[nOptions + dependant].Values[nValuesC].Active) {
                                            nValues = nValuesC;
                                            break;
                                        }
                                    }
                                for (var nValuesBeta = 0; nValuesBeta < dataDB.Options[nOptions + dependant + 1].Values.length; nValuesBeta++) {

                                    if ($.inArray(dataDB.Options[nOptions + dependant + 1].Values[nValuesBeta].Code, dataDB.Options[nOptions + dependant].Values[nValues].Uses) >= 0) {
                                        if (check) {
                                            dataDB.Options[nOptions + dependant + 1].Values[nValuesBeta].Active = true;
                                            check = false;
                                            $("#list-" + dataDB.Options[nOptions + dependant + 1].Values[nValuesBeta].Code + "-list").click();
                                            $("#" + dataDB.Options[nOptions + dependant + 1].Values[nValuesBeta].Code + "-back-material").click();
                                        }
                                        else {
                                            dataDB.Options[nOptions + dependant + 1].Values[nValuesBeta].Active = false;
                                        }
                                        if (dataDB.Options[nOptions + dependant + 1].Name.includes("Color")) {
                                            $("#" + dataDB.Options[nOptions + dependant + 1].Values[nValuesBeta].Code + "-back-material").show();
                                        }
                                        else {
                                            $("#list-" + dataDB.Options[nOptions + dependant + 1].Values[nValuesBeta].Code + "-list").show();
                                        }
                                    }
                                    else {
                                        dataDB.Options[nOptions + dependant + 1].Values[nValuesBeta].Active = false;
                                        if (dataDB.Options[nOptions + dependant + 1].Name.includes("Color")) {
                                            $("#" + dataDB.Options[nOptions + dependant + 1].Values[nValuesBeta].Code + "-back-material").hide();

                                        }
                                        else {
                                            $("#list-" + dataDB.Options[nOptions + dependant + 1].Values[nValuesBeta].Code + "-list").hide();
                                        }
                                    }
                                }  
                            }

                        }

                    }
                    nValues = nValuesAux;

                    for (var nLayers = 0; nLayers < dataDB.Options[nOptions].Values[nValues].Layers.length; nLayers++) {

                        //change material
                        var doMaterialChange = false;
                        if (dataDB.Options[nOptions].Values[nValues].Layers[nLayers].hasOwnProperty("MaterialFile")) {
                            if (dataDB.Options[nOptions].Values[nValues].Layers[nLayers].MaterialFile != null) {
                                doMaterialChange = true;

                            }
                        }    
                    
                        for (var nMeshes = 1; nMeshes < currentMesh.length; nMeshes++) {
                            if (dataDB.Options[nOptions].Values[nValues].Layers[nLayers].Layer == currentMesh[nMeshes]._material.name) {
                                //change the material
                                if (doMaterialChange) { 
                                    var path = "assets/materials" + dataDB.Options[nOptions].Values[nValues].Layers[nLayers].MaterialFile + "_";
                                    if (dataDB.Options[nOptions].Values[nValues].Code.includes("V2")) {
                                        currentMesh[nMeshes]._material._albedoTexture = new BABYLON.Texture(path + dataDB.Options[nOptions].Values[nValues].Name + "V2_Base_Color" + ".png", scene);
                                    }
                                    else {
                                        currentMesh[nMeshes]._material._albedoTexture = new BABYLON.Texture(path + dataDB.Options[nOptions].Values[nValues].Name + "_Base_Color" + ".png", scene);
                                    }


                                    if (dataDB.Options[nOptions].Values[nValues].Name.includes("Nylon") && currentMesh[nMeshes].material.name == "Base") {
                                        currentMesh[nMeshes]._material._metallicTexture = null;
                                        currentMesh[nMeshes]._material.roughness = 1;
                                        currentMesh[nMeshes]._material.metallic = 0;
                                        currentMesh[nMeshes]._material._disableBumpMap = true;
                                    }
                                    if (dataDB.Options[nOptions].Values[nValues].Name.includes("Aluminum") && currentMesh[nMeshes].material.name == "Base") {
                                        currentMesh[nMeshes]._material._metallicTexture = new BABYLON.Texture(path + dataDB.Options[nOptions].Values[nValues].Name + "_Metallic" + ".png", scene);

                                        currentMesh[nMeshes]._material.roughness = 0.1;
                                        currentMesh[nMeshes]._material.metallic = 1;

                                        currentMesh[nMeshes]._material._metallicTexture.vAng = -Math.PI;
                                        currentMesh[nMeshes]._material._metallicTexture.wAng = -Math.PI;

                                        currentMesh[nMeshes]._material._disableBumpMap = true;
                                    }


                                    currentMesh[nMeshes]._material._albedoTexture.vAng = -Math.PI;
                                    currentMesh[nMeshes]._material._albedoTexture.wAng = -Math.PI;

                                }
                                if (dataDB.Options[nOptions].Values[nValues].Layers[nLayers].Visibility != null)
                                currentMesh[nMeshes].isVisible = dataDB.Options[nOptions].Values[nValues].Layers[nLayers].Visibility;
                            }
                        }

                    }
                }
                else {
                    dataDB.Options[nOptions].Values[nValues].Active = false;
                }
            }
        }

        if (dataDB.Options[nOptions].Name.includes("Back")) {            
            for (var nValues = 0; nValues < dataDB.Options[nOptions].Values.length; nValues++)
                if (dataDB.Options[nOptions].Values[nValues].Active) {
                    backPartNumber[dataDB.Options[nOptions].Depth - 1] = dataDB.Options[nOptions].Values[nValues].PartNumber;
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

