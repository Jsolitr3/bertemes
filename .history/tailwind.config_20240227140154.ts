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
					secondary: '#7ac2ff',
					accent: '#1494ff',
					neutral: 'e6e6e6',
					'base-100': '#ffffff',
					dark: '#041635',
					light: '#ffffff',
				},
				dark: {
					primary: '#47abff',
					secondary: '#7ac2ff',
					accent: '#1494ff',
					neutral: 'e6e6e6',
					'base-100': '#041635',
					dark: '#041635',
					// light: '#ffffff',
				},
			},
		],
		base: true,
		styled: true,
		utils: true,
		prefix: '',
		logs: true,
		themeRoot: ':root',
	},
} satisfies Config;
