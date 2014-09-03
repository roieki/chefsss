'use strict';

describe('BigAssTitle', function () {
  var BigAssTitle, component;

  beforeEach(function () {
    BigAssTitle = require('../../../src/scripts/components/BigAssTitle.jsx');
    component = BigAssTitle();
  });

  it('should create a new instance of BigAssTitle', function () {
    expect(component).toBeDefined();
  });
});
