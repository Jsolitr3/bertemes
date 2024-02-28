import { Outlet } from '@remix-run/react';
import Header from './components/header';

//Header for the app
export default function Route() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
