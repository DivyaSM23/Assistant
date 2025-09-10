/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", // ✅ ensures React files are scanned
];
export const theme = {
  extend: {},
};
export const plugins = [];