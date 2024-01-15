import React, { useState } from "react"
import PostList from "./components/PostList"

function App() {

	const [posts, setPosts] = useState([
		{ id: 1, title: 'javascript' },
		{ id: 2, title: 'python' },
		{ id: 3, title: 'C' },
		{ id: 4, title: 'C++' },
	])

	const [CPUs, setCPUs] = useState([
		{ id: 1, title: 'Intel' },
		{ id: 2, title: 'AMD' },
	])

	return (

		<div className="App">
			<PostList posts={posts} title={'список постов LP'}></PostList>
			<PostList posts={CPUs} title={'список постов CPUs'}></PostList>
		</div >
	)

}

export default App
