mapboxgl.accessToken = 'pk.eyJ1IjoiZGFycmVuemF2aWVyMTkiLCJhIjoiY2xnNHBldXI2MDQ4aDNndWprNHh0eGh3diJ9.pBgh6l-a-QZQaFc2Ngy6mA';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});

function successLocation(position){
    console.log(position);

    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation(error){
    console.log(error);

    setupMap([-74.5, 40]);
}

function setupMap(center){
    // =========== map ===========
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: center, // starting position [lng, lat]
        zoom: 18, // starting zoom
        projection: 'globe'
    });
    // =========== map ===========

    // =========== tombol di kanan atas ===========
    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));
    // map.addControl(new RulerControl(), 'top-right');
    // map.on('ruler.on', () => console.log('ruler: on'));
    // map.on('ruler.off', () => console.log('ruler: off'));

    // // with miles:
    // map.addControl(new RulerControl({
    //   units: 'miles',
    //   labelFormat: n => `${n.toFixed(2)} ml`,
    // }), 'top-right');
    // =========== tombol di kanan atas ===========
}

// ===================== Animasi web =====================
function fadeIn() {
    var news = document.querySelector(".news");
    var safeArea = document.querySelector(".safe-area");
    var survive = document.querySelector(".survive");
    var newsPosition = news.getBoundingClientRect().top;
    var safeAreaPosition = safeArea.getBoundingClientRect().top;
    var survivePosition = survive.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (newsPosition < screenPosition) {
        news.classList.add("fade-in");
    }

    if (safeAreaPosition < screenPosition) {
        safeArea.classList.add("fade-in");
    }

    if (survivePosition < screenPosition) {
        survive.classList.add("fade-in");
    }
}

window.addEventListener("scroll", fadeIn);
//===================== Animasi web =====================
AOS.init()
