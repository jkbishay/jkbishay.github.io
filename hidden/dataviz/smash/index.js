// Add taffy
var taffyscript = document.createElement('script');
taffyscript.type = 'text/javascript';
taffyscript.src = 'https://github.com/typicaljoe/taffydb/raw/master/taffy.js';
document.head.appendChild(taffyscript);

function makeHttpObject() {
    try {return new XMLHttpRequest();}
    catch (error) {}
    try {return new ActiveXObject("Msxml2.XMLHTTP");}
    catch (error) {}
    try {return new ActiveXObject("Microsoft.XMLHTTP");}
    catch (error) {}
  
    throw new Error("Could not create HTTP request object.");
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
}

httpGet("https://api.smash.gg/standing/tournament/6755/page?expand%5B%5D=participants&expand%5B%5D=standingPoints&mutations%5B%5D=playerData");

/*var request = makeHttpObject();
request.open("GET", "https://api.smash.gg/standing/tournament/6755/page?expand%5B%5D=participants&expand%5B%5D=standingPoints&mutations%5B%5D=playerData", true);
request.send(null);
request.onreadystatechange = function() {
if (request.readyState == 4)
    alert(request.responseText);
};
console.log(request);
document.getElementById('test').innerText = request.responseText;
*/