/** @type {import('tailwindcss').Config} */
module.exports = {
  configType: "ts",
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "indigo": {
          75: "#E7ECFF",
          250: "#BFCCFF",
        }
      },
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