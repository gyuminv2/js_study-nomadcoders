function onGeoOk(position) {
    const lat = position.coords.lattitude;
    const lng = position.coords.longitude;
    console.log("you live", lat, lng);
}

function onGeoError() {
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);