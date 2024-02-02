import { useEffect } from "react";
import PostItem from "./PostItem";
import { useSelector, useDispatch } from 'react-redux'
import Loader from "./UI/Loader/Loader";

export default function PostList({ title, getData }) {
	console.log('LIST');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getData());
	}, []);

	const { value, isLoading, searchedData } = useSelector((store) => store.posts);
	const data = searchedData.searchedPosts.length || searchedData.searchQuery.length ? searchedData.searchedPosts : value;

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>

			{

				(isLoading) ?
					data.length ? data.map((post, index) => <PostItem key={post.id} post={post} index={index}></PostItem >) : <h2>Посты не найдены</h2>
					: <div style={{ display: 'flex', justifyContent: 'center' }}><Loader></Loader></div>
			}

		</>
	)
}