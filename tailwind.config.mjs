import typography from "@tailwindcss/typography";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: { extend: {
    fontFamily: {
      sans: ["ui-sans-serif","system-ui","SF Pro Display","Inter","Segoe UI","Roboto","Arial","sans-serif"],
      mono: ["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas","Liberation Mono","monospace"]
    },
    colors: { ink:"#0b1220", panel:"#0f172a" }
  }},
  plugins: [typography]
};
