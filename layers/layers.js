var wms_layers = [];

var format_comunas_0 = new ol.format.GeoJSON();
var features_comunas_0 = format_comunas_0.readFeatures(json_comunas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunas_0.addFeatures(features_comunas_0);
var lyr_comunas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_comunas_0, 
                style: style_comunas_0,
                popuplayertitle: "comunas",
                interactive: true,
    title: 'comunas<br />\
    <img src="styles/legend/comunas_0_0.png" /> 128,45 - 128,46<br />\
    <img src="styles/legend/comunas_0_1.png" /> 128,46 - 128,51<br />\
    <img src="styles/legend/comunas_0_2.png" /> 128,51 - 128,51<br />\
    <img src="styles/legend/comunas_0_3.png" /> 128,51 - 128,53<br />\
    <img src="styles/legend/comunas_0_4.png" /> 128,53 - 128,64<br />\
    <img src="styles/legend/comunas_0_5.png" /> 128,64 - 150,98<br />\
    <img src="styles/legend/comunas_0_6.png" /> 150,98 - 151,1<br />\
    <img src="styles/legend/comunas_0_7.png" /> 151,1 - 151,15<br />\
    <img src="styles/legend/comunas_0_8.png" /> 151,15 - 151,24<br />\
    <img src="styles/legend/comunas_0_9.png" /> 151,24 - 151,28<br />'
        });

lyr_comunas_0.setVisible(true);
var layersList = [lyr_comunas_0];
lyr_comunas_0.set('fieldAliases', {'objectid': 'objectid', 'shape_leng': 'shape_leng', 'dis_elec': 'dis_elec', 'cir_sena': 'cir_sena', 'cod_comuna': 'cod_comuna', 'codregion': 'codregion', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', 'Comuna': 'Comuna', 'Provincia': 'Provincia', 'Tarifas Nuevas_Comunas': 'Tarifas Nuevas_Comunas', 'Tarifas Nuevas_BT1': 'Tarifas Nuevas_BT1', 'Tarifas Nuevas_Iva': 'Tarifas Nuevas_Iva', 'Tarifas Nuevas_field_5': 'Tarifas Nuevas_field_5', 'Tarifas Nuevas_field_6': 'Tarifas Nuevas_field_6', 'Tarifas Nuevas_field_7': 'Tarifas Nuevas_field_7', });
lyr_comunas_0.set('fieldImages', {'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'dis_elec': 'Range', 'cir_sena': 'Range', 'cod_comuna': 'Range', 'codregion': 'Range', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', 'Comuna': 'TextEdit', 'Provincia': 'TextEdit', 'Tarifas Nuevas_Comunas': 'TextEdit', 'Tarifas Nuevas_BT1': 'TextEdit', 'Tarifas Nuevas_Iva': 'TextEdit', 'Tarifas Nuevas_field_5': 'TextEdit', 'Tarifas Nuevas_field_6': 'TextEdit', 'Tarifas Nuevas_field_7': 'TextEdit', });
lyr_comunas_0.set('fieldLabels', {'objectid': 'hidden field', 'shape_leng': 'hidden field', 'dis_elec': 'hidden field', 'cir_sena': 'hidden field', 'cod_comuna': 'hidden field', 'codregion': 'hidden field', 'st_area_sh': 'hidden field', 'st_length_': 'hidden field', 'Region': 'inline label - always visible', 'Comuna': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Tarifas Nuevas_Comunas': 'no label', 'Tarifas Nuevas_BT1': 'inline label - always visible', 'Tarifas Nuevas_Iva': 'inline label - always visible', 'Tarifas Nuevas_field_5': 'no label', 'Tarifas Nuevas_field_6': 'no label', 'Tarifas Nuevas_field_7': 'no label', });
lyr_comunas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});