'use strict';

describe('FullpageImage', function () {
  var FullpageImage, component;

  beforeEach(function () {
    FullpageImage = require('../../../src/scripts/components/FullpageImage.jsx');
    component = FullpageImage();
  });

  it('should create a new instance of FullpageImage', function () {
    expect(component).toBeDefined();
  });
});
