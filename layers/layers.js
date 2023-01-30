var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

    var projection_Topografisknorgeskart4_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_Topografisknorgeskart4_1 = projection_Topografisknorgeskart4_1.getExtent();
    var size_Topografisknorgeskart4_1 = ol.extent.getWidth(projectionExtent_Topografisknorgeskart4_1) / 256;
    var resolutions_Topografisknorgeskart4_1 = new Array(14);
    var matrixIds_Topografisknorgeskart4_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Topografisknorgeskart4_1[z] = size_Topografisknorgeskart4_1 / Math.pow(2, z);
        matrixIds_Topografisknorgeskart4_1[z] = z;
    }
    var lyr_Topografisknorgeskart4_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?Version=1.0.0&service=wmts&request=getcapabilities",
    attributions: ' ',
                                "layer": "topo4",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Topografisknorgeskart4_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Topografisknorgeskart4_1),
                resolutions: resolutions_Topografisknorgeskart4_1,
                matrixIds: matrixIds_Topografisknorgeskart4_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Topografisk norgeskart 4",
                            opacity: 1.0,
                            
                            
                          });
var format_Andrefriluftsomrde_2 = new ol.format.GeoJSON();
var features_Andrefriluftsomrde_2 = format_Andrefriluftsomrde_2.readFeatures(json_Andrefriluftsomrde_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Andrefriluftsomrde_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Andrefriluftsomrde_2.addFeatures(features_Andrefriluftsomrde_2);
var lyr_Andrefriluftsomrde_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Andrefriluftsomrde_2, 
                style: style_Andrefriluftsomrde_2,
                interactive: true,
    title: 'Andre friluftsområde<br />\
    <img src="styles/legend/Andrefriluftsomrde_2_0.png" /> Andre friluftsområde<br />'
        });
var format_Grnnkorridor_3 = new ol.format.GeoJSON();
var features_Grnnkorridor_3 = format_Grnnkorridor_3.readFeatures(json_Grnnkorridor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grnnkorridor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grnnkorridor_3.addFeatures(features_Grnnkorridor_3);
var lyr_Grnnkorridor_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Grnnkorridor_3, 
                style: style_Grnnkorridor_3,
                interactive: true,
    title: 'Grønnkorridor<br />\
    <img src="styles/legend/Grnnkorridor_3_0.png" /> Gønnkorridor<br />'
        });
var format_Leikrekreasjon_4 = new ol.format.GeoJSON();
var features_Leikrekreasjon_4 = format_Leikrekreasjon_4.readFeatures(json_Leikrekreasjon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Leikrekreasjon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Leikrekreasjon_4.addFeatures(features_Leikrekreasjon_4);
var lyr_Leikrekreasjon_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Leikrekreasjon_4, 
                style: style_Leikrekreasjon_4,
                interactive: true,
    title: 'Leik/rekreasjon<br />\
    <img src="styles/legend/Leikrekreasjon_4_0.png" /> Leik/rekreasjon<br />'
        });
var format_Nrtutterreng_5 = new ol.format.GeoJSON();
var features_Nrtutterreng_5 = format_Nrtutterreng_5.readFeatures(json_Nrtutterreng_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nrtutterreng_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nrtutterreng_5.addFeatures(features_Nrtutterreng_5);
var lyr_Nrtutterreng_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nrtutterreng_5, 
                style: style_Nrtutterreng_5,
                interactive: true,
    title: 'Nærtutterreng<br />\
    <img src="styles/legend/Nrtutterreng_5_0.png" /> Nærturterreng<br />'
        });
var format_Srlegkvalitetsomrde_6 = new ol.format.GeoJSON();
var features_Srlegkvalitetsomrde_6 = format_Srlegkvalitetsomrde_6.readFeatures(json_Srlegkvalitetsomrde_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Srlegkvalitetsomrde_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Srlegkvalitetsomrde_6.addFeatures(features_Srlegkvalitetsomrde_6);
var lyr_Srlegkvalitetsomrde_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Srlegkvalitetsomrde_6, 
                style: style_Srlegkvalitetsomrde_6,
                interactive: true,
    title: 'Særleg kvalitetsområde<br />\
    <img src="styles/legend/Srlegkvalitetsomrde_6_0.png" /> Særleg kvalitetsområde<br />'
        });
var format_Strandsonemedtilhyrandesjogvassdrag_7 = new ol.format.GeoJSON();
var features_Strandsonemedtilhyrandesjogvassdrag_7 = format_Strandsonemedtilhyrandesjogvassdrag_7.readFeatures(json_Strandsonemedtilhyrandesjogvassdrag_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandsonemedtilhyrandesjogvassdrag_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandsonemedtilhyrandesjogvassdrag_7.addFeatures(features_Strandsonemedtilhyrandesjogvassdrag_7);
var lyr_Strandsonemedtilhyrandesjogvassdrag_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Strandsonemedtilhyrandesjogvassdrag_7, 
                style: style_Strandsonemedtilhyrandesjogvassdrag_7,
                interactive: true,
    title: 'Strandsone med tilhøyrande sjø og vassdrag<br />\
    <img src="styles/legend/Strandsonemedtilhyrandesjogvassdrag_7_0.png" /> Strandsone med tilhøyrande sjø og vassdrag<br />'
        });
