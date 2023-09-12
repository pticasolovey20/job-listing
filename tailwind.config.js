/** @type {import('tailwindcss').Config} */

const config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		screens: {
			xs: "375px",
			sm: "576px",
			md: "768px",
			lg: "1024px",
			xl: "1200px",
			xxl: "1440px",
		},

		extend: {
			colors: {
				primary: {
					"desaturated-dark-cyan": "hsl(180, 29%, 50%)",
				},

				neutral: {
					"light-grayish-cyan-bg": "hsl(180, 52%, 96%)",
					"light-grayish-cyan-filter": "hsl(180, 31%, 95%)",
					"dark-grayish-cyan": "hsl(180, 8%, 52%)",
					"very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
				},
			},
		},
	},
	plugins: [],
};

export default config;
