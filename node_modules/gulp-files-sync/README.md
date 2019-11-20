# Deprecation warning

This package has been deprecated. Please use [syncy](https://github.com/mrmlnc/syncy) instead.

**The reason:** This package works not only with Gulp.


# gulp-files-sync

> A [Gulp plugin](http://gulpjs.com/) providing one-way synchronization of directories with [glob](https://github.com/isaacs/node-glob).

[![Travis](https://img.shields.io/travis/mrmlnc/gulp-files-sync.svg?style=flat-square)](https://travis-ci.org/mrmlnc/gulp-files-sync)
[![NPM version](https://img.shields.io/npm/v/gulp-files-sync.svg?style=flat-square)](https://www.npmjs.com/package/gulp-files-sync)
[![devDependency Status](https://img.shields.io/david/mrmlnc/gulp-files-sync.svg?style=flat-square)](https://david-dm.org/mrmlnc/gulp-files-sync#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/mrmlnc/gulp-files-sync.svg?style=flat-square)](https://david-dm.org/mrmlnc/gulp-files-sync#info=devDependencies)

## Install

```
$ npm install -S gulp-files-sync
```

## Why?

  * Fast by using streams and Promises. Used [cp-file](https://github.com/sindresorhus/cp-file) and [rimraf](https://github.com/isaacs/rimraf).
  * User-friendly by accepting globs.

## Usage

```js
var gulp = require('gulp');
var fsync = require('gulp-files-sync');

gulp.task('sync', function() {
  fsync(['src/**', '!src/folder/**'], 'dest').end();

  // Or with pipeline
  gulp.src('')
    .pipe(fsync(['src/**', '!src/folder/**'], 'dest'));
});
```

## API

```
fsync(glob, dest, [options])
```

#### glob

Type: `array|string`

Glob pattern. Files to copy.

#### dest

Type: `string`

Destination directory.

#### options

Type: `object`

Plugin settings.

## Options

```js
{
  // Display log messages when copying and removing files
  verbose: false,
  // The base path to be removed from the path. Default: none
  base: 'base_path'
  // Remove all files from dest that are not found in src. Default: false
  updateAndDelete: true,
  // Never remove js files from destination. Default: false
  ignoreInDest: '**/*.js'
}
```

## Tests

**Tech specs**:

  * Intel Core i7-3610QM
  * RAM 8GB
  * SSD (555MB/S, 530MB/S)
  * Windows 10
  * Node.js v4.2.4

**Files**: [AngularJS](https://github.com/angular/angular.js) from master branch (1462 files, 19368Кб)

**Note**: `UpdateAndDelete` option is enabled in the grunt-sync, because other plugins have this option initially.

| Description of tests                              | gulp-files-sync | gulp-directory-sync | grunt-sync |
|---------------------------------------------------|-----------------|---------------------|------------|
| First run                                         | 2,4s            | 4,5s                | 5,8s       |
| Re-run                                            | 0,6s            | 0,8s                | 0,7s       |
| Changed single file                               | 0,6s            | 0,8s                | 0,7s       |
| Delete files from destination directories and run | 2,3s            | 4,5s                | 5,7s       |
| Delete files from the source directory            | 0,5s            | 0,5s                | 0,5s       |

## How to work with Grunt?

Just use a custom task:

```js
var fsync = require('gulp-files-sync');

module.exports = function(grunt) {
  // Default task(s).
  grunt.registerTask('default', function() {
    var done = this.async();
    fsync(['node_modules/grunt/**'], 'dest')
      .on('end', function() {
        done();
      })
      .end();
  });

};
```

## Changelog

  * **v0.3.2** (2015.02.29) — Add deprecation warning.
  * **v0.3.1** (2015.01.13) — Update conditions the update files.
  * **v0.3.0** (2015.01.12) — Initialization().

## License

MIT.
