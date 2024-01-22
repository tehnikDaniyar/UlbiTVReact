import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getPosts = createAsyncThunk(
	"posts/getPosts",
	async function (_, { rejectWithValue, dispatch }) {
		const responce = await fetch('https://65ad2376adbd5aa31be030f9.mockapi.io/posts');
		const data = await responce.json();
		return data;
	}
);



const initialState = {
	value: [
	],
	isSorted: false,
	isLoading: false
}


export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPosts: (state, action) => {
			state.value = [...state.value, action.payload]
		},

		deletePost: (state, action) => {
			state.value = [...state.value].filter(post => post.id !== action.payload)
		},

		sortPosts: (state, action) => {
			state.value = [...state.value].sort((a, b) => a[action.payload].localeCompare(b[action.payload]));
			state.isSorted = true;
			console.log('posts sorted');
		},

		searchPost: (state, action) => {
			const searchQuery = action.payload;

			const checkText = (post, searchQuery) => {
				for (let i in post) {
					if (i !== 'id') {
						if (post[i].toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) {
							return true;
						}
					};
				};
				return false;
			};

			state.value = [...state.value].filter(post => checkText(post, searchQuery));
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getPosts.fulfilled, (state, actions) => {
			state.value = actions.payload;
			state.isLoading = true;
			console.log('posts loaded from API');
		})
	}
})


export const { setPosts, deletePost, sortPosts, searchPost } = postsSlice.actions

export default postsSlice.reducer