import react from "react";
import style from './style.module.css'



export default function MyButton({ children, ...props }) {
	return (
		<button className={style.myBtn} {...props}>{children}</button>
	)
}
