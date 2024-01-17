import react from "react";
import MyButton from "./UI/MyButton/MyButton";


export default function PostItem({ post, description }) {


	return (
		<>
			<div className="post">
				<div className="post__content">
					<strong style={{ marginBottom: '10px', display: 'block' }}>{post.id}. {post.title}</strong>
					<div>
						{description}
					</div>
				</div>
				<div className="btns">
					<MyButton>Удалить</MyButton>
				</div>
			</div>
		</>
	)
}	