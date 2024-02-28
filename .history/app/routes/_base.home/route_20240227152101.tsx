import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Bertemes Johnson & Co' },
		{ name: 'description', content: 'Bertemes Johnson & Company Accounting Firm' },
	];
};

export default function Index() {
	return <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}></div>;
}
