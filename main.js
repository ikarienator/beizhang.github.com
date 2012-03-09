function onPageLoad () {
    var title = document.getElementById('title'),
        intro = document.getElementById('intro'),
        view = document.getElementById('view');
    var list = [
        {
            title: 'Geoboard',
            intro: 'Geometry teaching program. You are able to create points, line segments, creating parallel and perpendicular lines, intersections, circles and trace. ' +
                'They will maintain their geometric relationship.',
            src: 'gb/index.html',
            icon: 'icons/line.png'
        },
        {
            title: 'Voronoi Treemap',
            intro: '<a href="http://mathworld.wolfram.com/VoronoiDiagram.html">Voronoi Diagram</a> is the partitioning of a distance space with points into convex polygons such that each polygon contains exactly one generating point and every point in a given polygon is closer to its generating point than to any other. ' +
                'It is especially important for Treemaps because it is theoretically the best way to reveal the hierarchy of nodes. <br/>' +
                'It is now a part of <a href="http://thejit.org/">Infovis</a>.',
            src: 'voronoi_treemap/index.html',
            icon: 'icons/icon.jpg'
        },
        {
            title: 'Spherical Voronoi Diagram',
            intro: 'Spherical Voronoi Diagram is a Voronoi Diagram in spherical space.',
            src: 'sp_voronoi/index.html',
            icon: 'icons/icon.jpg'
        }
    ]
    window.applyDemo = function (i) {
        var info = list[i];
        title.innerHTML = info.title;
        intro.innerHTML = info.intro;
        view.src = info.src;
    }
    localStorage['cv-Geoboard-0.1-files'] = '["Parabola"]';
    localStorage['cv-Geoboard-0.1-Parabola'] = '{"title":"Parabola","nextId":115,"entities":[{"type":"gpo","data":{"id":"ent100","color":"#F00","hidden":false,"size":4,"name":"","showLabel":false,"labelX":10,"labelY":10,"labelArg":0,"parents":[],"params":[-254,110.5],"fontSize":18}},{"type":"gpo","data":{"id":"ent101","color":"#F00","hidden":false,"size":4,"name":"","showLabel":false,"labelX":10,"labelY":10,"labelArg":0,"parents":[],"params":[105,110.5],"fontSize":18}},{"type":"gpo","data":{"id":"ent105","color":"#F00","hidden":false,"size":4,"name":"","showLabel":false,"labelX":10,"labelY":10,"labelArg":0,"parents":[],"params":[-106,-178.5],"fontSize":18}},{"type":"gli","data":{"id":"ent102","color":"#008","hidden":false,"size":4,"name":"","showLabel":false,"labelX":10,"labelY":10,"labelArg":0.5,"parents":["ent100","ent101"],"params":[],"fontSize":18}},{"type":"gpm","data":{"id":"ent103","color":"#000","hidden":false,"size":4,"name":"","parents":["ent102","ent101"],"params":[true]}},{"type":"xli","data":{"id":"ent104","color":"#008","hidden":false,"size":4,"name":"","showLabel":false,"labelX":10,"labelY":10,"labelArg":0.5,"parents":["ent101","ent103"],"params":[],"fontSize":18}},{"type":"poo","data":{"id":"ent106","color":"#F00","hidden":false,"size":4,"name":"","showLabel":false,"labelX":10,"labelY":10,"labelArg":0,"parents":["ent104"],"params":[-0.47075208913649025],"fontSize":18}},{"type":"gli","data":{"id":"ent107","color":"#008","hidden":false,"size":4,"name":"","showLabel":false,"labelX":10,"labelY":10,"labelArg":0.5,"parents":["ent105","ent106"],"params":[],"fontSize":18}},{"type":"gpm","data":{"id":"ent108","color":"#000","hidden":false,"size":4,"name":"","parents":["ent104","ent106"],"params":[true]}},{"type":"mpo","data":{"id":"ent110","color":"#F00","hidden":false,"size":4,"name":"","showLabel":false,"labelX":10,"labelY":10,"labelArg":0,"parents":["ent107"],"params":[],"fontSize":18}},{"type":"xli","data":{"id":"ent109","color":"#008","hidden":false,"size":4,"name":"","showLabel":false,"labelX":10,"labelY":10,"labelArg":0.5,"parents":["ent106","ent108"],"params":[],"fontSize":18}},{"type":"gpm","data":{"id":"ent111","color":"#000","hidden":false,"size":4,"name":"","parents":["ent107","ent110"],"params":[true]}},{"type":"xli","data":{"id":"ent112","color":"#008","hidden":false,"size":4,"name":"","showLabel":false,"labelX":10,"labelY":10,"labelArg":0.5,"parents":["ent110","ent111"],"params":[],"fontSize":18}},{"type":"xpo","data":{"id":"ent113","color":"#F00","hidden":false,"size":4,"name":"","showLabel":false,"labelX":10,"labelY":10,"labelArg":0,"parents":["ent112","ent109"],"params":[0],"fontSize":18}},{"type":"loc","data":{"id":"ent114","color":"#880","hidden":false,"size":4,"name":"","showLabel":false,"labelX":10,"labelY":10,"labelArg":0,"parents":["ent106","ent113"],"params":[],"fontSize":18}}],"panX":0,"panY":90,"scaleFactor":1}';
    localStorage['cv-Geoboard-0.1-currentDocument'] = 'Parabola';
    
    var menu = document.getElementById('menu'), text = [];
    for (var i = 0; i < list.length; i++) {
        text.push('<img onclick="applyDemo(' + i + ')" class="item" src="' + list[i].icon + '"/>');
    }
    menu.innerHTML = text.join('');

    applyDemo(0);
}
