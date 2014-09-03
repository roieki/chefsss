/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Categories.css');

var FullpageImage = require('../../scripts/components/FullpageImage.jsx');
var Grid = require('../../scripts/components/Grid.jsx');
var BigAssTitle = require('../../scripts/components/BigAssTitle.jsx');

var Link = require('react-router-component').Link;


var Categories = React.createClass({
  getInitialState: function() {
    return {
      categories : ['Breakfast', 'Lunch', 'Dinner']
    };
  },
  componentWillMount: function() {

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
        <div>
          <FullpageImage>
            <Grid layout={layoutOptions} direction="column">
              <BigAssTitle>TunEat</BigAssTitle>
              <div className="menu-item">
                <Link href="/breakfast" han>Breakfast</Link>

              </div>
              <div className="menu-item">
                <Link href="/lunch">Lunch</Link>
              </div>
              <div className="menu-item">
                <Link href="/dinner">Dinner</Link>
              </div>
            </Grid>


          </FullpageImage>
        </div>
      );
  }
});

module.exports = Categories;
