import { useRef, useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import { setPosts } from "../redux/slices/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedPosts } from "../redux/slices/postsSlice";
import { setIsOpen } from "../redux/slices/modalSlice";

export default function From() {
	const dispatch = useDispatch();
	const [post, setPost] = useState({ title: '', description: '' });
	const sortProperty = useSelector(store => store.posts.sortProperty);
	const currentPage = useSelector(store => store.posts.paginationInfo.currentPage);

	const addPost = (e) => {
		e.preventDefault();
		const props = {
			post: { id: `${new Date().getTime()}`, ...post },
			sortProperty: sortProperty,
			currentPage: currentPage
		}
		dispatch(setPosts(props));
		setPost({ title: '', description: '' })
		dispatch(setSearchedPosts({ searchedPosts: [], searchQuery: '' }));
		dispatch(setIsOpen(false));
	};


	return (
		<form>
			<MyInput
				onChange={(e) => setPost({ ...post, title: e.target.value })}
				value={post.title}
				type="text"
				placeholder="Введите название" />
			<MyInput
				onChange={(e) => setPost({ ...post, description: e.target.value })}
				value={post.description}
				type="text"
				placeholder="Добавте описание" />
			<MyButton onClick={(e) => addPost(e)}>Добавить</MyButton>
		</form>
	)
} 