const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const fetch = require('node-fetch');

// initial state
const initialState = {
    loading: false,
    post: [],
    error: '',
};

// create async thunk
const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
    const response = await fetch('https://jonplaceholder.typicode.com/posts?_limit=5');
    const posts = await response.json();

    return posts;
});

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true;
            state.error = '';
        });

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.post = action.payload;
            state.error = '';
        });

        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.post = [];
            state.error = action.error.message;
        });
    },
});

module.exports = postSlice.reducer;
module.exports.fetchPosts = fetchPosts;
