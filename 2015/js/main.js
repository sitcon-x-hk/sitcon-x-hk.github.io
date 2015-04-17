(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=750888685003281&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
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
        }),
        info = new google.maps.InfoWindow({
            content : "Hello World!"
        });
    marker.setMap(map);
    //info.open(map, marker);
});
