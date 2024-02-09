import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setIsAuth } from '../../redux/slices/postsSlice';

export default function TemporaryDrawer() {
	const [state, setState] = React.useState({
		nav: false,
	});
	const dispatch = useDispatch();


	const isAuth = useSelector(store => store.posts.isAuth);
	console.log(Boolean(isAuth) === true);

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const links = [
		{ to: '/posts', onClick: toggleDrawer('nav', false), text: 'posts', private: true },
		{ to: '/', onClick: toggleDrawer('nav', false), text: 'home', private: false },
		{ to: '/news', onClick: toggleDrawer('nav', false), text: 'news', private: false }
	];

	const logOut = (e) => {
		e.preventDefault;
		dispatch(setIsAuth(false));
		localStorage.setItem('isAuth', false);
	}


	return (
		<div style={{ position: 'absolute', width: '100%', top: '0', left: '0' }}>
			{['nav'].map((anchor) => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						<div style={{ backgroundColor: 'white', width: '200px', display: 'flex', flexDirection: 'column' }}>
							{links.map(link => {

								return (
									(link.private ? link.private == isAuth : true) &&
									<Link to={link.to} onClick={link.onClick}>{link.text}</Link>
								)
							})}
							{isAuth && <Button onClick={(e) => logOut(e)}>exit</Button>}
						</div>
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}