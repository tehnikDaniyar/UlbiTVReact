import react from "react";
import styles from './style.module.css'


export default react.forwardRef(
	function MyInput(props, ref) {

		return (
			<input ref={ref} type="text" {...props} className={styles.myInput} />
		)
	}
) 