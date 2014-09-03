/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/BigAssTitle.css');

var BigAssTitle = React.createClass({
  render: function () {
    return (
        <div className="bigAssTitle">
          {this.props.children}
        </div>
      );
  }
});

module.exports = BigAssTitle;
