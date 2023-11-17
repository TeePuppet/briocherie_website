/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
				fontFamily: {
					serif: "Crimson Regular",
				},
				backgroundColor: {
					background: "#F2F5EA",
					main: "#980035"
				}

		},
	},
	plugins: [],
}
