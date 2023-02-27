// GULP IMPORTS
const { src, dest, watch, series } = require('gulp');

// CSS IMPORTS
const sass = require('gulp-sass')( require('sass') );
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

// IMAGES IMPORTS
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

// #############################
// GULP TASKS
// #############################

const compileSASS = ( done ) => { /* To compile SASS code to CSS code */

  src('./src/sass/app.scss')
    .pipe( sourcemaps.init() )
    .pipe( sass({ outputStyle: 'expanded' }) )
    .pipe( postcss([ autoprefixer(), cssnano() ]) )
    .pipe( sourcemaps.write('.') )
    .pipe( dest('./build/styles') );

  done();

}

const watchChanges = () => { /* To detect changes on SASS files */
  watch('./src/sass/**/*.scss', compileSASS);
  watch('./src/img/**/*.{jpg,jpeg,png}', imagesMinified);
}

const imagesMinified = ( done ) => { /* To minify images */
  
  src('./src/assets/img/**/*')
    .pipe( imagemin({ optimizationLevel: 3 }) )
    .pipe( dest('./build/img') )
    
  done();
}

const imagesWebp = ( done ) => { /* To become a jpg, jpeg, png image to webp image */

  src('./src/assets/img/**/*.{jpg,jpeg,png}')
    .pipe( webp({ quality: 50 }) )
    .pipe( dest('./build/img') )

  done();
}

const imagesAvif = ( done ) => { /* To become a jpg, jpeg, png image to avif image */

  src('./src/assets/img/**/*.{jpg,jpeg,png}')
    .pipe( avif({ quality: 50 }) )
    .pipe( dest('./build/img') )

  done();
}

exports.compile = series( compileSASS, watchChanges );
exports.images = series( imagesMinified, imagesWebp, imagesAvif );
