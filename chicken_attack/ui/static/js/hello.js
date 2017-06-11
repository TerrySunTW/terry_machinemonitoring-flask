function sayHello() {
    alert("Hello World")
}

function alertContents(httpRequest)
{
    if (httpRequest.readyState == 4)
    {
        if (httpRequest.status == 200 ||
            httpRequest.status == 0)
        {
            alert("The response was: "
                + httpRequest.status
                + "\n"
                + httpRequest.responseText);
        }
        else
        {
            alert('There was a problem with the request. '
                + httpRequest.status
                + httpRequest.responseText);
        }
    }
}

function test()
{
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() { alertContents(httpRequest); };

    httpRequest.open(
        "GET",
        "v2/config/melsec/equipments",
        true);

    httpRequest.send(null);
}