var format_Turomrdemedtilrettelegging_8 = new ol.format.GeoJSON();
var features_Turomrdemedtilrettelegging_8 = format_Turomrdemedtilrettelegging_8.readFeatures(json_Turomrdemedtilrettelegging_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Turomrdemedtilrettelegging_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Turomrdemedtilrettelegging_8.addFeatures(features_Turomrdemedtilrettelegging_8);
var lyr_Turomrdemedtilrettelegging_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Turomrdemedtilrettelegging_8, 
                style: style_Turomrdemedtilrettelegging_8,
                interactive: true,
    title: 'Turområde med tilrettelegging<br />\
    <img src="styles/legend/Turomrdemedtilrettelegging_8_0.png" /> Stort turområde med tilrettelegging<br />'
        });
var format_Turomrdeutantilrettelegging_9 = new ol.format.GeoJSON();
var features_Turomrdeutantilrettelegging_9 = format_Turomrdeutantilrettelegging_9.readFeatures(json_Turomrdeutantilrettelegging_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Turomrdeutantilrettelegging_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Turomrdeutantilrettelegging_9.addFeatures(features_Turomrdeutantilrettelegging_9);
var lyr_Turomrdeutantilrettelegging_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Turomrdeutantilrettelegging_9, 
                style: style_Turomrdeutantilrettelegging_9,
                interactive: true,
    title: 'Turområde utan tilrettelegging<br />\
    <img src="styles/legend/Turomrdeutantilrettelegging_9_0.png" /> Stort turområde utan tilrettelegging<br />'
        });
