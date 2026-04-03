module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // Zadrži <symbol> elemente koje koristi SVG sprite
          removeUselessDefs: false,
          cleanupIds: false,
        },
      },
    },
  ],
};
