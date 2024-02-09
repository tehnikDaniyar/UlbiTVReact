import Posts from "../components/pages/Posts"
import PostItem from "../components/PostItem/PostItem"

export default function privateRoutes() {
	return (
		[
			{ path: '/posts', element: <Posts></Posts> },
			{ path: '/post/:id', element: <PostItem></PostItem> }
		]
	)
}