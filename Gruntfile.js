/*global module, require*/
module.exports = function (grunt) {

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    // test
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    gruntConfig.jasmine = {
        src: {
            src: [
                'src/**/*.js',
            ],
            options: {
                host: 'http://127.0.0.1:8000/',
                specs: 'test/**/*.test.js',
                vendor: [
                    'src/lib/angular/angular.js',
                    'src/lib/jquery/jquery.js'
                ],
                junit: {
                    path: 'output/testresults'
                },
                keepRunner: true
            }
        }
    };
    gruntConfig.connect = {
        server: {
          options: {
            port: 8000,
            base: '.'
          }
        }
    };
    grunt.registerTask('test', ['connect:server', 'jasmine:src']);
    // grunt
    grunt.initConfig(gruntConfig);
};