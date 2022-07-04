var interactive_map = new InteractiveMap('map', {
    max_good_zoom: 6,
    max_map_zoom: 8,
    website_source: 'https://github.com/mrtshka/POmap',
    website_subdir: 'POmap',
});

interactive_map.addTileLayer("Изображение со спутника", {
    minNativeZoom: 0,
    maxNativeZoom: 5,
    tileSize: 262,
}, 'satellite_tiles/{z}/{x}/{y}.png')

interactive_map.addTileLayer("Рисунок", {
    minNativeZoom: 2,
    maxNativeZoom: 5,
});

document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';

addMyseumLayer(interactive_map);
addGskLayer(interactive_map);
addVatasalonLayer(interactive_map);
addGeomapLayer(interactive_map);
addMestaLayer(interactive_map);
addBroshLayer(interactive_map);

interactive_map.finalize();
