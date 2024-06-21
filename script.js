const loc = document.getElementById("loc");
const geoImage = document.getElementById("geoImage");

function getLocation() {
    geoImage.style.opacity = "0";
    geoImage.style.transform = "scale(1)";
    setTimeout(() => {
        geoImage.style.display = "none";
    }, 1000);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        loc.innerHTML = "Geolocalização não é suportada por este navegador.";
    }
}

function showPosition(position) {
    const text = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    let i = 0;

    loc.innerHTML = "";
    function typeWriter() {
        if (i < text.length) {
            if (text.charAt(i) === "<") {
                loc.innerHTML += "<br>";
                i += 4;
            } else {
                loc.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(typeWriter, 50);
        } else {
            geoImage.src = "/Imagens/HACKEADO!.svg";
            geoImage.style.display = "block";
            setTimeout(() => {
                geoImage.style.opacity = "1";
                geoImage.style.transform = "scale(1.1)";
            }, 100);
        }
    }

    typeWriter();
}
