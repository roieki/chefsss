/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Landing = require('../../scripts/components/Landing.jsx');
var App = require('../../scripts/components/App.jsx');
var Categories = require('../../scripts/components/Categories.jsx');
var Category = require('../../scripts/components/Category.jsx');
var EditRecipe = require('../../scripts/components/EditRecipe.jsx');
var ReactRouter = require('react-router-component');

var Locations = ReactRouter.Locations;
var Location = ReactRouter.Location;
var Link = ReactRouter.Link;



// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/reset.css');
require('../../styles/main.css');


var Index = React.createClass({

  render: function() {
    return (
      <div>
        <Locations hash>
          <Location path="/" handler={Categories} />
          <Location path="/:category" handler={Category} />
        </Locations>
      </div>
    );
  }
});

React.renderComponent(<Index />, document.body);



module.exports = Index;
