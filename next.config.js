/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    PathStatic:
      process.env.NODE_ENV === "development" ? "" : "./it-animals-site",
  },
  basePath: process.env.NODE_ENV === "development" ? "" : "./it-animals-site",
};
