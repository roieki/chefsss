/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactRouter = require('react-router-component');

var Link = ReactRouter.Link;

var FullpageImage = require('../../scripts/components/FullpageImage.jsx');
var BigAssTitle = require('../../scripts/components/BigAssTitle.jsx');



require('../../styles/Category.css');
var PageHeader = require('react-bootstrap/PageHeader');
var Grid = require('react-bootstrap/Grid');
var Button = require('react-bootstrap/Button');



var Category = React.createClass({
  getInitialState: function() {
    return {

    }
  },
  render: function () {
    var layoutOptions = {
      flexWrap: 'wrap',
      justify: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'strech',
      display: 'flex'
    };
    return (
        <FullpageImage>
          <Grid layout={layoutOptions} direction="column">
            <BigAssTitle>{this.props.category}</BigAssTitle>
            <div className="content">
              This is Content
            </div>
            <div className="menu-item">
              <Link href="/">Back</Link>
            </div>
          </Grid>


        </FullpageImage>
      );
  }
});

module.exports = Category;
