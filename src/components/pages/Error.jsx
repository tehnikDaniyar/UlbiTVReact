import react from "react";
import { useRouteError } from "react-router-dom";


export default function Error() {
	const error = useRouteError();
	return (
		<>
			<h1 style={{ color: 'red' }}>{error.message}</h1>
		</>
	)
}