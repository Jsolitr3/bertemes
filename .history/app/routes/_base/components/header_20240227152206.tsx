import Logo from '~/images/icons/logo';
import { NavLink } from '@remix-run/react';

//Business header with icon and name in the middle
// links underneath
export default function Header() {
	const navLinkClass = ({ isActive, isPending }: any) =>
		`md:text-md ${isActive ? 'underline decoration-primary underline-offset-4 text-primary' : ''} ${
			isPending ? 'animate-pulse' : ''
		}`;

	return (
		<div className='relative z-0 flex flex-col justify-between items-center p-4 h-28 overflow-hidden bg-secondary text-secondary-content'>
			<div className='absolute z-0 w-full h-full opacity-20 top-0 left-0 bg-gradient-to-tr from-transparent from-25% to-white' />
			<div className='h-10 w-full justify-center flex items-center'>
				<div className='h-full aspect-square relative'>
					<Logo className='absolute' />
				</div>
				<h1 className='text-3xl ml-2'>Bertemes Johnson & Company</h1>
			</div>
			<nav className='z-10'>
				<ul className='flex space-x-4 items-center'>
					<li>
						<NavLink to={'home'} className={navLinkClass}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to={'about'} className={navLinkClass}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink to={'services'} className={navLinkClass}>
							Services
						</NavLink>
					</li>
					<li>
						<NavLink to={'team'} className={navLinkClass}>
							Team
						</NavLink>
					</li>
					<li>
						<NavLink to={'contact'} className={navLinkClass}>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}
