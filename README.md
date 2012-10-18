# grunt-requirejs-tasks

grunt plugin enabling developers to build their code using require.js's dependency management features

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-requirejs-tasks`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-requirejs-tasks');
```

## Example Config
```javascript
requirejs-concat: {
    min:{
      src: 'src/file.js',
      dest: 'dist/file.min.js'
    },
    concat:{
      src: 'src/file.js',
      dest: 'dist/file.js',
      opts : { 
        optimize:'none'
      }
    }
}
```

This will add a 'requirejs-concat' task to your grunt file which concatinates and minifies according to dependencies specified via requirejs

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## License
Copyright (c) 2012 Alan Clarke  
Licensed under the MIT license.
