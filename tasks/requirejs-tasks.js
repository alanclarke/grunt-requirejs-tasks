/*
 * grunt-requirejs-tasks
 * https://github.com/alz/grunt-requirejs-tasks
 *
 * Copyright (c) 2012 Alan Clarke
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  var spawn = require('child_process').spawn,
  path = require('path'),
  root = path.dirname(path.dirname(path.dirname(__dirname)));

  function execute(args, callback){
    var cmd = spawn(args[0], args.slice(1));
    var error = false;
    var resp = '';

    cmd.stdout.on('data', function (data) {
      resp+=data;
      console.log(data);
    });

    cmd.stderr.on('data', function (data) {
      resp+=data;
      error = true;
      console.log(data);
    });

    cmd.on('exit', function (code) {
        grunt.log.writeln(resp);
        return !callback||callback(err?resp:null, resp);
    });
  }


  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================


  grunt.registerMultiTask('requirejs-concat', 'Concatenate files.', function() {
      var self = this;
      grunt.helper('_requirejs-concat', self.data.src, self.data.dest, self.data.opts);
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  // Concat source files and/or directives.
  grunt.registerHelper('_requirejs-concat', function(src, dest, opts) {

    var cmd = ['node', 'node_modules/requirejs/bin/r.js','-o','name='+src,'out='+dest, 'baseUrl='+root];
    
    for(var key in opts){
      cmd.push([key,opts[key]].join('='));
    };

    execute(cmd, function(err,resp){
        console.log(resp);
    });
  });

};
