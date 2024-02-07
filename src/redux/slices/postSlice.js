import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import postServices from '../../API/postServices';


export const getPost = createAsyncThunk(
	'post/getPost',
	async (props, { rejectWithValue, dispatch }) => {
		try {
			const data = await postServices.getPostData(props);
			return data;
		}
		catch {
			return false;
		}
	}
);


const initialState = {
	postData: [
	],
	isLoading: false
}
export const postsSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		resetIsLoading: (state, action) => {
			state.isLoading = false;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getPost.fulfilled, (state, action) => {
			state.postData = action.payload;
			state.isLoading = true;
		})
	}
})
export const { resetIsLoading } = postsSlice.actions
export default postsSlice.reducer