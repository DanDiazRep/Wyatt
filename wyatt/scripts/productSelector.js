
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const selectedChair = urlParams.get('name')

console.log(selectedChair)
//GET DATA

switch (selectedChair) {
    case "G6":
        var dataDB = getG6;
        $("#stoolSwap").click(function () {
            window.location.href = "/index.html?name=G6Stool";
        });
        break;

    case "G6Stool":
        var dataDB = getG6Stool;
        $("#standardSwap").click(function () {
            window.location.href = "/index.html?name=G6";
        });
        break;

    case "Freeride":
        var dataDB = getFreeride;
        $("#stoolSwap").click(function () {
            window.location.href = "/index.html?name=FreerideStool";
        });
        break;

    case "FreerideStool":
        var dataDB = getFreerideStool;
        $("#standardSwap").click(function () {
            window.location.href = "/index.html?name=Freeride";
        });
        break;

    case "Roswell":
        var dataDB = getRoswell;
        $("#stoolSwap").click(function () {
            window.location.href = "/index.html?name=RoswellStool";
        });
        break;

    case "RoswellStool":
        var dataDB = getRoswellStool;
        $("#standardSwap").click(function () {
            window.location.href = "/index.html?name=Roswell";
        });
        break;

    case "LaMia":
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
