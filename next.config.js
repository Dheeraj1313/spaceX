module.exports = {
  distDir: "build",
  webpack: (config) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
};
