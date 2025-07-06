window.onload = function () {
    var ImageMap = function (map) {
            var n,
                areas = map.getElementsByTagName('area'),
                mappedImg = document.getElementById('mappedImg'),
                len = areas.length,
                coords = [],
                previousWidth = 1536; //width of the image unadjusted
            for (n = 0; n < len; n++) {
                coords[n] = areas[n].coords.split(',');
            }
            this.resize = function () {
                var n, m, clen,
                    //x = document.body.clientWidth / previousWidth; //original
                    x = mappedImg.clientWidth / previousWidth; //try to get it on the image we are using
                for (n = 0; n < len; n++) {
                    clen = coords[n].length;
                    for (m = 0; m < clen; m++) {
                        coords[n][m] *= x;
                    }
                    areas[n].coords = coords[n].join(',');
                }
                previousWidth = mappedImg.clientWidth;
                return true;
            };
            window.onresize = this.resize;
        },
        imageMap = new ImageMap(document.getElementById('dipper'));
    imageMap.resize();
}
