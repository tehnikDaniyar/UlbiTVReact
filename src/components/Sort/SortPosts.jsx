import react, { useState, useEffect } from "react";
import MySelect from "../UI/MySelect/MySelect";
import { useSelector, useDispatch } from "react-redux";
import { setSortProperty } from "../../redux/slices/postsSlice";

export default function SortPosts() {
	console.log('SORT')
	const dispatch = useDispatch();
	const sortProperty = useSelector((store) => store.posts.sortProperty);
	const { isLoading } = useSelector(store => store.posts);


	return (
		<MySelect
			onChange={(e) => { dispatch(setSortProperty(e.target.value)) }}
			defaultValue={"Сортировка по"}
			options={[
				{ name: 'title', text: 'по имени' },
				{ name: 'description', text: 'по описанию' },
			]}>
		</MySelect>
	)
}