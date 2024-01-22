import react, { useState, useEffect } from "react";
import MySelect from "../UI/MySelect/MySelect";
import { useSelector, useDispatch } from "react-redux";
import { sortPosts } from "../../redux/slices/postsSlice";

export default function SortPosts() {
	const dispatch = useDispatch();

	const { isLoading } = useSelector(store => store.posts);
	const [sortProperty, setSortProperty] = useState('title');

	useEffect(() => {
		isLoading ?
			dispatch(sortPosts(sortProperty)) :
			''
	}, [sortProperty, isLoading]);

	return (
		<MySelect
			onChange={(e) => setSortProperty(e.target.value)}
			defaultValue={"Сортировка по"}
			options={[
				{ name: 'title', text: 'по имени' },
				{ name: 'description', text: 'по описанию' },
			]}>
		</MySelect>
	)
}