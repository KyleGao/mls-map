
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
//''mim','clisci','cb','epibiostats','sp','mls','psc','eco','immed','rna','znz','bsm','nan','sysbio','mtb','biomed','ddnz',
var cluster_mim = L.markerClusterGroup();
var cluster_clisci = L.markerClusterGroup();
var cluster_cb = L.markerClusterGroup();
var cluster_epibiostats = L.markerClusterGroup();
var cluster_sp = L.markerClusterGroup();
var cluster_mls = L.markerClusterGroup();
var cluster_psc = L.markerClusterGroup();
var cluster_eco = L.markerClusterGroup();
var cluster_immed = L.markerClusterGroup();
var cluster_rna = L.markerClusterGroup();
var cluster_znz = L.markerClusterGroup();
var cluster_bsm = L.markerClusterGroup();
var cluster_nan = L.markerClusterGroup();
var cluster_sysbio = L.markerClusterGroup();
var cluster_mtb = L.markerClusterGroup();
var cluster_biomed = L.markerClusterGroup();
var cluster_ddnz = L.markerClusterGroup();
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

makeMarkers(mim, cluster_mim);
makeMarkers(clisci, cluster_clisci);
makeMarkers(cb, cluster_cb);
makeMarkers(epibiostats, cluster_epibiostats);
makeMarkers(sp, cluster_sp);
makeMarkers(mls, cluster_mls);
makeMarkers(psc, cluster_psc);
makeMarkers(eco, cluster_eco);
makeMarkers(immed, cluster_immed);
makeMarkers(rna, cluster_rna);
makeMarkers(znz, cluster_znz);
makeMarkers(bsm, cluster_bsm);
makeMarkers(nan, cluster_nan);
makeMarkers(sysbio, cluster_sysbio);
makeMarkers(mtb, cluster_mtb);
makeMarkers(biomed, cluster_biomed);
makeMarkers(ddnz, cluster_ddnz);




var overlayMaps = {
  "ALL": cluster_all,
  "MIM": cluster_mim,
  "CliSc": cluster_clisci,
  "CB": cluster_cb,
  "EpiBi": cluster_epibiostats,
  "S&P": cluster_sp,
  "MLS": cluster_mls,
  "PSC": cluster_psc,
  "Eco": cluster_eco,
  "imMed": cluster_immed,
  "RNA": cluster_rna,
  "ZNZ": cluster_znz,
  "BSM": cluster_bsm,
  "EB": cluster_nan,
  "SysBi": cluster_sysbio,
  "MTB": cluster_mtb,
  "BioMe": cluster_biomed,
  "DDNZ": cluster_ddnz
};

map.addLayer( cluster_all );

// map.addLayer( cluster_imls );
// map.addLayer( cluster_neuro );

L.control.layers(overlayMaps, null, {collapsed:false}).addTo(map);