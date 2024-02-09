import react from "react";
import styles from './loginStyle.module.scss'
import { useSelector, useDispatch } from "react-redux";
import { setIsAuth } from "../../redux/slices/postsSlice";



export default function Login() {
	const dispatch = useDispatch();
	const isAuth = useSelector(store => store.posts.isAuth);


	const autorization = (e) => {
		e.preventDefault();
		dispatch(setIsAuth(true));
	}

	return (
		<>
			<form className={styles.form}>
				<input className={styles.input} type="text" placeholder="login" />
				<input className={styles.input} type="password" placeholder="password" />
				<button className={styles.button} onClick={(e) => autorization(e)}>Login</button>
			</form>
		</>
	)
}