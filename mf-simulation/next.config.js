/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const nextConfig = {
  basePath: "/static-simulation",
  staticPageGenerationTimeout: 2000,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },
  experimental: {
    outputStandalone: true,
  },
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "silMFExecutive",
          filename: "static/chuncks/remoteEntry.js",
          remotes: {},
          exposes: {},
          extraOptions: {
            enableImageLoaderFix: true,
            exposePages: true,
            // automaticAsyncBoundary,// expone para cargar como compoente directo evitando al dynamic cuando se carga como remoto
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
};

module.exports = nextConfig;
