import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import tailwindStyle from './styles/tailwind.css';
import Logo from './images/icons/logo';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: tailwindStyle },
	{ rel: 'icon', href: Logo },
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
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
