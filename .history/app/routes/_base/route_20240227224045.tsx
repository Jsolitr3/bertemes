import { Outlet } from '@remix-run/react';
import Header from './components/header';
import Footer from './components/footer';

//Header for the app
export default function Route() {
	return (
		<>
			<Header />
			<div className='min-h-full h-full'>
				<Outlet />
			</div>
			<Footer />
		</>
	);
}
