/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                'top-botton': {
                    '0%': { transform: 'translateY(-100%)' },
                    '50%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(-100%)' },
                },
            },
            animation: {
                'top-botton': 'top-botton 1s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
