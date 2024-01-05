/** @type {import('tailwindcss').Config} */
module.exports = {
  configType: "ts",
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontSize: {
        xsvs: ".8rem",
        xss: ".85rem",
        smvs: ".9rem",
        sms: ".95rem",
      }
    },
  },
  plugins: [],
};