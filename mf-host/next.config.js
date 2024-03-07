// host/next.config.js
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    silMfCreditSimulation:
      "silMfCreditSimulation@http://localhost:4001/static-simulation/_next/static/chunks/remoteEntry.js",
  };
};

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(isServer),
        exposes: {
          // Host app also can expose modules
        },
      })
    );

    return config;
  },
};