var format_Utfartsomrde_10 = new ol.format.GeoJSON();
var features_Utfartsomrde_10 = format_Utfartsomrde_10.readFeatures(json_Utfartsomrde_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Utfartsomrde_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Utfartsomrde_10.addFeatures(features_Utfartsomrde_10);
var lyr_Utfartsomrde_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Utfartsomrde_10, 
                style: style_Utfartsomrde_10,
                interactive: true,
    title: 'Utfartsområde<br />\
    <img src="styles/legend/Utfartsomrde_10_0.png" /> Utfartsområde<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Topografisknorgeskart4_1.setVisible(true);lyr_Andrefriluftsomrde_2.setVisible(true);lyr_Grnnkorridor_3.setVisible(true);lyr_Leikrekreasjon_4.setVisible(true);lyr_Nrtutterreng_5.setVisible(true);lyr_Srlegkvalitetsomrde_6.setVisible(true);lyr_Strandsonemedtilhyrandesjogvassdrag_7.setVisible(true);lyr_Turomrdemedtilrettelegging_8.setVisible(true);lyr_Turomrdeutantilrettelegging_9.setVisible(true);lyr_Utfartsomrde_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Topografisknorgeskart4_1,lyr_Andrefriluftsomrde_2,lyr_Grnnkorridor_3,lyr_Leikrekreasjon_4,lyr_Nrtutterreng_5,lyr_Srlegkvalitetsomrde_6,lyr_Strandsonemedtilhyrandesjogvassdrag_7,lyr_Turomrdemedtilrettelegging_8,lyr_Turomrdeutantilrettelegging_9,lyr_Utfartsomrde_10];
lyr_Andrefriluftsomrde_2.set('fieldAliases', {'fid': 'fid', 'FRITYPE': 'FRITYPE', 'FRIVERDI': 'FRIVERDI', 'FRILUFTOPP': 'FRILUFTOPP', 'KARTLAGTST': 'KARTLAGTST', 'VERDSETTIN': 'VERDSETTIN', 'VERDSETT00': 'VERDSETT00', 'VERDSETT01': 'VERDSETT01', 'VERDSETT02': 'VERDSETT02', 'VERDSETT03': 'VERDSETT03', 'VERDSETT04': 'VERDSETT04', 'VERDSETT05': 'VERDSETT05', 'VERDSETT06': 'VERDSETT06', 'VERDSETT07': 'VERDSETT07', 'VERDSETT08': 'VERDSETT08', 'VERDSETT09': 'VERDSETT09', 'VERDSETT10': 'VERDSETT10', 'VERDSETT11': 'VERDSETT11', 'ID': 'ID', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'OMRÅDENAV': 'OMRÅDENAV', 'GEODATAEIE': 'GEODATAEIE', 'DATAFANGST': 'DATAFANGST', 'NØYAKTIGH': 'NØYAKTIGH', 'KOMM': 'KOMM', 'INFORMASJO': 'INFORMASJO', 'FAKTAARK': 'FAKTAARK', 'Omr.nr.': 'Omr.nr.', 'Alle Områ': 'Alle Områ', });
lyr_Grnnkorridor_3.set('fieldAliases', {'fid': 'fid', 'FRITYPE': 'FRITYPE', 'FRIVERDI': 'FRIVERDI', 'FRILUFTOPP': 'FRILUFTOPP', 'KARTLAGTST': 'KARTLAGTST', 'VERDSETTIN': 'VERDSETTIN', 'VERDSETT00': 'VERDSETT00', 'VERDSETT01': 'VERDSETT01', 'VERDSETT02': 'VERDSETT02', 'VERDSETT03': 'VERDSETT03', 'VERDSETT04': 'VERDSETT04', 'VERDSETT05': 'VERDSETT05', 'VERDSETT06': 'VERDSETT06', 'VERDSETT07': 'VERDSETT07', 'VERDSETT08': 'VERDSETT08', 'VERDSETT09': 'VERDSETT09', 'VERDSETT10': 'VERDSETT10', 'VERDSETT11': 'VERDSETT11', 'ID': 'ID', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'OMRÅDENAV': 'OMRÅDENAV', 'GEODATAEIE': 'GEODATAEIE', 'DATAFANGST': 'DATAFANGST', 'NØYAKTIGH': 'NØYAKTIGH', 'KOMM': 'KOMM', 'INFORMASJO': 'INFORMASJO', 'FAKTAARK': 'FAKTAARK', 'Omr.nr.': 'Omr.nr.', 'Alle Områ': 'Alle Områ', });
lyr_Leikrekreasjon_4.set('fieldAliases', {'fid': 'fid', 'FRITYPE': 'FRITYPE', 'FRIVERDI': 'FRIVERDI', 'FRILUFTOPP': 'FRILUFTOPP', 'KARTLAGTST': 'KARTLAGTST', 'VERDSETTIN': 'VERDSETTIN', 'VERDSETT00': 'VERDSETT00', 'VERDSETT01': 'VERDSETT01', 'VERDSETT02': 'VERDSETT02', 'VERDSETT03': 'VERDSETT03', 'VERDSETT04': 'VERDSETT04', 'VERDSETT05': 'VERDSETT05', 'VERDSETT06': 'VERDSETT06', 'VERDSETT07': 'VERDSETT07', 'VERDSETT08': 'VERDSETT08', 'VERDSETT09': 'VERDSETT09', 'VERDSETT10': 'VERDSETT10', 'VERDSETT11': 'VERDSETT11', 'ID': 'ID', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'OMRÅDENAV': 'OMRÅDENAV', 'GEODATAEIE': 'GEODATAEIE', 'DATAFANGST': 'DATAFANGST', 'NØYAKTIGH': 'NØYAKTIGH', 'KOMM': 'KOMM', 'INFORMASJO': 'INFORMASJO', 'FAKTAARK': 'FAKTAARK', 'Omr.nr.': 'Omr.nr.', 'Alle Områ': 'Alle Områ', });
lyr_Nrtutterreng_5.set('fieldAliases', {'fid': 'fid', 'FRITYPE': 'FRITYPE', 'FRIVERDI': 'FRIVERDI', 'FRILUFTOPP': 'FRILUFTOPP', 'KARTLAGTST': 'KARTLAGTST', 'VERDSETTIN': 'VERDSETTIN', 'VERDSETT00': 'VERDSETT00', 'VERDSETT01': 'VERDSETT01', 'VERDSETT02': 'VERDSETT02', 'VERDSETT03': 'VERDSETT03', 'VERDSETT04': 'VERDSETT04', 'VERDSETT05': 'VERDSETT05', 'VERDSETT06': 'VERDSETT06', 'VERDSETT07': 'VERDSETT07', 'VERDSETT08': 'VERDSETT08', 'VERDSETT09': 'VERDSETT09', 'VERDSETT10': 'VERDSETT10', 'VERDSETT11': 'VERDSETT11', 'ID': 'ID', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'OMRÅDENAV': 'OMRÅDENAV', 'GEODATAEIE': 'GEODATAEIE', 'DATAFANGST': 'DATAFANGST', 'NØYAKTIGH': 'NØYAKTIGH', 'KOMM': 'KOMM', 'INFORMASJO': 'INFORMASJO', 'FAKTAARK': 'FAKTAARK', 'Omr.nr.': 'Omr.nr.', 'Alle Områ': 'Alle Områ', });
lyr_Srlegkvalitetsomrde_6.set('fieldAliases', {'fid': 'fid', 'FRITYPE': 'FRITYPE', 'FRIVERDI': 'FRIVERDI', 'FRILUFTOPP': 'FRILUFTOPP', 'KARTLAGTST': 'KARTLAGTST', 'VERDSETTIN': 'VERDSETTIN', 'VERDSETT00': 'VERDSETT00', 'VERDSETT01': 'VERDSETT01', 'VERDSETT02': 'VERDSETT02', 'VERDSETT03': 'VERDSETT03', 'VERDSETT04': 'VERDSETT04', 'VERDSETT05': 'VERDSETT05', 'VERDSETT06': 'VERDSETT06', 'VERDSETT07': 'VERDSETT07', 'VERDSETT08': 'VERDSETT08', 'VERDSETT09': 'VERDSETT09', 'VERDSETT10': 'VERDSETT10', 'VERDSETT11': 'VERDSETT11', 'ID': 'ID', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'OMRÅDENAV': 'OMRÅDENAV', 'GEODATAEIE': 'GEODATAEIE', 'DATAFANGST': 'DATAFANGST', 'NØYAKTIGH': 'NØYAKTIGH', 'KOMM': 'KOMM', 'INFORMASJO': 'INFORMASJO', 'FAKTAARK': 'FAKTAARK', 'Omr.nr.': 'Omr.nr.', 'Alle Områ': 'Alle Områ', });
lyr_Strandsonemedtilhyrandesjogvassdrag_7.set('fieldAliases', {'fid': 'fid', 'FRITYPE': 'FRITYPE', 'FRIVERDI': 'FRIVERDI', 'FRILUFTOPP': 'FRILUFTOPP', 'KARTLAGTST': 'KARTLAGTST', 'VERDSETTIN': 'VERDSETTIN', 'VERDSETT00': 'VERDSETT00', 'VERDSETT01': 'VERDSETT01', 'VERDSETT02': 'VERDSETT02', 'VERDSETT03': 'VERDSETT03', 'VERDSETT04': 'VERDSETT04', 'VERDSETT05': 'VERDSETT05', 'VERDSETT06': 'VERDSETT06', 'VERDSETT07': 'VERDSETT07', 'VERDSETT08': 'VERDSETT08', 'VERDSETT09': 'VERDSETT09', 'VERDSETT10': 'VERDSETT10', 'VERDSETT11': 'VERDSETT11', 'ID': 'ID', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'OMRÅDENAV': 'OMRÅDENAV', 'GEODATAEIE': 'GEODATAEIE', 'DATAFANGST': 'DATAFANGST', 'NØYAKTIGH': 'NØYAKTIGH', 'KOMM': 'KOMM', 'INFORMASJO': 'INFORMASJO', 'FAKTAARK': 'FAKTAARK', 'Omr.nr.': 'Omr.nr.', 'Alle Områ': 'Alle Områ', });
lyr_Turomrdemedtilrettelegging_8.set('fieldAliases', {'fid': 'fid', 'FRITYPE': 'FRITYPE', 'FRIVERDI': 'FRIVERDI', 'FRILUFTOPP': 'FRILUFTOPP', 'KARTLAGTST': 'KARTLAGTST', 'VERDSETTIN': 'VERDSETTIN', 'VERDSETT00': 'VERDSETT00', 'VERDSETT01': 'VERDSETT01', 'VERDSETT02': 'VERDSETT02', 'VERDSETT03': 'VERDSETT03', 'VERDSETT04': 'VERDSETT04', 'VERDSETT05': 'VERDSETT05', 'VERDSETT06': 'VERDSETT06', 'VERDSETT07': 'VERDSETT07', 'VERDSETT08': 'VERDSETT08', 'VERDSETT09': 'VERDSETT09', 'VERDSETT10': 'VERDSETT10', 'VERDSETT11': 'VERDSETT11', 'ID': 'ID', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'OMRÅDENAV': 'OMRÅDENAV', 'GEODATAEIE': 'GEODATAEIE', 'DATAFANGST': 'DATAFANGST', 'NØYAKTIGH': 'NØYAKTIGH', 'KOMM': 'KOMM', 'INFORMASJO': 'INFORMASJO', 'FAKTAARK': 'FAKTAARK', 'Omr.nr.': 'Omr.nr.', 'Alle Områ': 'Alle Områ', });
lyr_Turomrdeutantilrettelegging_9.set('fieldAliases', {'fid': 'fid', 'FRITYPE': 'FRITYPE', 'FRIVERDI': 'FRIVERDI', 'FRILUFTOPP': 'FRILUFTOPP', 'KARTLAGTST': 'KARTLAGTST', 'VERDSETTIN': 'VERDSETTIN', 'VERDSETT00': 'VERDSETT00', 'VERDSETT01': 'VERDSETT01', 'VERDSETT02': 'VERDSETT02', 'VERDSETT03': 'VERDSETT03', 'VERDSETT04': 'VERDSETT04', 'VERDSETT05': 'VERDSETT05', 'VERDSETT06': 'VERDSETT06', 'VERDSETT07': 'VERDSETT07', 'VERDSETT08': 'VERDSETT08', 'VERDSETT09': 'VERDSETT09', 'VERDSETT10': 'VERDSETT10', 'VERDSETT11': 'VERDSETT11', 'ID': 'ID', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'OMRÅDENAV': 'OMRÅDENAV', 'GEODATAEIE': 'GEODATAEIE', 'DATAFANGST': 'DATAFANGST', 'NØYAKTIGH': 'NØYAKTIGH', 'KOMM': 'KOMM', 'INFORMASJO': 'INFORMASJO', 'FAKTAARK': 'FAKTAARK', 'Omr.nr.': 'Omr.nr.', 'Alle Områ': 'Alle Områ', });
lyr_Utfartsomrde_10.set('fieldAliases', {'fid': 'fid', 'FRITYPE': 'FRITYPE', 'FRIVERDI': 'FRIVERDI', 'FRILUFTOPP': 'FRILUFTOPP', 'KARTLAGTST': 'KARTLAGTST', 'VERDSETTIN': 'VERDSETTIN', 'VERDSETT00': 'VERDSETT00', 'VERDSETT01': 'VERDSETT01', 'VERDSETT02': 'VERDSETT02', 'VERDSETT03': 'VERDSETT03', 'VERDSETT04': 'VERDSETT04', 'VERDSETT05': 'VERDSETT05', 'VERDSETT06': 'VERDSETT06', 'VERDSETT07': 'VERDSETT07', 'VERDSETT08': 'VERDSETT08', 'VERDSETT09': 'VERDSETT09', 'VERDSETT10': 'VERDSETT10', 'VERDSETT11': 'VERDSETT11', 'ID': 'ID', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'OMRÅDENAV': 'OMRÅDENAV', 'GEODATAEIE': 'GEODATAEIE', 'DATAFANGST': 'DATAFANGST', 'NØYAKTIGH': 'NØYAKTIGH', 'KOMM': 'KOMM', 'INFORMASJO': 'INFORMASJO', 'FAKTAARK': 'FAKTAARK', 'Omr.nr.': 'Omr.nr.', 'Alle Områ': 'Alle Områ', });
lyr_Andrefriluftsomrde_2.set('fieldImages', {'fid': 'TextEdit', 'FRITYPE': 'TextEdit', 'FRIVERDI': 'ValueMap', 'FRILUFTOPP': 'TextEdit', 'KARTLAGTST': 'Hidden', 'VERDSETTIN': 'Hidden', 'VERDSETT00': 'Hidden', 'VERDSETT01': 'Hidden', 'VERDSETT02': 'Hidden', 'VERDSETT03': 'Hidden', 'VERDSETT04': 'Hidden', 'VERDSETT05': 'Hidden', 'VERDSETT06': 'Hidden', 'VERDSETT07': 'Hidden', 'VERDSETT08': 'Hidden', 'VERDSETT09': 'Hidden', 'VERDSETT10': 'Hidden', 'VERDSETT11': 'Hidden', 'ID': 'TextEdit', 'IDENT_LOKA': 'Hidden', 'IDENT_NAVN': 'Hidden', 'OMRÅDENAV': 'TextEdit', 'GEODATAEIE': 'TextEdit', 'DATAFANGST': 'TextEdit', 'NØYAKTIGH': 'TextEdit', 'KOMM': 'TextEdit', 'INFORMASJO': 'TextEdit', 'FAKTAARK': 'TextEdit', 'Omr.nr.': 'TextEdit', 'Alle Områ': 'TextEdit', });
lyr_Grnnkorridor_3.set('fieldImages', {'fid': 'TextEdit', 'FRITYPE': 'TextEdit', 'FRIVERDI': 'ValueMap', 'FRILUFTOPP': 'TextEdit', 'KARTLAGTST': 'Hidden', 'VERDSETTIN': 'Hidden', 'VERDSETT00': 'Hidden', 'VERDSETT01': 'Hidden', 'VERDSETT02': 'Hidden', 'VERDSETT03': 'Hidden', 'VERDSETT04': 'Hidden', 'VERDSETT05': 'Hidden', 'VERDSETT06': 'Hidden', 'VERDSETT07': 'Hidden', 'VERDSETT08': 'Hidden', 'VERDSETT09': 'Hidden', 'VERDSETT10': 'Hidden', 'VERDSETT11': 'Hidden', 'ID': 'TextEdit', 'IDENT_LOKA': 'Hidden', 'IDENT_NAVN': 'Hidden', 'OMRÅDENAV': 'TextEdit', 'GEODATAEIE': 'TextEdit', 'DATAFANGST': 'TextEdit', 'NØYAKTIGH': 'TextEdit', 'KOMM': 'TextEdit', 'INFORMASJO': 'TextEdit', 'FAKTAARK': 'TextEdit', 'Omr.nr.': 'TextEdit', 'Alle Områ': 'TextEdit', });
lyr_Leikrekreasjon_4.set('fieldImages', {'fid': 'TextEdit', 'FRITYPE': 'TextEdit', 'FRIVERDI': 'ValueMap', 'FRILUFTOPP': 'TextEdit', 'KARTLAGTST': 'Hidden', 'VERDSETTIN': 'Hidden', 'VERDSETT00': 'Hidden', 'VERDSETT01': 'Hidden', 'VERDSETT02': 'Hidden', 'VERDSETT03': 'Hidden', 'VERDSETT04': 'Hidden', 'VERDSETT05': 'Hidden', 'VERDSETT06': 'Hidden', 'VERDSETT07': 'Hidden', 'VERDSETT08': 'Hidden', 'VERDSETT09': 'Hidden', 'VERDSETT10': 'Hidden', 'VERDSETT11': 'Hidden', 'ID': 'TextEdit', 'IDENT_LOKA': 'Hidden', 'IDENT_NAVN': 'Hidden', 'OMRÅDENAV': 'TextEdit', 'GEODATAEIE': 'TextEdit', 'DATAFANGST': 'TextEdit', 'NØYAKTIGH': 'TextEdit', 'KOMM': 'TextEdit', 'INFORMASJO': 'TextEdit', 'FAKTAARK': 'TextEdit', 'Omr.nr.': 'TextEdit', 'Alle Områ': 'TextEdit', });
lyr_Nrtutterreng_5.set('fieldImages', {'fid': 'TextEdit', 'FRITYPE': 'TextEdit', 'FRIVERDI': 'ValueMap', 'FRILUFTOPP': 'TextEdit', 'KARTLAGTST': 'Hidden', 'VERDSETTIN': 'Hidden', 'VERDSETT00': 'Hidden', 'VERDSETT01': 'Hidden', 'VERDSETT02': 'Hidden', 'VERDSETT03': 'Hidden', 'VERDSETT04': 'Hidden', 'VERDSETT05': 'Hidden', 'VERDSETT06': 'Hidden', 'VERDSETT07': 'Hidden', 'VERDSETT08': 'Hidden', 'VERDSETT09': 'Hidden', 'VERDSETT10': 'Hidden', 'VERDSETT11': 'Hidden', 'ID': 'TextEdit', 'IDENT_LOKA': 'Hidden', 'IDENT_NAVN': 'Hidden', 'OMRÅDENAV': 'TextEdit', 'GEODATAEIE': 'TextEdit', 'DATAFANGST': 'TextEdit', 'NØYAKTIGH': 'TextEdit', 'KOMM': 'TextEdit', 'INFORMASJO': 'TextEdit', 'FAKTAARK': 'TextEdit', 'Omr.nr.': 'TextEdit', 'Alle Områ': 'TextEdit', });
lyr_Srlegkvalitetsomrde_6.set('fieldImages', {'fid': 'TextEdit', 'FRITYPE': 'TextEdit', 'FRIVERDI': 'ValueMap', 'FRILUFTOPP': 'TextEdit', 'KARTLAGTST': 'Hidden', 'VERDSETTIN': 'Hidden', 'VERDSETT00': 'Hidden', 'VERDSETT01': 'Hidden', 'VERDSETT02': 'Hidden', 'VERDSETT03': 'Hidden', 'VERDSETT04': 'Hidden', 'VERDSETT05': 'Hidden', 'VERDSETT06': 'Hidden', 'VERDSETT07': 'Hidden', 'VERDSETT08': 'Hidden', 'VERDSETT09': 'Hidden', 'VERDSETT10': 'Hidden', 'VERDSETT11': 'Hidden', 'ID': 'TextEdit', 'IDENT_LOKA': 'Hidden', 'IDENT_NAVN': 'Hidden', 'OMRÅDENAV': 'TextEdit', 'GEODATAEIE': 'TextEdit', 'DATAFANGST': 'TextEdit', 'NØYAKTIGH': 'TextEdit', 'KOMM': 'TextEdit', 'INFORMASJO': 'TextEdit', 'FAKTAARK': 'TextEdit', 'Omr.nr.': 'TextEdit', 'Alle Områ': 'TextEdit', });
lyr_Strandsonemedtilhyrandesjogvassdrag_7.set('fieldImages', {'fid': 'TextEdit', 'FRITYPE': 'TextEdit', 'FRIVERDI': 'ValueMap', 'FRILUFTOPP': 'TextEdit', 'KARTLAGTST': 'Hidden', 'VERDSETTIN': 'Hidden', 'VERDSETT00': 'Hidden', 'VERDSETT01': 'Hidden', 'VERDSETT02': 'Hidden', 'VERDSETT03': 'Hidden', 'VERDSETT04': 'Hidden', 'VERDSETT05': 'Hidden', 'VERDSETT06': 'Hidden', 'VERDSETT07': 'Hidden', 'VERDSETT08': 'Hidden', 'VERDSETT09': 'Hidden', 'VERDSETT10': 'Hidden', 'VERDSETT11': 'Hidden', 'ID': 'TextEdit', 'IDENT_LOKA': 'Hidden', 'IDENT_NAVN': 'Hidden', 'OMRÅDENAV': 'TextEdit', 'GEODATAEIE': 'TextEdit', 'DATAFANGST': 'TextEdit', 'NØYAKTIGH': 'TextEdit', 'KOMM': 'TextEdit', 'INFORMASJO': 'TextEdit', 'FAKTAARK': 'TextEdit', 'Omr.nr.': 'TextEdit', 'Alle Områ': 'TextEdit', });
lyr_Turomrdemedtilrettelegging_8.set('fieldImages', {'fid': 'TextEdit', 'FRITYPE': 'TextEdit', 'FRIVERDI': 'ValueMap', 'FRILUFTOPP': 'TextEdit', 'KARTLAGTST': 'Hidden', 'VERDSETTIN': 'Hidden', 'VERDSETT00': 'Hidden', 'VERDSETT01': 'Hidden', 'VERDSETT02': 'Hidden', 'VERDSETT03': 'Hidden', 'VERDSETT04': 'Hidden', 'VERDSETT05': 'Hidden', 'VERDSETT06': 'Hidden', 'VERDSETT07': 'Hidden', 'VERDSETT08': 'Hidden', 'VERDSETT09': 'Hidden', 'VERDSETT10': 'Hidden', 'VERDSETT11': 'Hidden', 'ID': 'TextEdit', 'IDENT_LOKA': 'Hidden', 'IDENT_NAVN': 'Hidden', 'OMRÅDENAV': 'TextEdit', 'GEODATAEIE': 'TextEdit', 'DATAFANGST': 'TextEdit', 'NØYAKTIGH': 'TextEdit', 'KOMM': 'TextEdit', 'INFORMASJO': 'TextEdit', 'FAKTAARK': 'TextEdit', 'Omr.nr.': 'TextEdit', 'Alle Områ': 'TextEdit', });
lyr_Turomrdeutantilrettelegging_9.set('fieldImages', {'fid': 'TextEdit', 'FRITYPE': 'TextEdit', 'FRIVERDI': 'ValueMap', 'FRILUFTOPP': 'TextEdit', 'KARTLAGTST': 'Hidden', 'VERDSETTIN': 'Hidden', 'VERDSETT00': 'Hidden', 'VERDSETT01': 'Hidden', 'VERDSETT02': 'Hidden', 'VERDSETT03': 'Hidden', 'VERDSETT04': 'Hidden', 'VERDSETT05': 'Hidden', 'VERDSETT06': 'Hidden', 'VERDSETT07': 'Hidden', 'VERDSETT08': 'Hidden', 'VERDSETT09': 'Hidden', 'VERDSETT10': 'Hidden', 'VERDSETT11': 'Hidden', 'ID': 'TextEdit', 'IDENT_LOKA': 'Hidden', 'IDENT_NAVN': 'Hidden', 'OMRÅDENAV': 'TextEdit', 'GEODATAEIE': 'TextEdit', 'DATAFANGST': 'TextEdit', 'NØYAKTIGH': 'TextEdit', 'KOMM': 'TextEdit', 'INFORMASJO': 'TextEdit', 'FAKTAARK': 'TextEdit', 'Omr.nr.': 'TextEdit', 'Alle Områ': 'TextEdit', });
lyr_Utfartsomrde_10.set('fieldImages', {'fid': 'TextEdit', 'FRITYPE': 'TextEdit', 'FRIVERDI': 'ValueMap', 'FRILUFTOPP': 'TextEdit', 'KARTLAGTST': 'Hidden', 'VERDSETTIN': 'Hidden', 'VERDSETT00': 'Hidden', 'VERDSETT01': 'Hidden', 'VERDSETT02': 'Hidden', 'VERDSETT03': 'Hidden', 'VERDSETT04': 'Hidden', 'VERDSETT05': 'Hidden', 'VERDSETT06': 'Hidden', 'VERDSETT07': 'Hidden', 'VERDSETT08': 'Hidden', 'VERDSETT09': 'Hidden', 'VERDSETT10': 'Hidden', 'VERDSETT11': 'Hidden', 'ID': 'TextEdit', 'IDENT_LOKA': 'Hidden', 'IDENT_NAVN': 'Hidden', 'OMRÅDENAV': 'TextEdit', 'GEODATAEIE': 'TextEdit', 'DATAFANGST': 'TextEdit', 'NØYAKTIGH': 'TextEdit', 'KOMM': 'TextEdit', 'INFORMASJO': 'TextEdit', 'FAKTAARK': 'TextEdit', 'Omr.nr.': 'TextEdit', 'Alle Områ': 'TextEdit', });
lyr_Andrefriluftsomrde_2.set('fieldLabels', {'fid': 'no label', 'FRITYPE': 'header label', 'FRIVERDI': 'header label', 'FRILUFTOPP': 'no label', 'ID': 'no label', 'OMRÅDENAV': 'header label', 'GEODATAEIE': 'no label', 'DATAFANGST': 'no label', 'NØYAKTIGH': 'no label', 'KOMM': 'no label', 'INFORMASJO': 'no label', 'FAKTAARK': 'no label', 'Omr.nr.': 'header label', 'Alle Områ': 'inline label', });
lyr_Grnnkorridor_3.set('fieldLabels', {'fid': 'no label', 'FRITYPE': 'header label', 'FRIVERDI': 'header label', 'FRILUFTOPP': 'no label', 'ID': 'no label', 'OMRÅDENAV': 'header label', 'GEODATAEIE': 'no label', 'DATAFANGST': 'no label', 'NØYAKTIGH': 'no label', 'KOMM': 'no label', 'INFORMASJO': 'no label', 'FAKTAARK': 'no label', 'Omr.nr.': 'header label', 'Alle Områ': 'inline label', });
lyr_Leikrekreasjon_4.set('fieldLabels', {'fid': 'no label', 'FRITYPE': 'header label', 'FRIVERDI': 'header label', 'FRILUFTOPP': 'no label', 'ID': 'no label', 'OMRÅDENAV': 'header label', 'GEODATAEIE': 'no label', 'DATAFANGST': 'no label', 'NØYAKTIGH': 'no label', 'KOMM': 'no label', 'INFORMASJO': 'no label', 'FAKTAARK': 'no label', 'Omr.nr.': 'header label', 'Alle Områ': 'inline label', });
lyr_Nrtutterreng_5.set('fieldLabels', {'fid': 'no label', 'FRITYPE': 'header label', 'FRIVERDI': 'header label', 'FRILUFTOPP': 'no label', 'ID': 'no label', 'OMRÅDENAV': 'header label', 'GEODATAEIE': 'no label', 'DATAFANGST': 'no label', 'NØYAKTIGH': 'no label', 'KOMM': 'no label', 'INFORMASJO': 'no label', 'FAKTAARK': 'no label', 'Omr.nr.': 'header label', 'Alle Områ': 'inline label', });
lyr_Srlegkvalitetsomrde_6.set('fieldLabels', {'fid': 'no label', 'FRITYPE': 'header label', 'FRIVERDI': 'header label', 'FRILUFTOPP': 'no label', 'ID': 'no label', 'OMRÅDENAV': 'header label', 'GEODATAEIE': 'no label', 'DATAFANGST': 'no label', 'NØYAKTIGH': 'no label', 'KOMM': 'no label', 'INFORMASJO': 'no label', 'FAKTAARK': 'no label', 'Omr.nr.': 'header label', 'Alle Områ': 'inline label', });
lyr_Strandsonemedtilhyrandesjogvassdrag_7.set('fieldLabels', {'fid': 'no label', 'FRITYPE': 'header label', 'FRIVERDI': 'header label', 'FRILUFTOPP': 'no label', 'ID': 'no label', 'OMRÅDENAV': 'header label', 'GEODATAEIE': 'no label', 'DATAFANGST': 'no label', 'NØYAKTIGH': 'no label', 'KOMM': 'no label', 'INFORMASJO': 'no label', 'FAKTAARK': 'no label', 'Omr.nr.': 'header label', 'Alle Områ': 'inline label', });
lyr_Turomrdemedtilrettelegging_8.set('fieldLabels', {'fid': 'no label', 'FRITYPE': 'header label', 'FRIVERDI': 'header label', 'FRILUFTOPP': 'no label', 'ID': 'no label', 'OMRÅDENAV': 'header label', 'GEODATAEIE': 'no label', 'DATAFANGST': 'no label', 'NØYAKTIGH': 'no label', 'KOMM': 'no label', 'INFORMASJO': 'no label', 'FAKTAARK': 'no label', 'Omr.nr.': 'header label', 'Alle Områ': 'inline label', });
lyr_Turomrdeutantilrettelegging_9.set('fieldLabels', {'fid': 'no label', 'FRITYPE': 'header label', 'FRIVERDI': 'header label', 'FRILUFTOPP': 'no label', 'ID': 'no label', 'OMRÅDENAV': 'header label', 'GEODATAEIE': 'no label', 'DATAFANGST': 'no label', 'NØYAKTIGH': 'no label', 'KOMM': 'no label', 'INFORMASJO': 'no label', 'FAKTAARK': 'no label', 'Omr.nr.': 'header label', 'Alle Områ': 'inline label', });
lyr_Utfartsomrde_10.set('fieldLabels', {'fid': 'no label', 'FRITYPE': 'header label', 'FRIVERDI': 'header label', 'FRILUFTOPP': 'no label', 'ID': 'no label', 'OMRÅDENAV': 'header label', 'GEODATAEIE': 'no label', 'DATAFANGST': 'no label', 'NØYAKTIGH': 'no label', 'KOMM': 'no label', 'INFORMASJO': 'no label', 'FAKTAARK': 'no label', 'Omr.nr.': 'header label', 'Alle Områ': 'inline label', });
lyr_Utfartsomrde_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});