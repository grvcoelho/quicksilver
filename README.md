# quicksilver

Gulp boilerplate for rapid development.

## Installation

You will need Node.js and Gulp installed:

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)

After that, clone this repository:

```sh
git clone git://github.com/grvcoelho/quicksilver.git my_project
cd my_project
```

Then, install the dependencies:

```sh
npm install
```

## Tasks

##### `gulp browser`

Open a server with browser_sync and livereload support.

##### `gulp browserify`

Execute javascript files in browserify mode.

##### `gulp clean`

Clean dist folders and files.o

##### `gulp default`

Run the tasks: 
- `server` 

##### `gulp images`

Minify and optimize images.

##### `gulp jade`

Compile jade files into html.

##### `gulp lint`

Lint javascript files with jshint.

##### `gulp markup`

Copy html files to dist folder.

##### `gulp server`

Run the tasks: 
- `stylus:watch`
- `jade:watch`
- `markup:watch`
- `images:watch`
- `browserify:watch`
- `browser`

##### `gulp stylus`

Compile stylus files into css with sourcemaps support.
