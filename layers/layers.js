ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2154").setExtent([-562600.490109, 6041559.677181, 685816.140534, 6737731.858429]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_COMMUNE_1 = new ol.format.GeoJSON();
var features_COMMUNE_1 = format_COMMUNE_1.readFeatures(json_COMMUNE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_COMMUNE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNE_1.addFeatures(features_COMMUNE_1);
var lyr_COMMUNE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMMUNE_1, 
                style: style_COMMUNE_1,
                interactive: true,
    title: 'COMMUNE<br />\
    <img src="styles/legend/COMMUNE_1_0.png" /> Conseil élus au premier tour<br />\
    <img src="styles/legend/COMMUNE_1_1.png" /> Conseil élus au second tour<br />\
    <img src="styles/legend/COMMUNE_1_2.png" /> Résultat non disponible<br />\
    <img src="styles/legend/COMMUNE_1_3.png" /> <br />'
        });
var format_epcicom2019_region_2 = new ol.format.GeoJSON();
var features_epcicom2019_region_2 = format_epcicom2019_region_2.readFeatures(json_epcicom2019_region_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_epcicom2019_region_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_epcicom2019_region_2.addFeatures(features_epcicom2019_region_2);
var lyr_epcicom2019_region_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_epcicom2019_region_2, 
                style: style_epcicom2019_region_2,
                interactive: true,
                title: '<img src="styles/legend/epcicom2019_region_2.png" /> epcicom2019_region'
            });
var format_LIMITE_DEPARTEMENT_3 = new ol.format.GeoJSON();
var features_LIMITE_DEPARTEMENT_3 = format_LIMITE_DEPARTEMENT_3.readFeatures(json_LIMITE_DEPARTEMENT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_LIMITE_DEPARTEMENT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITE_DEPARTEMENT_3.addFeatures(features_LIMITE_DEPARTEMENT_3);
var lyr_LIMITE_DEPARTEMENT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITE_DEPARTEMENT_3, 
                style: style_LIMITE_DEPARTEMENT_3,
                interactive: true,
                title: '<img src="styles/legend/LIMITE_DEPARTEMENT_3.png" /> LIMITE_DEPARTEMENT'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_COMMUNE_1.setVisible(true);lyr_epcicom2019_region_2.setVisible(true);lyr_LIMITE_DEPARTEMENT_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_COMMUNE_1,lyr_epcicom2019_region_2,lyr_LIMITE_DEPARTEMENT_3];
lyr_COMMUNE_1.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', 'ElectionDataFinal_V3_CODE_DEPT': 'ElectionDataFinal_V3_CODE_DEPT', 'ElectionDataFinal_V3_CODE_REG': 'ElectionDataFinal_V3_CODE_REG', 'ElectionDataFinal_V3_EPCI': 'ElectionDataFinal_V3_EPCI', 'ElectionDataFinal_V3_LIBEPCI': 'ElectionDataFinal_V3_LIBEPCI', 'ElectionDataFinal_V3_NOM_COM': 'ElectionDataFinal_V3_NOM_COM', 'ElectionDataFinal_V3_ELEC': 'ElectionDataFinal_V3_ELEC', });
lyr_epcicom2019_region_2.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REGION': 'NOM_REGION', 'insee_2019': 'insee_2019', 'code_com': 'code_com', 'nom_com_20': 'nom_com_20', 'Pop': 'Pop', 'CT': 'CT', 'AR': 'AR', 'dept': 'dept', 'siren': 'siren', 'raison_soc': 'raison_soc', 'NJ': 'NJ', 'dep_com': 'dep_com', 'insee': 'insee', 'siren_memb': 'siren_memb', 'nom_membre': 'nom_membre', });
lyr_LIMITE_DEPARTEMENT_3.set('fieldAliases', {'NATURE': 'NATURE', 'ID_GEOFLA': 'ID_GEOFLA', });
lyr_COMMUNE_1.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', 'ElectionDataFinal_V3_CODE_DEPT': 'TextEdit', 'ElectionDataFinal_V3_CODE_REG': 'TextEdit', 'ElectionDataFinal_V3_EPCI': 'TextEdit', 'ElectionDataFinal_V3_LIBEPCI': 'TextEdit', 'ElectionDataFinal_V3_NOM_COM': 'TextEdit', 'ElectionDataFinal_V3_ELEC': 'TextEdit', });
lyr_epcicom2019_region_2.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REGION': 'TextEdit', 'insee_2019': 'TextEdit', 'code_com': 'TextEdit', 'nom_com_20': 'TextEdit', 'Pop': 'TextEdit', 'CT': 'TextEdit', 'AR': 'TextEdit', 'dept': 'TextEdit', 'siren': 'TextEdit', 'raison_soc': 'TextEdit', 'NJ': 'TextEdit', 'dep_com': 'TextEdit', 'insee': 'TextEdit', 'siren_memb': 'TextEdit', 'nom_membre': 'TextEdit', });
lyr_LIMITE_DEPARTEMENT_3.set('fieldImages', {'NATURE': 'TextEdit', 'ID_GEOFLA': 'TextEdit', });
lyr_COMMUNE_1.set('fieldLabels', {'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', 'ElectionDataFinal_V3_CODE_DEPT': 'no label', 'ElectionDataFinal_V3_CODE_REG': 'no label', 'ElectionDataFinal_V3_EPCI': 'no label', 'ElectionDataFinal_V3_LIBEPCI': 'no label', 'ElectionDataFinal_V3_NOM_COM': 'no label', 'ElectionDataFinal_V3_ELEC': 'no label', });
lyr_epcicom2019_region_2.set('fieldLabels', {'ID_GEOFLA': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REGION': 'no label', 'insee_2019': 'no label', 'code_com': 'no label', 'nom_com_20': 'no label', 'Pop': 'no label', 'CT': 'no label', 'AR': 'no label', 'dept': 'no label', 'siren': 'no label', 'raison_soc': 'no label', 'NJ': 'no label', 'dep_com': 'no label', 'insee': 'no label', 'siren_memb': 'no label', 'nom_membre': 'no label', });
lyr_LIMITE_DEPARTEMENT_3.set('fieldLabels', {'NATURE': 'no label', 'ID_GEOFLA': 'no label', });
lyr_LIMITE_DEPARTEMENT_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});