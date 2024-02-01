import react from "react";
import styles from './stylesModal.module.scss'
import { useSelector, useDispatch } from "react-redux"
import { setIsOpen } from "../../redux/slices/modalSlice"


export default function Modal({ children }) {
	const isOpen = useSelector(store => store.modal.isOpen);
	const dispatch = useDispatch();

	const classes = [styles.modal, isOpen ? styles.active : ''];


	return (
		<div className={classes.join(' ')} onClick={() => dispatch(setIsOpen(false))}>
			<div className={styles.content} onClick={(e) => { e.stopPropagation() }}>
				{children}
			</div>
		</div>
	)
}