import { Link } from '@remix-run/react';
import Logo from '~/images/icons/logo';

//Business header with icon and name in the middle
// links underneath
export default function Header() {
	return (
		<div className='flex flex-col justify-between items-center p-4 h-28 overflow-hidden bg-secondary text-secondary-content'>
			<div className='h-12 w-full justify-center flex items-center'>
				<div className='h-full aspect-square relative'>
					<Logo className='absolute' />
				</div>
				<h1 className='text-3xl font-bold ml-2'>Bertemes Johnson & Company</h1>
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
