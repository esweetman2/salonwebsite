var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 39.063020, lng: -77.118356},
            zoom: 15
    });
    
    var marker = new google.maps.Marker({
        position: {lat: 39.063020, lng: -77.118356}, 
        map: map,
    });

    var contentString = "<p>5801 Fishers Lane, Rockville MD, 20852 Studio 101</p>"
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    infowindow.open(map, marker);

    }