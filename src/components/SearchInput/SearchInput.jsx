import react, { useState } from "react";
import MyInput from "../UI/MyInput/MyInput";
import SearchIcon from "./SearchIcon";
import styles from './style.module.css'
import { searchPost } from "../../redux/slices/postsSlice";
import { useDispatch } from "react-redux";


export default function SearchInput() {
	console.log('component mounted')
	const [searchQuery, setSearchQuery] = useState('');

	const dispatch = useDispatch();

	const search = (query) => {
		dispatch(searchPost(query))
	}

	return (
		<div className={styles.wrapper}>
			<MyInput placeholder={'поиск...'} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} ></MyInput>
			<SearchIcon className={styles.icon} onClick={() => search(searchQuery)}></SearchIcon>
		</div>
	)
}