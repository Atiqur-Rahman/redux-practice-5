const store = require('./app/store');
const { counterActions } = require('./features/counter/counterSlice.js');

// print initial state
console.log(`initial state: ${JSON.stringify(store.getState())}`);

// subscribe to state change
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch action
store.dispatch(counterActions.increment());

store.dispatch(counterActions.increment());

store.dispatch(counterActions.decrement());
