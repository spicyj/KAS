module.exports = function(grunt) {

var srcFiles = [
    "src/parser.js",
    "src/nodes.js",
    "src/compare.js"
];

grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
        options: {
            banner: "/*! KAS | https://github.com/Khan/KAS */\n",
            separator: ";"
        },
        dist: {
            src: srcFiles,
            dest: "kas.js"
        }
    }
});

grunt.loadNpmTasks("grunt-contrib-concat");
grunt.registerTask("default", ["concat"]);

};
