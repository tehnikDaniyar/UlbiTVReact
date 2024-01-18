import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: [
		{ id: 777, title: 'javascript', description: 'fddssdcd' },
		{ id: 2, title: 'python', description: 'fddssdcd' },
		{ id: 3, title: 'C', description: 'fddssdcd' },
		{ id: 4, title: 'C++', description: 'fddssdcd' },
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
			const sort = action.payload;
			console.log(sort);
			// state.value = [...state.value].sort((a, b) => a[sort].localeCompare(b[sort]));
		}
	},
})


export const { setPosts, deletePost, sortPosts } = postsSlice.actions

export default postsSlice.reducer