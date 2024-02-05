import PostList from "../PostList"
import Form from '../Form'
import SortPosts from "../Sort/SortPosts"
import MyButton from "../UI/MyButton/MyButton"
import { useDispatch } from "react-redux"
import { setIsOpen } from "../../redux/slices/modalSlice"
import { getPosts } from "../../redux/slices/postsSlice"
import Modal from "../Modal/Modal"
import SearchInput from '../SearchInput/SearchInput'

function Posts() {
	console.log('POSTS');
	const dispatch = useDispatch();

	return (

		<>
			<MyButton onClick={() => dispatch(setIsOpen(true))}>Добавить пост</MyButton>
			<Modal><Form></Form></Modal>

			<hr style={{ margin: '30px 0' }} />

			<h2 style={{ margin: '0 0 20px 0' }}>Сортировка</h2>
			<SortPosts></SortPosts>
			<hr style={{ margin: '30px 0' }} />

			<h2>Поиск</h2>
			<SearchInput></SearchInput>

			<PostList title={'список постов LP'} getData={getPosts}></PostList>
		</>
	)



}

export default Posts
