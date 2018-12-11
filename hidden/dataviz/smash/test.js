require(XMLHttpRequest);

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
}

httpGet("https://api.smash.gg/standing/tournament/6755/page?expand%5B%5D=participants&expand%5B%5D=standingPoints&mutations%5B%5D=playerData");
