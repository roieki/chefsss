/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/FrontpageListItem.css');
var Link = require('react-router-component').Link;



var _ = require('lodash');

var FrontpageListItem = React.createClass({
  render: function () {
    var category = this.props.content.toLowerCase();
    return (
        <div className="FrontpageListItem card">
          <Link href={"/" + category}>{this.props.content}</Link>
        </div>
      );
  }
});

module.exports = FrontpageListItem;
