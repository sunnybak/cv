/** @type {import('next').NextConfig} */

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const devConfig = {};

const prodConfig = {
    basePath: "/cv",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
}

module.exports = prodConfig;
