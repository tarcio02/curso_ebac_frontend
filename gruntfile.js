module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('packege.json'),
        less: {
            development: {
                files:{
                    'build/styles/main.css' : 'source/styles/main.less'
                }
            }
        },
        uglify: {
            target:{
                files:{
                    'build/scripts/main.min.js' : 'source/scripts/main.js'
                }
            }
        }
    })


    grunt.loadNpmTask('grunt-contrib-less')
    grunt.loadNpmTask('grunt-contrib-uglify')
    grunt.registerTask('build', ['less', 'uglify'])
}


