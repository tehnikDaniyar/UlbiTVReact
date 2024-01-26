import { useEffect } from "react";
import PostItem from "./PostItem";
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from "../redux/slices/postsSlice"


export default function PostList({ title, posts }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	const { value, isLoading, searchedData } = useSelector((store) => store.posts);
	console.log(searchedData, value)
	const data = searchedData.searchedPosts.length || searchedData.searchQuery.length ? searchedData.searchedPosts : value;
	console.log(data, '!!!!!!!!!!!!!')

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>

			{isLoading ?
				data.length ?
					data.map((post, index) => <PostItem key={post.id} post={post} index={index}></PostItem >)
					: <h2>Посты не найдены</h2>
				: <h2>PRELOADER</h2>
			}

		</>
	)
}