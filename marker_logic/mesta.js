function addMestaLayer(map) {
    map.addInteractiveLayer('mesta', mesta, {
        name: "Интересные места и достопримечательности",
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        sidebar_icon_html: '<i class="fas fa-location-dot"></i>',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon('fa-location-dot'),
                riseOnHover: true
            });
        }
    });
}
