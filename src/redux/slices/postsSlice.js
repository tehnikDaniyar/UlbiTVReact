import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';


export const getPosts = createAsyncThunk(
	"posts/getPosts",
	async function (_, { rejectWithValue, dispatch }) {
		console.log('post geted')
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
			console.log(post);
			const postData = JSON.stringify(post.post);
			const responce = await fetch(`http://localhost:3000/posts`, { method: 'Post', body: postData });
			dispatch(sortPost(post.sortProperty));
		} catch (error) {
			console.log(error);
		}
	}
)

export const sortPost = createAsyncThunk(
	"posts/sortPost",
	async function (property, { rejectWithValue, dispatch }) {
		try {
			console.log('sorted', property)
			const responce = await fetch(`http://localhost:3000/posts?_sort=${property}`, { method: 'GET' });
			const data = await responce.json();
			return { data: data, sortProperty: property };
		} catch (error) {
			console.log(error);
		}
	}
)

export const searchPosts = createAsyncThunk(
	"posts/searchPosts",
	async function (searchQuery, { rejectWithValue, dispatch }) {
		try {
			console.log('search', searchQuery)
			const responce = await fetch(`http://localhost:3000/posts?q=${searchQuery}`, { method: 'GET' });
			const data = await responce.json();
			console.log(data)
			return data;
		} catch (error) {
			console.log(error);
		}
	}
)




const initialState = {
	value: [
	],
	searchedData: {
		searchedPosts: [],
		searchQuery: ''
	},
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
		},
		searchPost: (state, action) => {
			const posts = state.value;
			console.log(posts)
			// const searchedPosts = posts.value.filter(post => console.log(post));
			// console.log(searchedPosts);
		},
		setSearchedPosts: (state, action) => {
			state.searchedData.searchedPosts = action.payload.searchedPosts;
			state.searchedData.searchQuery = action.payload.searchQuery;

			console.log(action.payload)
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
					state.value = action.payload.data;
					state.sortProperty = action.payload.sortProperty
				}
			)
			.addCase(
				setPosts.fulfilled, (store, action) => {
					const dispatch = action.payload
					sortPost(store.sortProperty);
				}
			)
			.addCase(
				searchPosts.fulfilled, (store, action) => {
					console.log(action.payload)
					store.value = action.payload;
				}
			)
	}
})


export const { searchPost, setSortProperty, setSearchedPosts } = postsSlice.actions

export default postsSlice.reducer