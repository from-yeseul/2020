const API_KEY ="8a9ad3cdf111499e621f217bcb44798b"
const COORDS = "coords";

function getWeather(lat,lng){
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}$lon=${lng}&appid=${API_KEY}`
    )
        .then(function(response){
        return response.json();
    })
        .then(function(json){

    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
    }
}

function init(){
    loadCoords();
}
init();