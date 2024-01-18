import react from "react";
import styles from './style.module.css'

export default function MySelect({ options, defaultValue, ...props }) {

	return (
		<select className={styles.mySelect} {...props} >
			<option value="default" disabled>{defaultValue}</option>
			{options.map(option => <option key={option.name} value={option.name}>{option.text}</option>)}
		</select >
	)
}