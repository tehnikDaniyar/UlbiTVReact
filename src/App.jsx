import React, { useState } from "react"
import PostList from "./components/PostList"
import Form from './components/Form'

function App() {



	return (

		<div className="App">
			<Form></Form>
			<PostList title={'список постов LP'}></PostList>
		</div >
	)

}

export default App
