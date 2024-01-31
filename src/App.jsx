import PostList from "./components/PostList"
import Form from './components/Form'
import SortPosts from "./components/Sort/SortPosts"
import SearchInput from "./components/SearchInput/SearchInput"
import MyButton from "./components/UI/MyButton/MyButton"
import Modal from "./components/Modal/Modal"
import { useState } from "react"



function App() {
	console.log('App');

	const [isOpen, setIsOpen] = useState(false);

	return (

		<div className="App">
			<MyButton onClick={() => setIsOpen(true)}>Добавить пост</MyButton>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen}><Form></Form></Modal>

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
