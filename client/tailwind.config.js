/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
    safelist: [
        "group",
        "peer",
        "group-hover",
        "peer-checked",
        "after:content-['']",
        "after:absolute",
        "after:hidden",
        "after:border-r-2",
        "after:border-b-2",
        "after:border-white",
        "after:rotate-45",
        "after:block",
    ],
};
