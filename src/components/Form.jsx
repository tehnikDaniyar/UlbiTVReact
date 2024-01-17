import react, { useRef, useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../redux/slices/postsSlice";


export default function From() {

	const posts = useSelector((state) => state.posts.value)
	const dispatch = useDispatch();


	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');


	const addPost = (e) => {
		e.preventDefault();
		const newPost = {
			id: new Date().getTime(),
			title: title,
			description: body
		};

		dispatch(setPosts(newPost))
	};

	const bodyInputRev = useRef();


	return (
		<form>
			<MyInput onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Введите название" />
			<MyInput onChange={(e) => setBody(e.target.value)} value={body} type="text" placeholder="Добавте описание" />
			<MyButton onClick={(e) => addPost(e)}>Добавить</MyButton>
		</form>
	)
} 