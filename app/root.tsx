import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import tailwindStyle from './styles/tailwind.css';
import Logo from './resources/images/icons/logo';
import ReactDomServer from 'react-dom/server';
import logoFull from '~/resources/images/logo-full.png';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: tailwindStyle },
	{
		rel: 'icon',
		href: `data:image/svg+xml;utf8,${encodeURIComponent(ReactDomServer.renderToString(<Logo color='#47abff' />))}`,
	},
];

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

export default function App() {
	return (
		<html lang='en' data-theme='light'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body
				className='min-h-screen h-screen flex flex-col items-center'
				style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}
			>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
