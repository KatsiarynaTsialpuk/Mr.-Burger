function initMap() {
    let myLatLng = {lat: 59.934085, lng: 30.339677};
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatLng,
        mapTypeId: 'roadmap',
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        }
    });

    let iconBase = './img/icons/';
    let icons = {
        info: {
            icon: iconBase + 'map_marker.png'
        }
    };

    let features = [
        {
            position: new google.maps.LatLng(59.891863, 30.316093),
            type: 'info'
        }, {
            position: new google.maps.LatLng(59.920203, 30.493471),
            type: 'info'
        }, {
            position: new google.maps.LatLng(59.948200, 30.388798),
            type: 'info'
        }, {
            position: new google.maps.LatLng(59.973066, 30.313054),
            type: 'info'
        }
    ];

    // Create markers
    features.forEach(function(feature) {
        let marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map,
            draggable: true,
            // animation: google.maps.Animation.BOUNCE
        });
    });
}