import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
    },
  },
};
export const plugins = [
  require("tailwindcss-animate"),
  require("@tailwindcss/forms"),
];
