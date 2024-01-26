import react, { useState } from "react";
import MyInput from "../UI/MyInput/MyInput";
import SearchIcon from "./SearchIcon";
import styles from './style.module.css'
import { searchPosts } from "../../redux/slices/postsSlice";
import { searchPost } from "../../redux/slices/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../UI/MyButton/MyButton";
import { getPosts } from "../../redux/slices/postsSlice";
import { setSearchedPosts } from "../../redux/slices/postsSlice";


export default function SearchInput() {
	console.log('searchInput')
	const posts = useSelector(store => store.posts.value);
	const [searchQuery, setSearchQuery] = useState('');

	const dispatch = useDispatch();


	const search = (query) => {
		dispatch(searchPost(query))
	};

	const searchData = (query) => {
		setSearchQuery(query);
		const searchedPosts = posts.filter(post => post.title.includes(query));
		const searchQuery = query;
		dispatch(setSearchedPosts({ searchedPosts, searchQuery }));
	}

	return (
		<div className={styles.wrapper}>
			<MyInput placeholder={'поиск...'} value={searchQuery} onChange={(e) => searchData(e.target.value)} ></MyInput>
			<SearchIcon className={styles.icon} onClick={() => search(searchQuery)}></SearchIcon>
			<button className={styles.reset_btn} onClick={() => dispatch(getPosts())}>сброс</button>
		</div>
	)
}