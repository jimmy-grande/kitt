module.exports = api => {
  api.cache(false);
  return {
    ignore: [/@babel[\\|/]runtime/],
    presets: ["@babel/preset-env", "@babel/preset-react"]
  };
};
