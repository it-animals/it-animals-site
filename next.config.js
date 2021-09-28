/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: process.env["base-path"],
  assetPrefix: `${process.env["base-path"]}/`,
  env,
};
