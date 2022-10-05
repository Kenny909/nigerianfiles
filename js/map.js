
 // Initialise leaflet map
     var map = L.map('map').setView([7.15, 8.75], 6);



// Add osm tile layer to map
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '© OpenStreetMap'
}).addTo(map);


// Add Google streets layer to map
var googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});


// Add Google hybrid layer to map
var googleHybrid = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});


// Add Google satellite layer to map
var googleSat = L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
})//.addTo(map);


//Add Google terrain layer to map
var googleTerrain = L.tileLayer('http://{s}.google.com/vt?lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
})//.addTo(map);

// Add TopoMap tile layer to map
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
})//.addTo(map);

//var marker = L.marker([7.15, 8.75]).addTo(map);


// Add Region Layer style
var northcentralstyle = {
    color: "red",
    opacity: 1,
    weight: 2,
}

var northeaststyle = {
    color: "#41b128",
    opacity: 1,
    weight: 2,
}

var northweststyle = {
    color: "orange",
    opacity: 1,
    weight: 2,
}

var railwaystyle = {
    color: "black",
    opacity: 0.5,
    weight: 2,
}

var southeaststyle = {
    color: "blue",
    opacity: 1,
    weight: 2,
}

var southsouthstyle = {
    color: "#a30fe8",
    opacity: 1,
    weight: 2,
}

var southweststyle = {
    color: "#774313",
    opacity: 1,
    weight: 2,
}

var waterwaystyle = {
    color: "#1ba2c7",
    opacity: 0.5,
    weight: 2,
}


var placestyle = {
    radius: 6,
    fillColor: "#9f1d6b",
    color: "#c71b82",
    weight: 1.5,
}





// Add Geojson Layers
var northcentrallayer = L.geoJson(northcentral,{
    style:northcentralstyle,
    onEachFeature:function (feature, layer) {

        // area= turf.area(feature)
        // console.log(area)

        area = (turf.area(feature)/1000000).toFixed(2)
        //console.log(area)
        center_lng = turf.center(feature).geometry.coordinates[0].toFixed(2)
        center_lat = turf.center(feature).geometry.coordinates[1].toFixed(2)

        //console.log(center)

        label= `Name: ${feature.properties.ADM1_NAME}<br>`
        label+=`Area: ${area}<br>`
        label+=`Center:Lng: ${center_lng} , Lat: ${center_lat} <br>`

        layer.bindPopup(label)

        // label=''
        //layer.bindPopup(feature.properties.ADM1_NAME)
    }
}).addTo(map)

var northeastlayer = L.geoJson(northeast, {
    style:northeaststyle,
    onEachFeature:function (feature, layer) {
           // area= turf.area(feature)
        // console.log(area)

        area = (turf.area(feature)/1000000).toFixed(2)
        //console.log(area)
        center_lng = turf.center(feature).geometry.coordinates[0].toFixed(2)
        center_lat = turf.center(feature).geometry.coordinates[1].toFixed(2)

        //console.log(center)

        label= `Name: ${feature.properties.ADM1_NAME}<br>`
        label+=`Area: ${area}<br>`
        label+=`Center:Lng: ${center_lng} , Lat: ${center_lat} <br>`

        layer.bindPopup(label)

        // label=''
        
        //layer.bindPopup(feature.properties.ADM1_NAME)
    } 
}).addTo(map)

var northwestlayer = L.geoJson(northwest, {

    style:northweststyle,
     onEachFeature:function (feature, layer) {
        // area= turf.area(feature)
        // console.log(area)

        area = (turf.area(feature)/1000000).toFixed(2)
        //console.log(area)
        center_lng = turf.center(feature).geometry.coordinates[0].toFixed(2)
        center_lat = turf.center(feature).geometry.coordinates[1].toFixed(2)

        //console.log(center)

        label= `Name: ${feature.properties.ADM1_NAME}<br>`
        label+=`Area: ${area}<br>`
        label+=`Center:Lng: ${center_lng} , Lat: ${center_lat} <br>`

        layer.bindPopup(label)

        // label=''
        //layer.bindPopup(feature.properties.ADM1_NAME)
        // layer.bindPopup(feature.properties.ADM1_NAME)
    } 
}).addTo(map)


var railwaylayer = L.geoJson(railway, {
    style:railwaystyle,
     onEachFeature:function (feature, layer) {
        layer.bindPopup(feature.properties.fclass)
    } 
}).addTo(map)

var placelayer = L.geoJson(places,{
    pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng,placestyle)
},

onEachFeature:function (feature, layer) {
        layer.bindPopup(feature.properties.name)
}
}).addTo(map)

