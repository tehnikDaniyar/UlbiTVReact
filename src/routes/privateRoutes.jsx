import Posts from "../components/pages/Posts"
import PostItem from "../components/PostItem/PostItem"
import PostPage from "../components/pages/PostPage"
import { Navigate } from "react-router-dom"

export default function privateRoutes() {
	return (
		[
			{ path: '/posts', element: <Posts></Posts> },
			{ path: '/post/:id', element: <PostPage></PostPage> },
			{ path: '*', element: <Navigate to="/"></Navigate> }
		]
	)
}