import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getPosts = createAsyncThunk(
	"posts/getPosts",
	async function () {
		try {
			const responce = await fetch('http://localhost:3000/posts', { method: 'GET' });
			const data = await responce.json();
			return data === 'Not found' ? [] : data;
		} catch (error) {
			console.log(error);
			return []
		}
	}
);

export const deletePosts = createAsyncThunk(
	"posts/deletePosts",
	async function (id, { rejectWithValue, dispatch }) {
		try {
			const responce = await fetch(`http://localhost:3000/posts/${id}`, { method: 'Delete' });
			dispatch(getPosts())
		} catch (error) {
			console.error(error);
		}
	}
);

export const setPosts = createAsyncThunk(
	"posts/setPost",
	async function (post, { rejectWithValue, dispatch }) {
		try {
			const postData = JSON.stringify(post);
			const responce = await fetch(`http://localhost:3000/posts`, { method: 'Post', body: postData });
			dispatch(getPosts())
		} catch (error) {
			console.log(error);
		}
	}
)

export const sortPost = createAsyncThunk(
	"posts/sortPost",
	async function (property, { rejectWithValue, dispatch }) {
		try {
			const responce = await fetch(`http://localhost:3000/posts?_sort=${property}`, { method: 'GET' });
			const data = await responce.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}
)

export const searchQuery = createAsyncThunk(
)

export const asyncQuery = createAsyncThunk(
	"posts/asyncQuery",
	async function (props, { rejectWithValue, dispatch }) {
		try {

		} catch (error) {

		};
	}
);


const initialState = {
	value: [
	],
	isSorted: false,
	isLoading: false,
	switch: 0,
	sortProperty: 'title'

}


export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setSortProperty: (state, action) => {
			state.sortProperty = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(
				getPosts.fulfilled, (state, actions) => {
					state.value = actions.payload;
					state.isLoading = true;
				}
			)
			.addCase(
				deletePosts.fulfilled, (state, action) => {
				}
			)
			.addCase(
				sortPost.fulfilled, (state, action) => {
					state.value = action.payload;
				}
			)
	}
})


export const { searchPost, setSortProperty } = postsSlice.actions

export default postsSlice.reducer