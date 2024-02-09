import Login from "../components/Login/Login"

export default function publicRoutes() {
	return (
		[
			{ path: '*', element: <Login></Login> }
		]
	)
}