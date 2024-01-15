import react from "react";
export default function PostItem({ index, title }) {

	console.log(index, title);
	return (
		<>
			<div className="post">
				<div className="post__content">
					<strong>{index + 1}. {title}</strong>
					<div>
						{title}
					</div>
				</div>
				<div className="btns">
					<button>Удалить</button>
				</div>
			</div>
		</>
	)
}	