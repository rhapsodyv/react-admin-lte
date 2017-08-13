/* config-overrides.js */
const webpack = require('webpack');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    //console.log(config.module);
    config.plugins.push(new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }));
    return config;
}