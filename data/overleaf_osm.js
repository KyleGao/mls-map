
var map = L.map( 'map', {
  center: [10.0, 5.0],
  minZoom: 2,
  zoom: 2
}).setView([35, 6.143158], 1.75);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibW9sYmlvIiwiYSI6ImNqZjE2ZzUycTA4dzQzM3F4aGg3d3Byc3QifQ.GiU2OC0tqT9aZ35b1TAFWw'
}).addTo(map);


var markerClusters = L.markerClusterGroup();

for ( var i = 0; i < marks.length; ++i )
{


  var m = L.marker( [marks[i].lat, marks[i].lng]);

  markerClusters.addLayer( m );
}

map.addLayer( markerClusters );
