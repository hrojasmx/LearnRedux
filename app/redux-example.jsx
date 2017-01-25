var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'};

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }

    console.log('New action-> ', action)
    return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

/*
var action = {
    type: 'CHANGE_NAME',
    name: 'Hector'

}
store.dispatch(action);
*/

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Hector'
});

console.log('Name should be Hector', store.getState());