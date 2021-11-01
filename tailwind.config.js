module.exports = {
  theme: {
    // 👇 this makes Tailwind merge the configuration w/o overriding it.
    extend: {
      height: (theme) => ({
        110: "28rem !important",
        120: "36rem !important ",
        150: "42rem",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },
};
