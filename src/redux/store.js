import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'
import confirmReducer from './slices/confirmSlice'

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		confirm: confirmReducer
	},
})