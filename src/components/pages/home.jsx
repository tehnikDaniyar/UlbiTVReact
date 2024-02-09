import react from "react";
import TemporaryDrawer from '../Navbar/TemporaryDrawer'
import { Outlet } from "react-router-dom";



export default function Home() {
	console.log('rendered HOME')
	return (
		<>
			<h1>Home</h1>
			<TemporaryDrawer></TemporaryDrawer>
			<Outlet></Outlet>
		</>
	)
}