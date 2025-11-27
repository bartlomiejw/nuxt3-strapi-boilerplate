// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'node:path';
import { defineNuxtConfig } from 'nuxt/config';
import en from './i18n/locales/en-US.json';
import fr from './i18n/locales/fr-FR.json';
import ar from './i18n/locales/ar-AR.json';
import pl from './i18n/locales/pl-PL.json';

const baseUrl = '/';

export default defineNuxtConfig({
    devtools: { enabled: true },

    nitro: {
        compressPublicAssets: true,
        logLevel: 4
    },

    pages: true,

    modules: [
        '@nuxtjs/eslint-module',
        '@pinia/nuxt',
        '@nuxtjs/device',
        'nuxt-icon',
        '@nuxt/image',
        // '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxtjs/color-mode',
        '@nuxtjs/i18n',
        '@dargmuesli/nuxt-cookie-control',
        'nuxt-graphql-client',
        'nuxt-primevue'
    ],

    postcss: {
        plugins: {
            'postcss-import': {},
            tailwindcss: {},
            autoprefixer: {}
        }
    },

    css: ['primeicons/primeicons.css', '~/assets/scss/theme.scss'],

    imports: {
        dirs: ['./stores']
    },

    pinia: {
        // @ts-ignore
        autoImports: ['defineStore', 'acceptHMRUpdate']
    },

    app: {
        head: {
            title: 'Nuxt Strapi App - Project based on Nuxt framework with Strapi',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
                },
                {
                    name: 'description',
                    content: 'Nuxt Strapi App - Project based on Nuxt framework with Strapi'
                },
                { name: 'robots', content: 'index,follow' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@primevue' },
                {
                    name: 'twitter:title',
                    content: 'Nuxt Strapi App - Project based on Nuxt framework with Strapi'
                },
                {
                    name: 'twitter:description',
                    content: 'Project based on Nuxt framework with Strapi'
                },
                { property: 'og:type', content: 'website' },
                {
                    property: 'og:title',
                    content: 'Project based on Nuxt framework with Strapi'
                },
                { property: 'og:url', content: 'https://tailwind.primevue.org/' },
                {
                    property: 'og:description',
                    content: 'Project based on Nuxt framework with Strapi'
                },
                {
                    property: 'og:image',
                    content: 'https://www.primefaces.org/static/social/primevue-preview.jpg'
                },
                { property: 'og:ttl', content: '604800' }
            ],
            link: [
                { rel: 'icon', href: `${baseUrl}favicon.ico` },
                {
                    rel: 'stylesheet',
                    as: 'font',
                    href: 'https://rsms.me/inter/inter.css'
                }
            ]
        }
    },

    colorMode: {
        classSuffix: ''
    },

    eslint: {
        lintOnStart: false
    },

    image: {
        provider: 'ipx',
        quality: 80,
        format: ['png', 'jpeg', 'webp']
    },

    runtimeConfig: {
        public: {
            GQL_HOST: process.env.GQL_HOST,
            sentry: {
                dsn: process.env.NUXT_PUBLIC_SENTRY_DSN,
                environment: process.env.NUXT_PUBLIC_SENTRY_ENVIRONMENT
            }
        }
    },

    // @nuxtjs/tailwindcss
    // tailwindcss: {
    //     cssPath: '~/assets/css/tailwind.css',
    //     configPath: 'tailwind.config.ts',
    //     exposeConfig: false,
    //     viewer: false,
    //     config: {
    //         // Your Tailwind config here
    //         content: [
    //             "./components/**/*.{js,vue,ts}",
    //             "./layouts/**/*.vue",
    //             "./pages/**/*.vue",
    //             "./plugins/**/*.{js,ts}",
    //             "./nuxt.config.{js,ts}"
    //         ]
    //     }
    // },
    // module: nuxt-primevue
    primevue: {
        options: {
            ripple: true,
            unstyled: true
        },
        importPT: {
            as: 'lara',
            from: path.resolve(__dirname, './presets/lara/')
        }
    },

    // module: @nuxtjs/google-fonts
    googleFonts: {
        families: {
            Jost: true
        },
        display: 'swap',
        prefetch: true,
        preconnect: true
    },

    // @nuxtjs/i18n
    i18n: {
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        baseUrl: baseUrl,
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                file: 'en-US.json',
                isCatchallLocale: true
            },
            {
                code: 'fr',
                iso: 'fr-FR',
                file: 'fr-FR.json'
            },
            {
                code: 'ar',
                iso: 'ar-AR',
                file: 'ar-AR.json'
            },
            {
                code: 'pl',
                iso: 'pl-PL',
                file: 'pl-PL.json'
            }
        ],
        compilation: {
            strictMessage: false
        },
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root'
        }
    },

    // @dargmuesli/nuxt-cookie-control
    cookieControl: {
        cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365, // one year
        // set all these to true for highest GDPR enforcement
        isAcceptNecessaryButtonEnabled: true,
        isModalForced: false,
        isCookieIdVisible: true,
        closeModalOnClickOutside: true,
        // show cookie button
        isControlButtonEnabled: true,
        // disable to get unstyled css for tailwind
        isCssEnabled: false,
        isDashInDescriptionEnabled: false,
        cookies: {
            necessary: [
                {
                    name: {
                        fr: fr.cookies.necessary.title,
                        en: en.cookies.necessary.title,
                        ar: ar.cookies.necessary.title,
                        pl: pl.cookies.necessary.title
                    },
                    description: {
                        fr: fr.cookies.necessary.description,
                        en: en.cookies.necessary.description,
                        ar: ar.cookies.necessary.description,
                        pl: pl.cookies.necessary.description
                    },
                    targetCookieIds: ['ncc_']
                }
            ],
            optional: []
        },
        locales: ['en', 'fr', 'ar', 'pl']
    },

    compatibilityDate: '2025-04-10'
});