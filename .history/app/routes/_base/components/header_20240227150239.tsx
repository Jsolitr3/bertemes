import Logo from '~/images/icons/logo';
import { NavLink, type NavLinkProps } from '@remix-run/react';

//Business header with icon and name in the middle
// links underneath
export default function Header() {
	// const navLinkClass = ({ isActive, isPending }: any) =>
	// 	`text-lg ${isActive ? 'font-bold' : ''} ${isPending ? 'animate-pulse' : ''}`;

	return (
		<div className='relative flex flex-col justify-between items-center p-4 h-28 overflow-hidden bg-secondary text-secondary-content'>
			<div className='absolute w-full h-full opacity-20 top-0 left-0 bg-gradient-to-tr from-transparent from-25% to-white' />
			<div className='h-10 w-full justify-center flex items-center'>
				<div className='h-full aspect-square relative'>
					<Logo className='absolute' />
				</div>
				<h1 className='text-3xl ml-2'>Bertemes Johnson & Company</h1>
			</div>
			<nav>
				<ul className='flex space-x-4'>
					<li>
						<NavLink to={'home'}>Home</NavLink>
					</li>
					<li>
						<NavLink to={'about'}>About</NavLink>
					</li>
					<li>
						<NavLink to={'services'}>Services</NavLink>
					</li>
					<li>
						<NavLink to={'team'}>Team</NavLink>
					</li>
					<li>
						<NavLink to={'contact'}>Contact</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}
