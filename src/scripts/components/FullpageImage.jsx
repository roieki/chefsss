/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/FullpageImage.css');

var FullpageImage = React.createClass({

  render: function () {
    var style= {
        backgroundImage: "url('http://www.wallope.com/wp-content/uploads/textures-wallpapers-181-food-texture-pack-free-pasta-textures-high-resolution-textures-wallpaper.jpg')"
    }

    return this.transferPropsTo(
        <div className="fullpage background" style={style} data-img-width="1600" data-img-height="1064">
          <div className="content inner">
            {this.props.children}
          </div>
        </div>
      );
  }
});

module.exports = FullpageImage;
