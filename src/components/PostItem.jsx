import react from "react";
import MyButton from "./UI/MyButton/MyButton";
import { useDispatch } from "react-redux";
// import { deletePost } from "../redux/slices/postsSlice";
import { deletePosts } from "../redux/slices/postsSlice";


export default function PostItem({ post, index }) {

	const dispatch = useDispatch();
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
					<MyButton onClick={() => dispatch(deletePosts())}>delete</MyButton>
				</div>
			</div>
		</>
	)
}	