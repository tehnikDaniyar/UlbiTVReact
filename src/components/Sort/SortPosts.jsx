import react, { useState, useEffect } from "react";
import MySelect from "../UI/MySelect/MySelect";
import { useSelector, useDispatch } from "react-redux";
import { setSortProperty } from "../../redux/slices/postsSlice";
import { sortPost } from "../../redux/slices/postsSlice";

export default function SortPosts() {
	const dispatch = useDispatch();
	const sortProperty = useSelector((store) => store.posts.sortProperty);
	const { isLoading } = useSelector(store => store.posts);

	useEffect(() => {
		isLoading ?
			dispatch(sortPost('title')) :
			''
	}, [isLoading]);

	return (
		<MySelect
			onChange={(e) => dispatch(sortPost(e.target.value))}
			defaultValue={"Сортировка по"}
			options={[
				{ name: 'title', text: 'по имени' },
				{ name: 'description', text: 'по описанию' },
			]}>
		</MySelect>
	)
}