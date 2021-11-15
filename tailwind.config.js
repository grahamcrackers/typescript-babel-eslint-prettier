/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

// documentation about purging unused css https://tailwindcss.com/docs/optimizing-for-production#removing-unused-css
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'jit',
    purge: {
        enable: !isDevelopment,
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                rose: colors.rose,
            },
        },
    },
    variants: {
        extend: {
            padding: ['first'],
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
