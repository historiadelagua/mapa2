var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Departamentoscopiar_1 = new ol.format.GeoJSON();
var features_Departamentoscopiar_1 = format_Departamentoscopiar_1.readFeatures(json_Departamentoscopiar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentoscopiar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentoscopiar_1.addFeatures(features_Departamentoscopiar_1);
var lyr_Departamentoscopiar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentoscopiar_1, 
                style: style_Departamentoscopiar_1,
                popuplayertitle: 'Departamentos copiar',
                interactive: true,
    title: 'Departamentos copiar<br />\
    <img src="styles/legend/Departamentoscopiar_1_0.png" /> 1020 - 2034<br />\
    <img src="styles/legend/Departamentoscopiar_1_1.png" /> 2034 - 2850<br />\
    <img src="styles/legend/Departamentoscopiar_1_2.png" /> 2850 - 3472<br />\
    <img src="styles/legend/Departamentoscopiar_1_3.png" /> 3472 - 4273<br />\
    <img src="styles/legend/Departamentoscopiar_1_4.png" /> 4273 - 7272<br />' });
var format_agro_2 = new ol.format.GeoJSON();
var features_agro_2 = format_agro_2.readFeatures(json_agro_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agro_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agro_2.addFeatures(features_agro_2);
var lyr_agro_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_agro_2, 
                style: style_agro_2,
                popuplayertitle: 'agro',
                interactive: true,
    title: 'agro<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Departamentoscopiar_1.setVisible(true);lyr_agro_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Departamentoscopiar_1,lyr_agro_2];
lyr_Departamentoscopiar_1.set('fieldAliases', {'nam': 'nam', 'Total': 'Total', '% urbana': '% urbana', '%isra': '%isra', 'Propiedades_SF_1947_Total Explotaciones': 'Propiedades_SF_1947_Total Explotaciones', 'Propiedades_SF_1947_Total Hectáreas': 'Propiedades_SF_1947_Total Hectáreas', 'Propiedades_SF_1947_Propietarios Explotaciones': 'Propiedades_SF_1947_Propietarios Explotaciones', 'Propiedades_SF_1947_Propietarios Hectáreas': 'Propiedades_SF_1947_Propietarios Hectáreas', 'Propiedades_SF_1947_Arrendatarios Explotaciones': 'Propiedades_SF_1947_Arrendatarios Explotaciones', 'Propiedades_SF_1947_Arrendatarios Hectáreas': 'Propiedades_SF_1947_Arrendatarios Hectáreas', 'Propiedades_SF_1947_Medios y tanteros Explotaciones': 'Propiedades_SF_1947_Medios y tanteros Explotaciones', 'Propiedades_SF_1947_Medios y tanteros Has.': 'Propiedades_SF_1947_Medios y tanteros Has.', 'Propiedades_SF_1947_Gratuitos Explotaciones': 'Propiedades_SF_1947_Gratuitos Explotaciones', 'Propiedades_SF_1947_Gratuitos Has.': 'Propiedades_SF_1947_Gratuitos Has.', 'Propiedades_SF_1947_Fiscales Explotaciones': 'Propiedades_SF_1947_Fiscales Explotaciones', 'Propiedades_SF_1947_Fiscales Has.': 'Propiedades_SF_1947_Fiscales Has.', 'Propiedades_SF_1947_Propietarios y arrendatarios Explotaciones': 'Propiedades_SF_1947_Propietarios y arrendatarios Explotaciones', 'Propiedades_SF_1947_Propietarios y arrendatarios  Has': 'Propiedades_SF_1947_Propietarios y arrendatarios  Has', 'Propiedades_SF_1947_Propietarios y medieros y tanteros Explotaciones': 'Propiedades_SF_1947_Propietarios y medieros y tanteros Explotaciones', 'Propiedades_SF_1947_Propietarios y medieros y tanteros Has': 'Propiedades_SF_1947_Propietarios y medieros y tanteros Has', 'Propiedades_SF_1947_Propietarios y ocupantes gratuitos explotaciones': 'Propiedades_SF_1947_Propietarios y ocupantes gratuitos explotaciones', 'Propiedades_SF_1947_Propietarios y ocupantes gratuitos Has.': 'Propiedades_SF_1947_Propietarios y ocupantes gratuitos Has.', 'Propiedades_SF_1947_Propietarios y tierras fiscales Explotaciones': 'Propiedades_SF_1947_Propietarios y tierras fiscales Explotaciones', 'Propiedades_SF_1947_Propietarios y tierras fiscales Has': 'Propiedades_SF_1947_Propietarios y tierras fiscales Has', 'Propiedades_SF_1947_Otras formas y sin determinar Explotaciones': 'Propiedades_SF_1947_Otras formas y sin determinar Explotaciones', 'Propiedades_SF_1947_Otras formas y sin determinar Has': 'Propiedades_SF_1947_Otras formas y sin determinar Has', 'Propiedades_SF_1947_field_24': 'Propiedades_SF_1947_field_24', });
lyr_agro_2.set('fieldAliases', {'nam': 'nam', 'Explotacio': 'Explotacio', 'Total': 'Total', 'Superficie': 'Superficie', 'Praderas, ': 'Praderas, ', 'Cultivos P': 'Cultivos P', 'Montes y b': 'Montes y b', 'Superficie_1': 'Superficie_1', });
lyr_Departamentoscopiar_1.set('fieldImages', {'nam': 'TextEdit', 'Total': 'Range', '% urbana': 'Range', '%isra': 'TextEdit', 'Propiedades_SF_1947_Total Explotaciones': 'Range', 'Propiedades_SF_1947_Total Hectáreas': 'Range', 'Propiedades_SF_1947_Propietarios Explotaciones': 'Range', 'Propiedades_SF_1947_Propietarios Hectáreas': 'Range', 'Propiedades_SF_1947_Arrendatarios Explotaciones': 'Range', 'Propiedades_SF_1947_Arrendatarios Hectáreas': 'Range', 'Propiedades_SF_1947_Medios y tanteros Explotaciones': 'Range', 'Propiedades_SF_1947_Medios y tanteros Has.': 'Range', 'Propiedades_SF_1947_Gratuitos Explotaciones': 'Range', 'Propiedades_SF_1947_Gratuitos Has.': 'Range', 'Propiedades_SF_1947_Fiscales Explotaciones': 'Range', 'Propiedades_SF_1947_Fiscales Has.': 'Range', 'Propiedades_SF_1947_Propietarios y arrendatarios Explotaciones': 'Range', 'Propiedades_SF_1947_Propietarios y arrendatarios  Has': 'Range', 'Propiedades_SF_1947_Propietarios y medieros y tanteros Explotaciones': 'Range', 'Propiedades_SF_1947_Propietarios y medieros y tanteros Has': 'Range', 'Propiedades_SF_1947_Propietarios y ocupantes gratuitos explotaciones': 'Range', 'Propiedades_SF_1947_Propietarios y ocupantes gratuitos Has.': 'Range', 'Propiedades_SF_1947_Propietarios y tierras fiscales Explotaciones': 'Range', 'Propiedades_SF_1947_Propietarios y tierras fiscales Has': 'Range', 'Propiedades_SF_1947_Otras formas y sin determinar Explotaciones': 'TextEdit', 'Propiedades_SF_1947_Otras formas y sin determinar Has': 'Range', 'Propiedades_SF_1947_field_24': 'TextEdit', });
lyr_agro_2.set('fieldImages', {'nam': 'TextEdit', 'Explotacio': 'TextEdit', 'Total': 'TextEdit', 'Superficie': 'TextEdit', 'Praderas, ': 'TextEdit', 'Cultivos P': 'TextEdit', 'Montes y b': 'TextEdit', 'Superficie_1': 'TextEdit', });
lyr_Departamentoscopiar_1.set('fieldLabels', {'nam': 'no label', 'Total': 'no label', '% urbana': 'no label', '%isra': 'no label', 'Propiedades_SF_1947_Total Explotaciones': 'no label', 'Propiedades_SF_1947_Total Hectáreas': 'no label', 'Propiedades_SF_1947_Propietarios Explotaciones': 'no label', 'Propiedades_SF_1947_Propietarios Hectáreas': 'no label', 'Propiedades_SF_1947_Arrendatarios Explotaciones': 'no label', 'Propiedades_SF_1947_Arrendatarios Hectáreas': 'no label', 'Propiedades_SF_1947_Medios y tanteros Explotaciones': 'no label', 'Propiedades_SF_1947_Medios y tanteros Has.': 'no label', 'Propiedades_SF_1947_Gratuitos Explotaciones': 'no label', 'Propiedades_SF_1947_Gratuitos Has.': 'no label', 'Propiedades_SF_1947_Fiscales Explotaciones': 'no label', 'Propiedades_SF_1947_Fiscales Has.': 'no label', 'Propiedades_SF_1947_Propietarios y arrendatarios Explotaciones': 'no label', 'Propiedades_SF_1947_Propietarios y arrendatarios  Has': 'no label', 'Propiedades_SF_1947_Propietarios y medieros y tanteros Explotaciones': 'no label', 'Propiedades_SF_1947_Propietarios y medieros y tanteros Has': 'no label', 'Propiedades_SF_1947_Propietarios y ocupantes gratuitos explotaciones': 'no label', 'Propiedades_SF_1947_Propietarios y ocupantes gratuitos Has.': 'no label', 'Propiedades_SF_1947_Propietarios y tierras fiscales Explotaciones': 'no label', 'Propiedades_SF_1947_Propietarios y tierras fiscales Has': 'no label', 'Propiedades_SF_1947_Otras formas y sin determinar Explotaciones': 'no label', 'Propiedades_SF_1947_Otras formas y sin determinar Has': 'no label', 'Propiedades_SF_1947_field_24': 'no label', });
lyr_agro_2.set('fieldLabels', {'nam': 'inline label - always visible', 'Explotacio': 'inline label - always visible', 'Total': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Praderas, ': 'inline label - always visible', 'Cultivos P': 'inline label - always visible', 'Montes y b': 'inline label - always visible', 'Superficie_1': 'inline label - always visible', });
lyr_agro_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});