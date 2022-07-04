function addGeomapLayer(map) {
    map.addInteractiveLayer('geomap', geomap, {
        name: "Административные границы и населенные пункты",
        create_checkbox: true,
        create_feature_popup: true,
        feature_group: L.featureGroup(),
        sidebar_icon_html: '<i class="fas fa-map"></i>',
        icon: Utils.getCustomIcon('fa-map'),
        polygon_style_highlight: feature => {
            if (feature.properties.id == "lv") {
                return {
                    color: 'green',
                    fillColor: 'green',
//                    opacity: 1.0,
//                    fillOpacity: 0.5
                }
            }
            return {
                color: 'white',
                fillColor: 'white',
//                opacity: 1.0,
//                fillOpacity: 0.5
            }
        },
        polygon_style: feature => {
            if (feature.properties.id == "lv") {
                return {
                    color: 'green',
//                    opacity: 0.8,
//                    fillOpacity: 0.2
                }
            }
            return {
                color: 'red',
                fillColor: 'black',
//                opacity: 0.8,
                fillOpacity: 0.3
            }
        },
        pointToLayer: function (feature, latlng) {
            if (feature.properties.radius) {
                return L.circle(latlng, {
                    radius: feature.properties.radius,
                    color: 'green'
                });
            }
            return L.marker(latlng, {
                icon: Utils.getCustomIcon('fa-church'),
                riseOnHover: true
            });
        },
        onEachFeature: function (feature, layer) {
            layer.on({
                mouseover: event => {
                    this.highlightFeature(feature.properties.id);
                },
                mouseout: event => {
                    this.removeFeatureHighlight(feature.properties.id);
                },
                click: event => {
                    Utils.share_marker.prevent();
                    this.zoomToFeature(feature.properties.id);
                    Utils.setHistoryState(this.id, feature.properties.id);
                }
            });
        }
    });
}
