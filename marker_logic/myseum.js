function addMyseumLayer(map) {
    map.addInteractiveLayer('myseum', myseum, {
        name: "Мюзеи и имущество",
        create_checkbox: true,
        create_feature_popup: true,
        sidebar_icon_html: '<i class="fas fa-car-tunnel"></i>',
        polygon_style_highlight: {
            color: 'white',
            opacity: 1.0,
            fillOpacity: 0.3
        },
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon('fa-car-tunnel'),
                riseOnHover: true
            });
        },
        onEachFeature: function (feature, layer) {
            layer.on({
                mouseover: e => {
                    this.highlightFeature(feature.properties.id);
                },
                mouseout: e => {
                    this.removeFeatureHighlight(feature.properties.id);
                },
                click: e => {
                    this.zoomToFeature(feature.properties.id);
                }
            });
        }
    });
}
