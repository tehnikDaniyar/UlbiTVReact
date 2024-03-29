import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import postServices from '../../API/postServices';


export const getPosts = createAsyncThunk(
	"posts/getPosts",
	async function ({ sortProperty, currentPage }, { rejectWithValue, dispatch }) {
		try {
			const data = await postServices.getPosts(sortProperty, currentPage);
			return data === 'Not found' ? [] : data;
		} catch (error) {
			console.log(error);
			return []
		}
	}
);

export const deletePosts = createAsyncThunk(
	"posts/deletePosts",
	async function (props, { rejectWithValue, dispatch }) {
		try {
			console.log('start deleting', props)
			await postServices.deletePost(props.id);
			dispatch(getPosts({ sortProperty: props.sortProperty, currentPage: props.currentPage }))
			// postServices.getPosts(props.sortProperty, props.currentPage)

		} catch (error) {
			dispatch(getPosts({ sortProperty: props.sortProperty, currentPage: props.currentPage }))
			console.error(error);
		}
	}
);

export const setPosts = createAsyncThunk(
	"posts/setPost",
	async function (post, { rejectWithValue, dispatch }) {
		try {
			const postData = JSON.stringify(post.post);
			console.log('POSTDATA!!!!!!!!!!!!', postData)
			await postServices.setPost(postData);
			console.log('currentPage', post.currentPage)
			// postServices.getPosts(post.sortProperty, post.currentPage);
			dispatch(getPosts({ sortProperty: post.sortProperty, currentPage: post.currentPage }))

		} catch (error) {
			console.log(error);
		}
	}
)

export const searchPosts = createAsyncThunk(
	"posts/searchPosts",
	async function (searchQuery, { rejectWithValue, dispatch }) {
		try {
			const data = await postServices.searchPost(searchQuery);
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
	sortProperty: 'title',
	isOnline: true,
	paginationInfo: {
		currentPage: 1,
	},
	isAuth: Boolean(localStorage.getItem('isAuth')) || false,

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
		},
		setSearchedPosts: (state, action) => {
			state.searchedData.searchedPosts = action.payload.searchedPosts;
			state.searchedData.searchQuery = action.payload.searchQuery;
		},
		setCurrentPage: (state, action) => {
			state.paginationInfo.currentPage = action.payload;
		},
		setIsAuth: (state, action) => {
			state.isAuth = action.payload;
			localStorage.setItem('isAuth', action.payload);
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(
				getPosts.fulfilled, (state, actions) => {
					state.value = actions.payload.data;
					state.isLoading = true;
					state.paginationInfo = { ...state.paginationInfo, ...actions.payload, data: '' }
				}
			)
			.addCase(
				deletePosts.fulfilled, (state, action) => {
				}
			)
			// .addCase(
			// 	setPosts.fulfilled, (store, action) => {
			// 		sortPost(store.sortProperty);
			// 	}
			// )
			.addCase(
				searchPosts.fulfilled, (store, action) => {
					store.value = action.payload;
				}
			)
	}
})


export const { searchPost, setSortProperty, setSearchedPosts, setCurrentPage, setIsAuth } = postsSlice.actions

export default postsSlice.reducer