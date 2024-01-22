import PostList from "./components/PostList"
import Form from './components/Form'
import SortPosts from "./components/Sort/SortPosts"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import SearchInput from "./components/SearchInput/SearchInput"
import { getPosts } from "./redux/slices/postsSlice"



function App() {
	console.log('App');


	const dispatch = useDispatch();


	useEffect(() => {
		dispatch(getPosts());
	}, []);


	return (

		<div className="App">
			<Form></Form>

			<hr style={{ margin: '30px 0' }} />
			<h2 style={{ margin: '0 0 20px 0' }}>Сортировка</h2>

			<SortPosts></SortPosts>



			<hr style={{ margin: '30px 0' }} />

			<h2>Поиск</h2>


			<SearchInput></SearchInput>

			<PostList title={'список постов LP'}></PostList>


		</div >


	)



}

export default App
