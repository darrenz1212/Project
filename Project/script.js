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