/* config-overrides.js */
const webpack = require('webpack');

module.exports = function override(config, env) {
    //do stuff with the webpack config...

    //diz pra porcaria usar o meu eslintrc!!
    config.module.rules[0].use[0].options.useEslintrc = true;
    config.module.rules[0].use[0].options.ignore = true;

    // injetar um plugin nao funcionou...
    // config.plugins.push(new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jquery: "jquery",
    //     'window.jQuery': 'jquery',
    //     jQuery: "jquery",
    //     "window.jQuery": "jquery"
    // }));

    return config;
}