var dest = './dist';
var src = './src';

module.exports = {
	clean: {
		path: dest
	},

	images: {
		src: src + '/assets/img/**'
		dest: dest + '/assets/img',
		settings: {
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		}
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
