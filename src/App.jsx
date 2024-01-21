import PostList from "./components/PostList"
import Form from './components/Form'
import MySelect from "./components/UI/MySelect/MySelect"
import MyInput from "./components/UI/MyInput/MyInput"

import { sortPosts } from "./redux/slices/postsSlice"
import { searchPost } from "./redux/slices/postsSlice"

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useState } from "react"
import SearchInput from "./components/SearchInput/SearchInput"


function App() {
	const dispatch = useDispatch();
	const posts = useSelector((store) => store.posts.value);

	const [sortProperty, seteSortProperty] = useState('title');

	useEffect(() => {
		dispatch(sortPosts(sortProperty));
	}, [sortProperty, posts.length]);



	return (

		<div className="App">
			<Form></Form>

			<hr style={{ margin: '30px 0' }} />
			<h2 style={{ margin: '0 0 20px 0' }}>Сортировка</h2>


			<MySelect
				onChange={(e) => seteSortProperty(e.target.value)}
				defaultValue={"Сортировка по"}
				options={[
					{ name: 'title', text: 'по имени' },
					{ name: 'description', text: 'по описанию' },
				]}>
			</MySelect>

			<hr style={{ margin: '30px 0' }} />

			<h2>Поиск</h2>
			<SearchInput></SearchInput>
			<PostList title={'список постов LP'}></PostList>
		</div >
	)

}

export default App
