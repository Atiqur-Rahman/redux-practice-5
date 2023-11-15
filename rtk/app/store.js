const { configureStore } = require('@reduxjs/toolkit');
const counterReducer = require('../../redux/counter/reducer');

// configure store
const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

module.exports = store;
