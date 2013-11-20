module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
        serve: {
            options: {
            port: 3000,
            base: '.',
            }
        },

        public: {
            options: {
                port: 3000,
                base: '.',
                hostname: '*'
            }
        }
    },
    htmllint: {
        all: ["index.html"]
    },
    'html-prettyprinter': {
        single: {
            src: './index.html',
            dest: 'build/index.html'
        },
    },
    prettify: {
        options: {
            "indent": 4,
            "indent_char": " ",
            "indent_scripts": "normal",
            "wrap_line_length": 0,
            "brace_style": "collapse",
            "preserve_newlines": true,
            "max_preserve_newlines": 1,
            "unformatted": [
            "a",
            "code",
            "pre"
            ]
        },
        one: {
            src: 'index.html',
            dest: 'build/index.html'
        }
    }
});

//Load Tasks
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-html');
grunt.loadNpmTasks('grunt-html-prettyprinter');
grunt.loadNpmTasks('grunt-prettify');

// Default task
grunt.registerTask('prepare', ['htmllint','prettify']);
grunt.registerTask('serve', ['connect:serve:keepalive']);
grunt.registerTask('serve:public', ['connect:public:keepalive']);
};
