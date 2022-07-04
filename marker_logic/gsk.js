function addGskLayer(map) {
    map.addInteractiveLayer('gsk', gsk, {
        name: "ГСК",
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        sidebar_icon_html: '<i class="fas fa-warehouse"></i>',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon('fa-warehouse'),
                riseOnHover: true
            });
        }
    });
}
