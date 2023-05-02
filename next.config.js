/** @type {import('next').NextConfig} */

const webpack = require('webpack')
const nextConfig = {
    reactStrictMode: true,
}
const { parsed: myEnv } = require('dotenv').config();


module.exports = {
    nextConfig,
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
        return config
    }
}
