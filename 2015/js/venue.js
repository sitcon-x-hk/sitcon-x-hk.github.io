google.maps.event.addDomListener(window, 'load', function () {
    var
        center = new google.maps.LatLng(22.426421, 114.211157),
        map = new google.maps.Map(document.getElementById("googleMap"), {
            center : center,
            zoom : 15,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        }),
        marker = new google.maps.Marker({
            position : center,
            animation:google.maps.Animation.BOUNCE
        });
    marker.setMap(map);
});