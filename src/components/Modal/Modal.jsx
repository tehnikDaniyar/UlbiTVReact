import react from "react";
import styles from './stylesModal.module.scss'

export default function Modal({ children, isOpen, setIsOpen }) {

	const classes = [styles.modal, isOpen ? styles.active : ''];

	const closeModal = (e) => {
		setIsOpen(false);
	}

	return (
		<div className={classes.join(' ')} onClick={(e) => closeModal(e)}>
			<div className={styles.content} onClick={(e) => { e.stopPropagation() }}>
				{children}
			</div>
		</div>
	)
}