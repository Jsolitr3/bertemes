import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import tailwindStyle from './styles/tailwind.css';
import Logo from './resources/images/icons/logo';
import ReactDomServer from 'react-dom/server';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: tailwindStyle },
	{
		rel: 'icon',
		href: `data:image/svg+xml;utf8,${encodeURIComponent(ReactDomServer.renderToString(<Logo color='#47abff' />))}`,
	},
];

export default function App() {
	return (
		<html lang='en' data-theme='light'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body className='min-h-screen'>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
