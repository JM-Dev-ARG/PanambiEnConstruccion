/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ['Poppins']
            },
            colors: {
                primary: '#fef0e8',
                verde: [
                    '#daddc3',
                    '#445e53',
                    '#d2df8a',
                    '#003f36',
                    '#254441'
                ],
                violeta: [
                    '#6b4494',
                    '#aa8abf',
                    '#857993'
                ]
            },
        },
    },
};