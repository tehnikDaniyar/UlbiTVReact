import MyButton from "../UI/MyButton/MyButton";
import { useDispatch } from "react-redux";
import { setSearchedPosts } from "../../redux/slices/postsSlice";
import { useEffect, useState } from "react";
import { deletePosts } from "../../redux/slices/postsSlice";
import { useSelector } from "react-redux";
import styles from './styles.module.scss'
import { useNavigate } from "react-router-dom";


export default function PostItem({ post, index }) {
	const dispatch = useDispatch();
	const [hide, setHide] = useState('');
	const currentPage = useSelector(store => store.posts.paginationInfo.currentPage);
	const sortProperty = useSelector(store => store.posts.sortProperty);
	const router = useNavigate();
	const deleteData = (id) => {
		setHide('hide');
		setTimeout(() => {
			dispatch(deletePosts({ id: id, currentPage: currentPage, sortProperty: sortProperty }));
			dispatch(setSearchedPosts({ searchedPosts: [], searchQuery: '' }));
		}, 800)
	};




	return (
		<>
			<div className={`${styles.post} ${styles.view} ${hide}`}>
				<div>
					<strong style={{ marginBottom: '10px', display: 'block' }}>{index + 1}. {post.title}</strong>
					<div>
						{post.description}
					</div>
				</div>
				<div className={styles.btns}>
					<MyButton onClick={() => deleteData(post.id)}>delete</MyButton>
					<MyButton onClick={() => router(`/post/${post.id}`)}>open</MyButton>
				</div>
			</div >
		</>
	)
}	 