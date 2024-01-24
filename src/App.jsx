import PostList from "./components/PostList"
import Form from './components/Form'
import SortPosts from "./components/Sort/SortPosts"
import SearchInput from "./components/SearchInput/SearchInput"



function App() {
	console.log('App');

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
