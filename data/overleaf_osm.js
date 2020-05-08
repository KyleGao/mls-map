
var map = L.map( 'map', {
  center: [10.0, 5.0],
  minZoom: 2,
  maxZoom: 6,
  zoom: 2
}).setView([35, 6.143158]);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibW9sYmlvIiwiYSI6ImNqZjE2ZzUycTA4dzQzM3F4aGg3d3Byc3QifQ.GiU2OC0tqT9aZ35b1TAFWw'
}).addTo(map);




// var markerClusters = L.markerClusterGroup();

// for ( var i = 0; i < marks.length; ++i )
// {
//   var popup = marks[i].Country

//   var m = L.marker( [marks[i].lat, marks[i].lng]).bindPopup( popup );

//   markerClusters.addLayer( m );
// }

// map.addLayer( markerClusters );

var cluster_imls = L.markerClusterGroup();
var cluster_neuro = L.markerClusterGroup();
var cluster_all = L.markerClusterGroup();

function makeMarkers(list, cluster){
  for ( var i = 0; i < list.length; ++i )
  {
    var popup = list[i].Country

    var m1 = L.marker( [list[i].lat, list[i].lng]).bindPopup( popup );
    var m2 = L.marker( [list[i].lat, list[i].lng]).bindPopup( popup );

    cluster.addLayer( m1 );
    cluster_all.addLayer(m2);  
  }
};

makeMarkers(imls, cluster_imls);
makeMarkers(neuro, cluster_neuro);
// cluster_all = cluster_imls + cluster_neuro;


var overlayMaps = {
    "ALL": cluster_all,
    "IMLS": cluster_imls,
    "NEURO": cluster_neuro
};

map.addLayer( cluster_all );

// map.addLayer( cluster_imls );
// map.addLayer( cluster_neuro );

L.control.layers(overlayMaps, null, {collapsed:false}).addTo(map);