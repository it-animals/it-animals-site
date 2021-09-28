/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  reactStrictMode: true,
  basePath: isDev ? "" : "/it-animals-site",
  assetPrefix: isDev ? "" : "/it-animals-site/",
  env: {
    BASE_PATH: isDev ? "" : "/it-animals-site",
  },
};
