import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: false
}

export const confirmSlice = createSlice({
	name: 'confirm',
	initialState,
	reducers: {
		setConfirm: (state, action) => {
			console.log('!!!!!!!!!!!!!!!@222222222222222')
			state.value = action.payload;
		}
	}
})


export const { setConfirm } = confirmSlice.actions

export default confirmSlice.reducer