/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    daisyui: {
        themes: [
            // 'light',
            'dark',
            // 'cupcake',
            // 'bumblebee',
            // 'emerald',
            // 'corporate',
            // 'synthwave',
            // 'retro',
            // 'cyberpunk',
            // 'valentine',
            // 'halloween',
            // 'garden',
            // 'forest',
            // 'aqua',
            // 'lofi',
            // 'pastel',
            // 'fantasy',
            // 'wireframe',
            // 'black',
            // 'luxury',
            // 'dracula',
            // 'cmyk',
            // 'autumn',
            // 'business',
            // 'acid',
            // 'lemonade',
            // 'night',
            // 'coffee',
            // 'winter',
        ],
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                     DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                }
            }
        }
    }
};
