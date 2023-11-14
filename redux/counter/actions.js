const { INCREMENT, DECREMENT } = require('./actionType');

const increment = () => {
    return {
        type: INCREMENT,
    };
};

const decrement = () => {
    return {
        type: DECREMENT,
    };
};

module.exports = {
    increment,
    decrement,
};
