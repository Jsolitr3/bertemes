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
		{ name: 'description', content: 'Bertemes Johnson & Company Accounting Firm' },
		{ name: 'og:image', content: logoFull },
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
