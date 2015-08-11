module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		less: {
			style: {
				files:{
					"css/style.css": ["less/style.less"]
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ["last 3 version", "ie 9"]
			},
			style: {
				src: "css/style.css"
			}
		},

		cmq: {
			style: {
				files: {
					"css/style.css": ["css/style.css"]
				}
			}
		},

		csscomb: {
			less: {
				expand: true,
				src: ["less/**/*.less"],
			},
			css: {
				expand: true,
				src: ["css/**/style.css"],
			}
		},

		watch: {
			less: {
				files: "less/**/*.less",
				tasks: ["less"],
				option: {
					livereload: true,
				},
			},
		},

		imagemin: {
			images: {
				options: {
					optimizationLevel: 3
				},
				files: [{
					expand: true,
					src: ["img/**/*.{png, jpg, svg}"]
				}]
			}
		},

		cssmin: {
			style: {
				options: {
					keepSpecialCommnets: 0,
					report: "gzip"
				},
				files: {
					"css/style.min.css": ["css/style.css"]
				}
			}
		},

		copy: {
			build: {
				files: [{
					expand: true,
					cwd: "source",
					src: [
						"img/**",
						"js/**",
						"*.html"
					],
					dest: "build"
				}]
			}
		},

		clean: {
			build: ["build"]
		},

		replace: {
			build: {
				options: {
					patterns: [{
						match: /[\"\']img\//g,
						replacement: '"/img/'
					}, {
						match: /[\"\']css\//g,
						replacement: '"/css/'
					}, {
						match: /[\"\']js\//g,
						replacement: '"/js/'
					}]
				},
				files: [{
					expand: true,
					src: [
						"build/css/style*.css",
						"build/*.html"
					]
				}]
			}
		},

		sprite: {
			all: {
				src: "img/_source-icon/*.png",
				dest: "img/sprite.png",
				destCss: "less/components/sprite.less"
			}
		}

	});

		grunt.registerTask("build", [
			"csscomb",
			"less",
			"autoprefixer",
			"cmq",
			"cssmin"
		]);
};
