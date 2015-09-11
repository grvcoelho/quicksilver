var dest = './dist';
var src = './src';

module.exports = {
	clean: {
		path: dest
	},

	server: {
		baseDir: dest,
		port: 4000
	},
	
	stylus: {
		src: src + '/styl/**/*.styl',
		dest: dest + '/assets/css'
	},
};
