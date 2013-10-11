/*global module, require*/
module.exports = function (grunt) {

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    // test
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    gruntConfig.jasmine = {
        src: {
            src: [
                'src/**/*.js',
            ],
            options: {
                specs: 'test/**/*.test.js',
                vendor: [
                ],
                junit: {
                    path: 'output/testresults'
                },
                keepRunner: true
            }
        }
    };
    grunt.registerTask('test', 'jasmine:src');
    // grunt
    grunt.initConfig(gruntConfig);
};