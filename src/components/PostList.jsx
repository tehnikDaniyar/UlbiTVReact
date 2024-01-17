import react from "react";
import PostItem from "./PostItem";
import { useSelector, useDispatch } from 'react-redux'

export default function PostList({ title }) {

	const posts = useSelector((state) => state.posts.value);


	return (
		<>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			{posts.map((post) => <PostItem key={post.id} post={post} description={post.description}></PostItem >)
			}
		</>
	)
}