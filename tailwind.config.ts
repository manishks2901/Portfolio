import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  backgroundImage: {
			'mirrored-gradient': `linear-gradient(90deg, rgba(18, 18, 18, 0.00) -2.11%, rgba(18, 18, 18, 0.10) 0.18%, rgba(18, 18, 18, 0.15) 1.33%, rgba(18, 18, 18, 0.20) 2.48%, rgba(18, 18, 18, 0.25) 7.37%, rgba(18, 18, 18, 0.30) 12.26%, rgba(18, 18, 18, 0.35) 16.85%, rgba(18, 18, 18, 0.40) 21.43%, rgba(18, 18, 18, 0.45) 26.02%, rgba(18, 18, 18, 0.50) 30.3%, rgba(18, 18, 18, 0.55) 35.74%, rgba(18, 18, 18, 0.60) 40.09%, rgba(18, 18, 18, 0.65) 45.59%, rgba(18, 18, 18, 0.70) 50.18%, rgba(18, 18, 18, 0.75) 54.46%, rgba(18, 18, 18, 0.80) 59.35%, rgba(18, 18, 18, 0.85) 64.55%, rgba(18, 18, 18, 0.90) 69.74%, rgba(18, 18, 18, 0.93) 74.94%, rgba(18, 18, 18, 0.95) 81.47%, rgba(18, 18, 18, 0.97) 90.33%, #121212 100%)`,
			'custom-gradient': `linear-gradient(270deg, rgba(18, 18, 18, 0.00) -2.11%, rgba(18, 18, 18, 0.10) 0.18%, rgba(18, 18, 18, 0.15) 1.33%, rgba(18, 18, 18, 0.20) 2.48%, rgba(18, 18, 18, 0.25) 7.37%, rgba(18, 18, 18, 0.30) 12.26%, rgba(18, 18, 18, 0.35) 16.85%, rgba(18, 18, 18, 0.40) 21.43%, rgba(18, 18, 18, 0.45) 26.02%, rgba(18, 18, 18, 0.50) 30.3%, rgba(18, 18, 18, 0.55) 35.74%, rgba(18, 18, 18, 0.60) 40.09%, rgba(18, 18, 18, 0.65) 45.59%, rgba(18, 18, 18, 0.70) 50.18%, rgba(18, 18, 18, 0.75) 54.46%, rgba(18, 18, 18, 0.80) 59.35%, rgba(18, 18, 18, 0.85) 64.55%, rgba(18, 18, 18, 0.90) 69.74%, rgba(18, 18, 18, 0.93) 74.94%, rgba(18, 18, 18, 0.95) 81.47%, rgba(18, 18, 18, 0.97) 90.33%, #121212 100%)`,
		  },
		  boxShadow: {
			'custom-shadow': '0px 4px 39.1px 0px rgba(0, 0, 0, 0.25)',
		  },
		  backgroundBlendMode: {
			'hard-light': 'hard-light',
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
