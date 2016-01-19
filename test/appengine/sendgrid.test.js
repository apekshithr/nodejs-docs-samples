// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var assert = require('assert');
var request = require('supertest');
var app = require('../../appengine/sendgrid/app.js');

describe('sendgrid', function () {
  it('should return 200 and a "Hello World" message', function (done) {
    var message = 'Express.js + Sendgrid on Google App Engine';

    request(app)
      .get('/')
      .expect(200)
      .expect(function (res) {
        assert(
          res.text.indexOf(message) !== -1,
          'Response should contain a "Hello World" message.\n' + 
          'Found: ' + res.text
        );
      })
      .end(done);
  });
});
