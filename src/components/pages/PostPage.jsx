import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../redux/slices/postSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../UI/Loader/Loader";
import { resetIsLoading } from "../../redux/slices/postSlice";

export default function PostPage() {
	const { postData, isLoading } = useSelector(store => store.post);
	const id = useParams().id;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPost(id));

		return () => {
			dispatch(resetIsLoading())
		}
	}, []);

	if (isLoading) {
		return (
			<>
				<h1>{postData.title}</h1>
				<p>{postData.description}</p>
			</>

		)
	} else {
		return <Loader></Loader>
	}

}