import react from "react";
import styles from './styles.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setConfirm } from "../../redux/slices/confirmSlice";

export default function Confirm() {
	const dispatch = useDispatch();
	const confirmValue = useSelector(store => store.confirm.value);
	console.log(confirmValue);

	return (
		<div className={styles.confirm}>
			<button onClick={() => dispatch(setConfirm(true))}>Yes</button>
		</div>
	)
}