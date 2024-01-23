import react from "react";
import PostItem from "./PostItem";
import { useSelector, useDispatch } from 'react-redux'

export default function PostList({ title }) {
	console.log('PostList')
	const { value, isLoading } = useSelector((store) => store.posts);


	return (
		<>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>

			{isLoading
				?
				value.length ? value.map((post, index) => <PostItem key={post.id} post={post} index={index}></PostItem >) : <h2>Посты не найдены</h2>
				:
				<h2>PRELOADER</h2>
			}

		</>
	)
}