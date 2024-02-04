import react from "react";
import styles from './stylesPagination.module.scss'
import { useSelector, useDispatch } from "react-redux"
import { getArrOfNumbers } from "../../scripts/utilites";

export default function Pagination({ currentPage, totalPages, setCurrentPage, prevPage, nextPage }) {
	const dispatch = useDispatch();
	const arrNumbersPages = getArrOfNumbers(totalPages);

	return (
		<div className={styles.pagination}>
			<div className={`${styles.button} ${styles.prev}`} onClick={() => prevPage && dispatch(setCurrentPage(prevPage))}>prev</div>
			<div className={styles.wrapper}>
				{
					arrNumbersPages.map(number => {
						return (
							<div
								key={number}
								className={currentPage !== number ? styles.button : `${styles.button} ${styles._active}`}
								onClick={() => dispatch(setCurrentPage(number))}
							>
								{number}
							</div>
						)

					})
				}

			</div>

			<div className={`${styles.button} ${styles.next}`} onClick={() => nextPage && dispatch(setCurrentPage(nextPage))}>next</div>
		</div>
	)
}