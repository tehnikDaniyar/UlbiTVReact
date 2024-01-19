import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: [
		{ id: 777, title: 'javascript', description: 'a' },
		{ id: 2, title: 'python', description: 'b' },
		{ id: 3, title: 'C', description: 'd' },
		{ id: 4, title: 'C++', description: 'c' },
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

		}
	},
})


export const { setPosts, deletePost, sortPosts, searchPost } = postsSlice.actions

export default postsSlice.reducer