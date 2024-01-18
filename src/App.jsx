import PostList from "./components/PostList"
import Form from './components/Form'
import MySelect from "./components/UI/MySelect/MySelect"
import { sortPosts } from "./redux/slices/postsSlice"
import { useDispatch } from "react-redux"

function App() {
	const dispatch = useDispatch();

	return (

		<div className="App">
			<Form></Form>

			<hr style={{ margin: '30px 0' }} />

			<MySelect
				onChange={(e) => dispatch(sortPosts(e.target.value))}
				defaultValue={"Сортировка по"}
				options={[
					{ name: 'title', text: 'по имени' },
					{ name: 'discription', text: 'по описанию' },
				]}>
			</MySelect>

			<PostList title={'список постов LP'}></PostList>
		</div >
	)

}

export default App
