import { Outlet } from '@remix-run/react';
import Header from './components/header';
import Footer from './components/footer';
import logoFull from '~/resources/images/logo-full.png';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Bertemes Johnson & Co' },
		{
			name: 'description',
			content:
				'Professional CPA services for local small businesses in Northeast Ohio. Expertise in tax preparation, payroll, QuickBooks, and assurance services.',
		},
		{
			name: 'keywords',
			content:
				'CPA firm, Northeast Ohio, small business, tax preparation, payroll services, QuickBooks, assurance services',
		},
		{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
		{ name: 'robots', content: 'index, follow' },
		{ name: 'author', content: 'Bertemes Johnson & Co' },
		{ name: 'googlebot', content: 'index, follow' },
		/* Open Graph (OG) tags for social media sharing */
		{ property: 'og:title', content: 'Bertemes Johnson & Co' },
		{
			property: 'og:description',
			content:
				'Professional CPA services for local small businesses in Northeast Ohio. Expertise in tax preparation, payroll, QuickBooks, and assurance services.',
		},
		{ property: 'og:type', content: 'website' },
		{ property: 'og:url', content: 'https://tldre.com' },
		{ property: 'og:image', content: logoFull },
		/* Twitter Card tags */
		{ name: 'twitter:card', content: 'summary_large_image' },
		// {name:"twitter:site", content:"@bertemesjohnson"},
		// {name:"twitter:creator", content:"@bertemesjohnson"},
		{ name: 'twitter:title', content: 'Bertemes Johnson & Co' },
		{
			name: 'twitter:description',
			content:
				'Professional CPA services for local small businesses in Northeast Ohio. Expertise in tax preparation, payroll, QuickBooks, and assurance services.',
		},
		{ name: 'twitter:image', content: logoFull },
	];
};

//Header for the app
export default function Route() {
	return (
		<>
			<Header />
			<div className='grow w-full'>
				<Outlet />
			</div>
			<Footer />
		</>
	);
}
