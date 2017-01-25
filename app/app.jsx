var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
//require('style!css!applicationStyles');
require('style!css!sass!applicationStyles');

/*
ReactDOM.render(
<p>React Boilerplate 3 Project</p>,
  document.getElementById('app')
);
*/

//require('./redux-example.jsx');
require('./redux-todo-example.jsx');
