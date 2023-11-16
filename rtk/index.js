const store = require('./app/store');
const { counterActions } = require('./features/counter/counterSlice.js');
const { dynamicCounterActions } = require('./features/dynamicCounter/dynamicCounter.js');

// print initial state
// console.log(`initial state: ${JSON.stringify(store.getState())}`);

// subscribe to state change
store.subscribe(() => {
    // console.log(store.getState());
});

// dispatch action
store.dispatch(counterActions.increment());

store.dispatch(counterActions.increment());

// store.dispatch(counterActions.decrement());

// store.dispatch(dynamicCounterActions.increment(3));

// store.dispatch(dynamicCounterActions.increment(4));

// store.dispatch(dynamicCounterActions.decrement(2));
