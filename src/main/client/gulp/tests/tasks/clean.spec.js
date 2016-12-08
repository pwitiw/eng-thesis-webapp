'use strict';

var gulp = require("gulp"),
  config = require('./../../lib/org.webapp.config-factory.js')(require('./../../../org.webapp.config.json')),
  assert = require('yeoman-assert'),

  /* GULP TASKS */
  clean = require("./../../tasks/clean")(gulp, config);

describe("test:tasks:clean", function () {

  it("should clean app", function (done) {
    // when
    var promise = clean();

    promise.then(function () {

      // then
      assert.noFile('.tmp');
      assert.noFile('dist');
      assert.noFile('test-output');

      done();
    }, done);
  });

});
