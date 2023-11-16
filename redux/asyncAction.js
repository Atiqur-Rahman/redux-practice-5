const fetch = require('node-fetch');
const { createStore, applyMiddleware } = require('redux');
const { default: thinkMiddleware } = require('redux-thunk');

// initial State
const initialState = {
    loading: false,
    posts: [],
    error: '',
};

const fetchPostsRequested = () => {
    return {
        type: 'posts/requested',
    };
};

const fetchPostsSucceeded = (posts) => {
    return {
        type: 'posts/succeeded',
        payload: posts,
    };
};

const fetchPostsFailed = (error) => {
    return {
        type: 'posts/failed',
        payload: error,
    };
};

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'posts/requested':
            return {
                ...state,
                loading: true,
                error: '',
            };

        case 'posts/succeeded':
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: '',
            };

        case 'posts/failed':
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload.message,
            };

        default:
            return state;
    }
};

// Thunk function
const fetchPosts = () => {
    return async (dispatch) => {
        dispatch(fetchPostsRequested());

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const posts = await response.json();

            dispatch(fetchPostsSucceeded(posts));
        } catch (error) {
            dispatch(fetchPostsFailed(error));
        }
    };
};

// store
const store = createStore(reducer, applyMiddleware(thinkMiddleware));

// subscribe
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchPosts());
