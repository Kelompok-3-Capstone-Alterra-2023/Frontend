/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            "web-green": {
                50: "#f4f9ee",
                75: "#d1e5bb",
                100: "#bdda9f",
                200: "#a1ca75",
                300: "#8ebf59",
                400: "#63863e",
                500: "#577536",
            },
            "danger-red": {
                50: "#f6eaea",
                75: "#d8a9a7",
                100: "#c88582",
                200: "#b1514d",
                300: "#a12d28",
                400: "#711f1c",
                500: "#621b18",
            },
            "success-green": {
                50: "#eaefed",
                75: "#a9bfb4",
                100: "#85a495",
                200: "#517d67",
                300: "#2d6248",
                400: "#1f4532",
                500: "#1b3c2c",
            },
            "warning-yellow": {
                50: "#fffbe6",
                75: "#ffef97",
                100: "#fee86c",
                200: "#fede2d",
                300: "#fed702",
                400: "#b29701",
                500: "#9b8301",
            },
            neutral: {
                0: "#ffffff",
                10: "#fafafa",
                20: "#f5f5f5",
                30: "#ebebeb",
                40: "#dedede",
                50: "#bfbfbf",
                60: "#b0b0b0",
                70: "#a3a3a3",
                80: "#949494",
                90: "#858585",
                100: "#757575",
                200: "#666666",
                300: "#575757",
                400: "#4a4a4a",
                500: "#3b3b3b",
                600: "#2e2e2e",
                700: "#1c1c1c",
                800: "#0d0d0d",
                900: "#000000",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
        },
        fontFamily: {
            inter: ["Inter", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
        },
        fontSize: {
            xs: ["16px", "24px"],
            sm: ["20px", "24px"],
            md: ["22px", "27px"],
            lg: ["24px", "29px"],
            xl: ["32px", "39px"],
            "2xl": ["36px", "54px"],
            "3xl": ["48px", "58px"],
            "4xl": ["64px", "78px"],
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [require("flowbite/plugin"), require('@tailwindcss/typography')],
};
