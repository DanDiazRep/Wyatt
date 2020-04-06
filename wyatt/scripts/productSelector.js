
let selectedChair = sessionStorage.getItem('chair');
//GET DATA
console.log(selectedChair);
switch (selectedChair) {
    case "G6":
        var dataDB = getG6;
        $("#stoolSwap").click(function () {
            sessionStorage.clear();
            sessionStorage.setItem('chair', "G6Stool");
            location.reload();
        });
        break;

    case "G6Stool":
        var dataDB = getG6Stool;
        $("#standardSwap").click(function () {
            sessionStorage.clear();
            sessionStorage.setItem('chair', "G6");
            location.reload();
        });
        break;

    case "Freeride":
        var dataDB = getFreeride;
        $("#stoolSwap").click(function () {
            sessionStorage.clear();
            sessionStorage.setItem('chair', "FreerideStool");
            location.reload();
        });
        break;

    case "FreerideStool":
        var dataDB = getFreerideStool;
        $("#standardSwap").click(function () {
            sessionStorage.clear();
            sessionStorage.setItem('chair', "Freeride");
            location.reload();
        });
        break;

    case "Roswell":
        var dataDB = getRoswell;
        $("#stoolSwap").click(function () {
            sessionStorage.clear();
            sessionStorage.setItem('chair', "RoswellStool");
            location.reload();
        });
        break;

    case "RoswellStool":
        var dataDB = getRoswellStool;
        $("#standardSwap").click(function () {
            sessionStorage.clear();
            sessionStorage.setItem('chair', "Roswell");
            location.reload();
        });
        break;

    case "Lamia":
        var dataDB = getLamia;
        $("#stoolStandardSwap").css({"visibility":"hidden", "height": "1px"});
        break;

    case "Extra":
        var dataDB = getExtra;
        $("#stoolStandardSwap").css({ "visibility": "hidden", "height": "1px" });
        break;

    case "TetherStool":
        var dataDB = getTether;
        $("#stoolStandardSwap").css({ "visibility": "hidden", "height": "1px" });
        break;

    default:
        var dataDB = getG6;
}
