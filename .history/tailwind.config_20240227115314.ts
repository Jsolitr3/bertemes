import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				light: {
					primary: '#47abff',
					seconday: '#7ac2ff',
					accent: '#1494ff',
					neutral: 'e6e6e6',
					'base-100': '#ffffff',
				},
				dark: {
					primary: '#47abff',
					seconday: '#7ac2ff',
					accent: '#1494ff',
					neutral: 'e6e6e6',
					'base-100': '#041635',
				},
			},
		],
	},
} satisfies Config;
