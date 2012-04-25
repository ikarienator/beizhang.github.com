function onPageLoad () {
    var title = document.getElementById('title'),
        intro = document.getElementById('intro'),
        view = document.getElementById('view');
    var list = [
        {
            title: 'WebGL Wave Demo',
            intro: 'This example demonstrates the ability to calculate an simple physical model using GPU. ' +
                'As well as several very common rendering features such as Fresnel reflection/refraction, geometric ray tracing and HDRI. ' +
                'It currently supports only Chrome and Safari, and might need some time to load the texture for the first run. <br/>' +
                'Scroll to zoom, drag to rotate',
            src: 'wave/index.html',
            icon: 'icons/wave2.jpg'
        },
        {
            title: 'Geoboard',
            intro: 'Geoboard is an HTML5 based geometry sketchpad inspired by <a target="_blank" href="http://www.dynamicgeometry.com/">Geometers Sketchpad</a>. You are able to create points, line segments, creating parallel and perpendicular lines, intersections, circles and trace. ' +
                'They will maintain their geometric relationship.',
            src: 'gb/index.html',
            icon: 'icons/line.png'
        },
        {
            title: 'Voronoi Treemap',
            intro: '<a target="_blank" href="http://mathworld.wolfram.com/VoronoiDiagram.html">Voronoi Diagram</a> is the partitioning of a distance space with points into convex polygons such that each polygon contains exactly one generating point and every point in a given polygon is closer to its generating point than to any other. ' +
                'It is especially important for Treemaps because it is theoretically the best way to reveal the hierarchy of nodes. <br/>' +
                'It is now a part of <a target="_blank" href="http://thejit.org/">Infovis</a>.',
            src: 'voronoi_treemap/index.html',
            icon: 'icons/icon.jpg'
        },
        {
            title: 'Spherical Voronoi Diagram',
            intro: 'Spherical Voronoi Diagram is a Voronoi Diagram in spherical space.',
            src: 'sp_voronoi/index.html',
            icon: 'icons/spvoronoi.png'
        },
        {
            title: 'Symbolic Manipulation',
            intro: 'This is a demo for the library <a target="_blank" href="http://www.github.com/zhangbei/Symlet">Symlet</a> to calculate ' +
                '<a target="_blank" href="http://en.wikipedia.org/wiki/Automatic_differentiation">symbolic derivatives</a>.' +
                'With Symlet you are allowed to parse, validate, simplify and manipulate a mathematical expression.',
            src: 'calculus/index.html',
            icon: 'icons/df_dx.png'
        }
    ]
    window.applyDemo = function (i) {
        var info = list[i];
        title.innerHTML = info.title;
        intro.innerHTML = info.intro;
        view.src = info.src;
    }
    var menu = document.getElementById('menu'), text = [];
    for (var i = 0; i < list.length; i++) {
        text.push('<img title="' + list[i].title + '" onclick="applyDemo(' + i + ')" class="item" src="' + list[i].icon + '"/>');
    }
    menu.innerHTML = text.join('');

    applyDemo(0);
}
