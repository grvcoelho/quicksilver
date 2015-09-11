var dest = './dist';
var src = './src';

module.exports = {
	clean: {
		path: dest
	},

	images: {
		src: src + '/assets/img/**',
		dest: dest + '/assets/img',
		settings: {
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		}
	},

	jade: {
		src: src + '/**/*.jade',
		dest: dest,
		settings: {
			pretty: false
		}
	},

	markup: {
		src: src + '/**/*.html',
		dest: dest
	},

	server: {
		baseDir: dest,
		port: 4000
	},

	stylus: {
		src: src + '/styl/**/*.styl',
		dest: dest + '/assets/css'
	}
};
