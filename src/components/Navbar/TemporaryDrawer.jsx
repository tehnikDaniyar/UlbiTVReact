import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
	const [state, setState] = React.useState({
		nav: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};



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
							<Link to="/posts" onClick={toggleDrawer(anchor, false)}>posts</Link>
							<Link to="/" onClick={toggleDrawer(anchor, false)}>home</Link>
						</div>
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}