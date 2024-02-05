import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { useSelector, useDispatch } from 'react-redux'
import Loader from "./UI/Loader/Loader"
// import Pagination from "./Pagination/Pagination";
import { setCurrentPage } from "../redux/slices/postsSlice";
import { Pagination } from "@mui/material";



export default function PostList({ title, getData }) {
	console.log('LIST');
	const dispatch = useDispatch();
	const sortProperty = useSelector(store => store.posts.sortProperty);
	const currentPage = useSelector(store => store.posts.paginationInfo.currentPage);
	const totalPages = useSelector(store => store.posts.paginationInfo.pages);
	const prevPage = useSelector(store => store.posts.paginationInfo.prev);
	const nextPage = useSelector(store => store.posts.paginationInfo.next);
	const { value, isLoading, searchedData } = useSelector((store) => store.posts);
	const data = searchedData.searchedPosts.length || searchedData.searchQuery.length ? searchedData.searchedPosts : value;
	const handleChangeCurrentPage = (p) => {
		dispatch(setCurrentPage(Number(p)));
	};
	const [page, setPage] = useState(1);
	console.log(page)

	useEffect(() => {
		dispatch(getData({ sortProperty, currentPage }));
	}, [sortProperty, currentPage]);



	return (
		<>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>

			{/* <Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={totalPages}
				prevPage={prevPage}
				nextPage={nextPage}
			></Pagination> */}

			<Pagination
				count={totalPages}
				onChange={(e, num) => handleChangeCurrentPage(num)}
				page={currentPage}
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



			{/* <Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={totalPages}
				prevPage={prevPage}
				nextPage={nextPage}
			></Pagination> */}

		</>
	)
}