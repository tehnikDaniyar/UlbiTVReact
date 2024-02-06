import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { useSelector, useDispatch } from 'react-redux'
import Loader from "./UI/Loader/Loader"
import { setCurrentPage } from "../redux/slices/postsSlice";
import { Pagination, Typography } from "@mui/material";



export default function PostList({ title, getData }) {
	console.log('LIST');
	const dispatch = useDispatch();
	const sortProperty = useSelector(store => store.posts.sortProperty);
	const currentPage = useSelector(store => store.posts.paginationInfo.currentPage);
	const totalPages = useSelector(store => store.posts.paginationInfo.pages);
	const { value, isLoading, searchedData } = useSelector((store) => store.posts);
	const data = searchedData.searchedPosts.length || searchedData.searchQuery.length ? searchedData.searchedPosts : value;
	const handleChangeCurrentPage = (p) => {
		dispatch(setCurrentPage(Number(p)));
	};
	useEffect(() => {
		dispatch(getData({ sortProperty, currentPage }));
	}, [sortProperty, currentPage]);



	return (
		<>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>

			<Typography>Page: {currentPage}</Typography>
			<Pagination
				count={totalPages}
				onChange={(e, num) => handleChangeCurrentPage(num)}
				page={currentPage}
				color="primary"
				size="large"
				showFirstButton={true}
				showLastButton={true}
			>
			</Pagination>


			{

				isLoading
					?

					data.length
						? data.map((post, index) => <PostItem key={post.id} post={post} index={index}></PostItem >)
						: <h2>Посты не найдены</h2>

					: <div style={{ display: 'flex', justifyContent: 'center' }}><Loader></Loader></div>
			}



			<Typography>Page: {currentPage}</Typography>
			<Pagination
				count={totalPages}
				onChange={(e, num) => handleChangeCurrentPage(num)}
				page={currentPage}
				color="primary"
				size="large"
				showFirstButton={true}
				showLastButton={true}
			>
			</Pagination>

		</>
	)
}