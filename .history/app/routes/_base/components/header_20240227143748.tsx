import { Link } from '@remix-run/react';
import Logo from '~/images/icons/logo';

//Business header with icon and name in the middle
// links underneath
export default function Header() {
	return (
		<div className='flex justify-between items-center p-4 h-20 overflow-hidden'>
			<div className='flex items-center'>
				<div className='w-10 h-full relative bg-base-300'>
					<Logo className='w-full h-full absolute' />
				</div>
				<h1 className='text-2xl font-bold ml-2'>Bertemes Johnson & Co</h1>
			</div>
			<nav>
				<ul className='flex space-x-4'>
					<li>
						<Link to={'home'}>Home</Link>
					</li>
					<li>
						<Link to={'about'}>About</Link>
					</li>
					<li>
						<Link to={'services'}>Services</Link>
					</li>
					<li>
						<Link to={'team'}>Team</Link>
					</li>
					<li>
						<Link to={'contact'}>Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
