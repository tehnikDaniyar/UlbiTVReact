import { useState } from "react";
import MyInput from "../UI/MyInput/MyInput";
import styles from './style.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setSearchedPosts } from "../../redux/slices/postsSlice";


export default function SearchInput() {
	const posts = useSelector(store => store.posts.value);
	const [searchQuery, setSearchQuery] = useState('');
	console.log('searchInput', searchQuery);

	const dispatch = useDispatch();

	const searchData = (query) => {
		setSearchQuery(query);
		const searchedPosts = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()) || post.description.toLowerCase().includes(query.toLowerCase()));
		const searchQuery = query;
		dispatch(setSearchedPosts({ searchedPosts, searchQuery }));
	}

	return (
		<div className={styles.wrapper}>
			<MyInput placeholder={'поиск...'} value={searchQuery} onChange={(e) => searchData(e.target.value)} ></MyInput>
		</div>
	)
}