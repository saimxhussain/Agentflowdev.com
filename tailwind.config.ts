import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        equitan: ['EquitanSans', 'sans-serif'],
      },
      colors: {
        orange: '#FF4D00',
        'orange-light': '#FF6B2B',
        scblack: '#0a0a0a',
        surface: '#111111',
        surface2: '#161616',
        scwhite: '#F5F0EB',
        scgray: '#888880',
        scdim: '#333330',
      },
    },
  },
  plugins: [],
}
export default config
