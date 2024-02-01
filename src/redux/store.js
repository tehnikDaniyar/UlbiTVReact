import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'
import modalReducer from './slices/modalSlice'

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		modal: modalReducer
	},
})