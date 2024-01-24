import { useEffect } from "react";
import PostItem from "./PostItem";
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from "../redux/slices/postsSlice"


export default function PostList({ title }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	const { value, isLoading } = useSelector((store) => store.posts);

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>

			{isLoading ?
				value.length ?
					value.map((post, index) => <PostItem key={post.id} post={post} index={index}></PostItem >)
					: <h2>Посты не найдены</h2>
				: <h2>PRELOADER</h2>
			}

		</>
	)
}