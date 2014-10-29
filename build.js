
var fs = require('fs');
var UglifyJS = require("uglify-js");
var result = UglifyJS.minify(["src/jquery.debug.fadein.js"]);
fs.writeFileSync("build/jquery.debug.fadein.min.js", result.code, 'utf8');

var CleanCSS = require('clean-css');
var source = 'a{font-weight:bold;}';
fs.readFile('src/jquery.debug.fadein.css', 'utf-8', function (err, source) {
    if (err) {
        console.error(err);
    } else {
        var minimized = new CleanCSS().minify(source);
        fs.writeFileSync('build/jquery.debug.fadein.min.css', minimized, 'utf8');
    }
});