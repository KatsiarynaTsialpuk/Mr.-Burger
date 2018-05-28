let markersData = [
    {
        lat: 59.891863,
        lng:  30.316093,
        icon: "app/img/icons/map_marker.png",
        address: "Ташкентская ул., 1",
    },
    {
        lat: 59.920203,
        lng:  30.493471,
        icon: "app/img/icons/map_marker.png",
        address: "пр. Солидарности",
    },
    {
        lat: 59.948200,
        lng: 30.388798,
        icon: "app/img/icons/map_marker.png",
        address: "Шпалерная ул., 55",
    },
    {
        lat: 59.973066,
        lng: 30.313054,
        icon: "app/img/icons/map_marker.png",
        address: "Петроградский р-н"
    }
];

let map, infoWindow;
function initMap() {
    let centerLatLng = new google.maps.LatLng(59.934085, 30.339677);
    let mapOptions = {
        zoom: 11,
        center: centerLatLng,
        mapTypeId: 'roadmap',
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        }
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    infoWindow = new google.maps.InfoWindow();
    google.maps.event.addListener(map, "click", function() {
        infoWindow.close();
    });
    for (let i = 0; i < markersData.length; i++){
        let latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        let icon = markersData[i].icon;
        let address = markersData[i].address;
        addMarker(latLng, icon, address);
    }
}
google.maps.event.addDomListener(window, "load", initMap);
function addMarker(latLng, icon, address) {
    let marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: icon
    });
    google.maps.event.addListener(marker, "click", function() {
        let contentString = address;
        infoWindow.setContent(contentString);
        infoWindow.open(map, marker);
    });
}