import { Route, Routes } from "react-router-dom"
import Posts from "./components/pages/Posts";
import Home from "./components/pages/home";
import TemporaryDrawer from "./components/Navbar/TemporaryDrawer";
import Error from "./components/pages/Error";

function App() {
	console.log('App');

	return (

		<div className="App">
			<TemporaryDrawer></TemporaryDrawer>
			<Routes>
				<Route path="/posts" element={<Posts></Posts>} />
				<Route path="/" element={<Home></Home>} />
				<Route path="*" element={<Error></Error>}></Route>
			</Routes>

		</div >
	)



}

export default App
