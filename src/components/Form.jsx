import react, { useRef, useState } from "react";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import { useDispatch } from "react-redux";
import { setPosts } from "../redux/slices/postsSlice";


export default function From() {

	const dispatch = useDispatch();
	const [post, setPost] = useState({ title: '', description: '' });

	const addPost = (e) => {
		e.preventDefault();
		dispatch(setPosts({ id: new Date().getTime(), ...post }));
		setPost({ title: '', description: '' })
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