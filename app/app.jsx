var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());


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

/*
require('./redux-example.jsx');
//require('./redux-todo-example.jsx');
*/
/*
ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);
*/
ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);