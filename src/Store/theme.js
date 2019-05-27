export default store => {
  store.on("@init", () => ({ darkTheme: true }));

  store.on("theme/toggle", state => {
    console.log("state was:", state);
    return { darkTheme: !state.darkTheme };
  });
};
