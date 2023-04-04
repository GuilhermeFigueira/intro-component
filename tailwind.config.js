/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				red: "hsl(0, 100%, 74%)",
				green: "hsl(154, 59%, 51%)",
				blue: {
					default: "hsl(248, 32%, 49%)",
					dark: "hsl(249, 10%, 26%)",
					gray: "hsl(246, 25%, 77%)",
				},
			},
		},
	},
	plugins: [],
};
