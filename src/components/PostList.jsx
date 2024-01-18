import react from "react";
import PostItem from "./PostItem";
import { useSelector, useDispatch } from 'react-redux'

export default function PostList({ title }) {

	const posts = useSelector((state) => state.posts.value);


	return (
		<>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>

			{posts.length > 0
				? posts.map((post, index) => <PostItem key={post.id} post={post} index={index}></PostItem >)
				: <div style={{ textAlign: 'center', fontSize: '28px' }}>Посты не найдены</div>
			}
		</>
	)
}