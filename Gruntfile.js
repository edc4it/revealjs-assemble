module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
            pkg: grunt.file.readJSON('./package.json'),
            assemble: {

                decks: {
                    options: {
                        layout: 'deck.hbs',
                        layoutdir: 'layouts',
                        'footer-text' : "reveal.js & assemble.io"

                    },
                    files: [{
                        cwd: './decks',
                        dest: './dist',
                        expand: true,
                        src: ['**/*.hbs']
                    }]
                }
                

            }
        }
    )
    ;
    grunt.loadNpmTasks('assemble');

}
;