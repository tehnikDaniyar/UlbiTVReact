import react from "react";
import MyButton from "./UI/MyButton/MyButton";
import { useDispatch } from "react-redux";
import { deletePosts } from "../redux/slices/postsSlice";
import { setSearchedPosts } from "../redux/slices/postsSlice";


export default function PostItem({ post, index }) {

	const dispatch = useDispatch();
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
			</div >
		</>
	)
}	