function addVatasalonLayer(map) {
    map.addInteractiveLayer('vatasalon', vatasalon, {
        name: "Автосалоны и «УСЛУГИ»",
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        sidebar_icon_html: '<i class="fas fa-ruble-sign"></i>',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon('fas fa-warehouse'),
                riseOnHover: true
            });
        }
    });
}
