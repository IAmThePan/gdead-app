module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        
        vulcanize: {
            default: {
                options: {
                    strip: true
                },
                files: {
                    "build.html": "index.html"
                },
            },
        },

    });

    grunt.loadNpmTasks('grunt-vulcanize');
    
    grunt.registerTask("default", ["vulcanize"]);
}
