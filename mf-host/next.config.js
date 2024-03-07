/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  basePath: "/crom/mf-host",
  staticPageGenerationTimeout: 2000,
  experimental: {
    outputStandalone: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],

  webpack(config, options) {
    config.resolve.modules.push(__dirname);
    config.resolve.modules.push("./src");

    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "silHost",
          filename: "static/chuncks/remoteEntry.js",
          remotes: {
            silMfCreditSimulation:
              "silMfCreditSimulation@http://localhost:4021/static-simulation/_next/static/chunks/remoteEntry.js"},
          exposes: {},
          extraOptions: {
            enableImageLoaderFix: true,
          },
          shared: {
            react: { singleton: true, eager: true },
            "react-dom": { singleton: true, eager: true },
          },
        })
      );
    }

    return config;
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self';",
          },
        ],
      },
    ]; //
  },
};

module.exports = nextConfig;