var southeastlayer = L.geoJson(southeast, {

    style:southeaststyle,
     onEachFeature:function (feature, layer) {
        area = (turf.area(feature)/1000000).toFixed(2)
        //console.log(area)
        center_lng = turf.center(feature).geometry.coordinates[0].toFixed(2)
        center_lat = turf.center(feature).geometry.coordinates[1].toFixed(2)

        //console.log(center)

        label= `Name: ${feature.properties.ADM1_NAME}<br>`
        label+=`Area: ${area}<br>`
        label+=`Center:Lng: ${center_lng} , Lat: ${center_lat} <br>`

        layer.bindPopup(label)

        // label=''
        //layer.bindPopup(feature.properties.ADM1_NAME)
        // layer.bindPopup(feature.properties.ADM1_NAME)
    } 
}).addTo(map)

var southsouthlayer = L.geoJson(southsouth, {
    style:southsouthstyle,
     onEachFeature:function (feature, layer) {
        area = (turf.area(feature)/1000000).toFixed(2)
        //console.log(area)
        center_lng = turf.center(feature).geometry.coordinates[0].toFixed(2)
        center_lat = turf.center(feature).geometry.coordinates[1].toFixed(2)

        //console.log(center)

        label= `Name: ${feature.properties.ADM1_NAME}<br>`
        label+=`Area: ${area}<br>`
        label+=`Center:Lng: ${center_lng} , Lat: ${center_lat} <br>`

        layer.bindPopup(label)

        // label=''
        //layer.bindPopup(feature.properties.ADM1_NAME)
        // layer.bindPopup(feature.properties.ADM1_NAME)
    } 
}).addTo(map)

var southwestlayer = L.geoJson(southwest, {
    style:southweststyle,
     onEachFeature:function (feature, layer) {
        area = (turf.area(feature)/1000000).toFixed(2)
        //console.log(area)
        center_lng = turf.center(feature).geometry.coordinates[0].toFixed(2)
        center_lat = turf.center(feature).geometry.coordinates[1].toFixed(2)

        //console.log(center)

        label= `Name: ${feature.properties.ADM1_NAME}<br>`
        label+=`Area: ${area}<br>`
        label+=`Center:Lng: ${center_lng} , Lat: ${center_lat} <br>`

        layer.bindPopup(label)

        // label=''
        //layer.bindPopup(feature.properties.ADM1_NAME)
        // layer.bindPopup(feature.properties.ADM1_NAME)
    } 
}).addTo(map)

var waterwayslayer = L.geoJson(waterways, {
    style:waterwaystyle,
 onEachFeature:function (feature, layer) {
        layer.bindPopup(feature.properties.fclass)
    } 
}).addTo(map)


// Basemaps
var baseLayers = {
    "OpenStreetMap": osm,
    "Google Street": googleStreets,
    "Google Hybrid": googleHybrid,
    "Google Satelite": googleSat,
    "Google Terrain": googleTerrain,
    "OpenTopoMap": OpenTopoMap,
};



//Changing colour of text in layercontrol panel
L.control.layers({}, {
  "<span style='color:red'>North Central</span>": northcentrallayer,
  "<span style='color:#41b128'>North East</span>": northeastlayer,
  "<span style='color:orange'>North West</span>": northwestlayer,
  "<span style='color:black'>Railways</span>": railwaylayer,
  "<span style='color:blue'>South East</span>": southeastlayer,
  "<span style='color:#a30fe8'>South South</span>": southsouthlayer,
  "<span style='color:#774313'>South West</span>": southwestlayer,
  "<span style='color:#1ba2c7'>Waterways</span>": waterwayslayer,
  "<span style='color:#9f1d6b'>Places of Interest</span>": placelayer,
  
}).addTo(map);



//L.control.layers({position: 'topleft'}).addTo(map); 
//L.control.layers({position: 'bottomright'}).addTo(map);


// Layers
var overlays = {
    // "North Central": northcentrallayer, 
    // "North East" : northeastlayer,
    // "North West": northwestlayer,
    // "Railways" : railwaylayer,
    // "Places of Interest" : placelayer,
    // "South East" : southeastlayer,
    // "South South" : southsouthlayer,
    // "South West" : southwestlayer,
    // "Waterways" : waterwayslayer,


    //"Marker": marker,
    //"Roads": roadsLayer
};


// Add Layer control to map
L.control.layers(baseLayers, overlays, {collapsed:true},
    ).addTo(map)
//L.control.layers({position: 'bottomright'}).addTo(map);
 
   

// Add leaflet browser print control to map
L.control.browserPrint({position: 'topleft'}).addTo(map);

// Mouse move coordinates
map.on("mousemove",function(e) {
    // console.log(e)
    $("#coordinate").html(`Lat:${e.latlng.lat.toFixed(2)}, Lng:${e.latlng.lng.toFixed(2)}`)
})



// Add Scale to map 
L.control.scale({position:"bottomright"}).addTo(map)






