import { redirect } from '@remix-run/node';

export const loader = () => {
	return redirect('/home', { status: 301 });
};