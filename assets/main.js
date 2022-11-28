// thekrmff | karimyll | with leaflet.js

var map = L.map('map').setView([40.4093, 49.8671], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20
}).addTo(map);


var markerPortBaku = L.marker([40.3751, 49.8596]).addTo(map);
var markerMall28 = L.marker([40.3791, 49.8468]).addTo(map);
var markerDenizMall = L.marker([40.3580, 49.8373]).addTo(map);
var markerGanjlikMall = L.marker([40.4001, 49.8529]).addTo(map);
var markerMetroPark = L.marker([40.4034, 49.8729]).addTo(map);
var markerParkBulvarMall = L.marker([40.3707, 49.8497]).addTo(map);
var markerNargizMall = L.marker([40.3718 , 49.8374]).addTo(map);
var markerNizamiMall = L.marker([40.3788, 49.8283]).addTo(map);


var portBaku = document.getElementById("pb");
var mall28 = document.getElementById("m28");
var denizMall = document.getElementById('dm');
var ganjlikMall = document.getElementById('gm');
var metroPark = document.getElementById("mp");
var parkBulvarMall = document.getElementById("pbm");
var nargizMall = document.getElementById("nsm");
var nizamiMall = document.getElementById("nm");

function portBakuFunc() {
    map.setView([40.3751, 49.8596], 17);
    markerPortBaku.bindPopup("<h3>Port Baku</h3>").openPopup();
}

function mall28Func() {
    map.setView([40.3791, 49.8468], 17);
    markerMall28.bindPopup("<h3>28 Mall</h3>").openPopup();
}

function denizMallFunc() {
    map.setView([40.3580, 49.8373], 17);
    markerDenizMall.bindPopup("<h3>Deniz Mall</h3>").openPopup();
}

function ganjlikMallFunc() {
    map.setView([40.4001, 49.8529], 17);
    markerGanjlikMall.bindPopup("<h3>Ganjlik Mall</h3>").openPopup();
}

function metroParkFunc() {
    map.setView([40.4034, 49.8729], 17);
    markerMetroPark.bindPopup("<h3>Metro Park</h3>").openPopup();
}

function parkBulvarMallFunc() {
    map.setView([40.3707, 49.8497], 17);
    markerParkBulvarMall.bindPopup("<h3>Park Bulvar</h3>").openPopup();
}

function nargizMallFunc() {
    map.setView([40.3718 , 49.8374], 17);
    markerNargizMall.bindPopup("<h3>Nargiz Mall</h3>").openPopup();
}

function nizamiMallFunc() {
    map.setView([40.3788, 49.8283], 17);
    markerNizamiMall.bindPopup("<h3>Nizami Mall</h3>").openPopup();
}

portBaku.addEventListener("click", portBakuFunc);
mall28.addEventListener("click", mall28Func);
denizMall.addEventListener("click", denizMallFunc);
ganjlikMall.addEventListener("click", ganjlikMallFunc);
metroPark.addEventListener("click", metroParkFunc);
parkBulvarMall.addEventListener("click", parkBulvarMallFunc);
nargizMall.addEventListener("click", nargizMallFunc);
nizamiMall.addEventListener("click", nizamiMallFunc);

function search() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.querySelectorAll('li');
      
    for (i = 0; i < x.length; i++) { 
        if (x[i].innerHTML.toLowerCase().includes(input)) {
             x[i].style.display="list-item";  
        }
        else {
            x[i].style.display="none";              
        }
    }
}