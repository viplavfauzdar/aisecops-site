import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:  ["Instrument Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["DM Serif Display", "Georgia", "serif"],
        mono:  ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        ink:   "#0d1117",
        paper: "#f8f6f1",
        panel: "#0f1724",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body":          "#2a2a2a",
            "--tw-prose-headings":      "#0d1117",
            "--tw-prose-bold":          "#0d1117",
            "--tw-prose-links":         "#c94f1e",
            "--tw-prose-code":          "#1a6e4f",
            "--tw-prose-pre-bg":        "#0d1117",
            "--tw-prose-pre-code":      "#7ecfb3",
            "--tw-prose-hr":            "#ddd9d3",
            "--tw-prose-quote-borders": "#c94f1e",
            "--tw-prose-captions":      "#6b6460",
            "--tw-prose-counters":      "#6b6460",
            "--tw-prose-bullets":       "#6b6460",
          },
        },
      }),
    },
  },
  plugins: [typography],
};
