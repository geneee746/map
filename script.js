mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VuZS1lZSIsImEiOiJja2t0M2YybTYxOWJxMm5xbmJ0bzI0MnFtIn0.27kOTO5gCJK6-MRvsslA2A';

function getLocation(){
  function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
	  // do something
    var map = new mapboxgl.Map({
            style: 'mapbox://styles/mapbox/light-v10',
            center: [longitude, latitude],
            zoom: 15.5,
            pitch: 45,
            bearing: -17.6,
            container: 'map',
            antialias: true
});

var marker = new mapboxgl.Marker({
            color: "#FF0000",
            draggable: true
}).setLngLat([longitude, latitude])
.addTo(map);
    }

    function error(e) {
        console.log(e.message)
    }

    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert('Geolocation is not supported by your browser');
    }
}