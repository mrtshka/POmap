function addBroshLayer(map) {
    map.addInteractiveLayer('brosh', brosh, {
        name: "Автопризраки™",
        create_checkbox: true,
        create_feature_popup: true,
        sidebar_icon_html: '<i class="fas fa-car-burst"></i>',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon('fa-car-burst'),
                riseOnHover: true
            });
        }
    });
}
