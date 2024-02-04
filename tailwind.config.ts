import { type Config } from 'tailwindcss';

export default {
    darkMode: 'class',
    theme: {
        screens: {
            sm: '390px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1rem',
                lg: '2.5rem',
                xl: '4.5rem',
                '2xl': '4.5rem'
            }
        },
        fontFamily: {
            sans: ['Jost'],
            serif: ['serif'],
            mono: ['monospace'],
            display: ['Inter'],
            body: ['Jost']
        },
        extend: {
            colors: {
                'nuxt-green': '#00DC82',
                'nuxt-white': '#ffffff',
                'nuxt-grey': '#18181B',
                'primary-50': 'rgb(var(--primary-50))',
                'primary-100': 'rgb(var(--primary-100))',
                'primary-200': 'rgb(var(--primary-200))',
                'primary-300': 'rgb(var(--primary-300))',
                'primary-400': 'rgb(var(--primary-400))',
                'primary-500': 'rgb(var(--primary-500))',
                'primary-600': 'rgb(var(--primary-600))',
                'primary-700': 'rgb(var(--primary-700))',
                'primary-800': 'rgb(var(--primary-800))',
                'primary-900': 'rgb(var(--primary-900))',
                'primary-950': 'rgb(var(--primary-950))',
                'surface-0': 'rgb(var(--surface-0))',
                'surface-50': 'rgb(var(--surface-50))',
                'surface-100': 'rgb(var(--surface-100))',
                'surface-200': 'rgb(var(--surface-200))',
                'surface-300': 'rgb(var(--surface-300))',
                'surface-400': 'rgb(var(--surface-400))',
                'surface-500': 'rgb(var(--surface-500))',
                'surface-600': 'rgb(var(--surface-600))',
                'surface-700': 'rgb(var(--surface-700))',
                'surface-800': 'rgb(var(--surface-800))',
                'surface-900': 'rgb(var(--surface-900))',
                'surface-950': 'rgb(var(--surface-950))'
            },
            spacing: {
                '8xl': '96rem',
                '9xl': '128rem'
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
                '6xl': '3rem'
            }
        }
    },
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './composables/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        './utils/**/*.{js,ts}',
        './app.{js,ts,vue}',
        './error.{js,ts,vue}',
        './app.config.{js,ts}',
        'presets/**/*.{js,vue,ts}'
    ]
    // safelist: [
    //   "safelisted",
    //   {
    //     pattern: /bg-(red|green|blue)-(100|200|300)/,
    //   },
    // ],
} as Config;
