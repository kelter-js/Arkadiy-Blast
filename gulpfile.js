const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const htmlminify = require("gulp-htmlmin");
const del = require("del");
const imagemin = require("gulp-imagemin");
const sync = require("browser-sync").create();
const uglify = require('gulp-minify')
const webpack = require('webpack');
const path = require('path');
const webpackStream = require('webpack-stream');

//js

const js = () => {
  return gulp.src('source/js/main.js')
    .pipe(webpackStream({
      entry: './source/js/main.js',
      devtool: 'source-map',
      output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'build/js'),
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: [
              './src/Portfolio/pixi.min.js'
            ]
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-class-properties']
              }
            }
          }
        ]
      },
    }))
    .pipe(gulp.dest("build/js"))
    .pipe(uglify())
    .pipe(gulp.dest("build/js"));
}

exports.js = js;

//HTML

const html = () => {
  return gulp.src("source/*.html")
  .pipe(htmlminify({collapseWhitespace: true}))
  .pipe(gulp.dest("build"))
  .pipe(sync.stream());
}

exports.html = html;

// Styles

const styles = () => {
  return gulp.src("source/sass/style.sass")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(gulp.dest("build/css"))
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

//Copy

const copy = () => {
  return gulp.src([
    "source/fonts/*.{woff2,woff}",
    "source/img/**/*.{jpg,png,svg}",
    "source/*.json",
  ],
  {
    base: "source",
  })
  .pipe(gulp.dest("build"));
}

exports.copy = copy;

//Copy PIXI.JS

const copyPIXI = () => {
  return gulp.src([
    "source/js/pixi.min.js"
  ],
  {
    base: "source",
  })
  .pipe(gulp.dest("build"));
}

exports.copyPIXI = copyPIXI;

//Clean

const clean = () => {
  return del("build");
}

exports.clean = clean;

//Images

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
  .pipe(imagemin ([
    imagemin.mozjpeg({progressive: true}),
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest("build/img"))
};

exports.images = images;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

//Build

const build = gulp.series(
  clean,
  gulp.parallel(
    js,
    styles,
    html,
    copy,
    copyPIXI,
    images
  )
)

exports.build = build;

exports.default = gulp.series(
  clean,
  gulp.parallel(
    js,
    styles,
    html,
    copy,
    copyPIXI
  ),
  gulp.series(
    server
  )
);
