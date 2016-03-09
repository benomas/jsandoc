var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
var elixir = require('laravel-elixir');

var elixirTypscript = require('elixir-typescript');

gulp.task('newDependences',function()
{
    elixir(function(mix)
    {
        mix.sass('app.scss');
        mix.copy('node_modules/angular2', 'public/angular2');
        mix.copy('node_modules/rxjs', 'public/rxjs');
        mix.copy('node_modules/systemjs', 'public/systemjs');
        mix.copy('node_modules/es6-promise', 'public/es6-promise');
        mix.copy('node_modules/es6-shim', 'public/es6-shim');
        mix.copy('node_modules/zone.js', 'public/zone.js');

        mix.typescript('app.js','public/','/**/*.ts',
        {
                      "target": "ES5",
                      "module": "system",
                      "moduleResolution": "node",
                      "sourceMap": true,
                      "emitDecoratorMetadata": true,
                      "experimentalDecorators": true,
                      "removeComments": true,
                      "noImplicitAny": false,
        });
    });
})

gulp.task('default',function()
{
    elixir(function(mix)
    {
        mix.typescript('app.js','public/','/**/*.ts',
        {
                      "target": "ES5",
                      "module": "system",
                      "moduleResolution": "node",
                      "sourceMap": true,
                      "emitDecoratorMetadata": true,
                      "experimentalDecorators": true,
                      "removeComments": true,
                      "noImplicitAny": false,
        });
    });
})
