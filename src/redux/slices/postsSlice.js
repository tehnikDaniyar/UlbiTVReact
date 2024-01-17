import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: [
		{ id: 1, title: 'javascript', description: 'fddssdcd' },
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
			console.log(action);
			state.value = [...state.value, action.payload]
		},
	},
})


export const { setPosts } = postsSlice.actions

export default postsSlice.reducer