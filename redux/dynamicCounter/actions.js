const { DINCREMENT, DDECREMENT } = require('./actionType');

const increment = () => {
    return {
        type: DINCREMENT,
    };
};

const decrement = () => {
    return {
        type: DDECREMENT,
    };
};

module.exports = {
    increment,
    decrement,
};
