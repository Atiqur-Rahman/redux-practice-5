const { increment, decrement } = require('./counter/actions');
const store = require('./store');

// subscribe to state change
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch action
store.dispatch(increment());

store.dispatch(increment());

// store.dispatch(decrement());
