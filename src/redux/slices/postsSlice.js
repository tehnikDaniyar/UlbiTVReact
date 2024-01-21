import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
	"posts/getPosts",
	async function () {
		const responce = await fetch('https://65ad2376adbd5aa31be030f9.mockapi.io/posts');
		const data = await responce.json();
		return data;
	}
);

const initialState = {
	value: [

		// { id: 777, title: 'javascript', description: 'a' },
		// { id: 2, title: 'python', description: 'b' },
		// { id: 3, title: 'C', description: 'd' },
		// { id: 4, title: 'C++', description: 'c' },
	],
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
			console.log('posts sorted', action.payload);
			state.value = [...state.value].sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
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
	extraReducers: {
		[getPosts.pending]: (state, action) => { },
		[getPosts.fulfilled]: (state, action) => { },
		[getPosts.rejected]: (state, action) => { },

	},
})


export const { setPosts, deletePost, sortPosts, searchPost } = postsSlice.actions

export default postsSlice.reducer