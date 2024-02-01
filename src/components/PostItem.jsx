import MyButton from "./UI/MyButton/MyButton";
import { useDispatch } from "react-redux";
import { deletePosts } from "../redux/slices/postsSlice";
import { setSearchedPosts } from "../redux/slices/postsSlice";
import { useState } from "react";
import Confirm from "./Confirm/Confirm";
import { useSelector } from "react-redux";


export default function PostItem({ post, index }) {
	const [showConfirm, setShowConfirm] = useState(false);
	const dispatch = useDispatch();
	const confirmValue = useSelector(store => store.confirm.value);


	const deleteData = (id) => {
		dispatch(deletePosts(id));
		dispatch(setSearchedPosts({ searchedPosts: [], searchQuery: '' }));
	}
	return (
		<>
			<div className="post">
				<div className="post__content">
					<strong style={{ marginBottom: '10px', display: 'block' }}>{index + 1}. {post.title}</strong>
					<div>
						{post.description}
					</div>
				</div>
				<div className="btns">
					<MyButton onClick={() => deleteData(post.id)}>delete</MyButton>
				</div>
				{showConfirm ? <Confirm></Confirm> : ''}
			</div >
		</>
	)
}	