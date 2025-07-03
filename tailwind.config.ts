
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
				'pixel': ['Press Start 2P', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				minecraft: {
					grass: '#7CB342',
					dirt: '#8D6E63',
					stone: '#78909C',
					diamond: '#00BCD4',
					redstone: '#F44336',
					emerald: '#4CAF50',
					gold: '#FFC107',
					iron: '#9E9E9E',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink': {
					'50%': { borderColor: 'transparent' }
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)' 
					},
					'25%': { 
						transform: 'translateY(-5px) rotate(1deg)' 
					},
					'50%': { 
						transform: 'translateY(-10px) rotate(0deg)' 
					},
					'75%': { 
						transform: 'translateY(-5px) rotate(-1deg)' 
					}
				},
				'pixel-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 0 0 rgba(124, 179, 66, 0.4)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 0 10px rgba(124, 179, 66, 0)',
						transform: 'scale(1.05)'
					}
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' }
				},
				'scanlines': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(4px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'typing': 'typing 4s steps(40, end)',
				'blink': 'blink 1s infinite',
				'float': 'float 4s ease-in-out infinite',
				'pixel-pulse': 'pixel-pulse 2s infinite',
				'glitch': 'glitch 0.3s infinite',
				'scanlines': 'scanlines 0.1s linear infinite'
			},
			boxShadow: {
				'pixel': '4px 4px 0px 0px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
				'pixel-hover': '6px 6px 0px 0px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.2) inset, 0 0 20px rgba(124, 179, 66, 0.3)',
				'inset-pixel': 'inset 3px 3px 0px 0px rgba(255, 255, 255, 0.3), inset -3px -3px 0px 0px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(0, 0, 0, 0.1)',
			},
			screens: {
				'xs': '475px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
