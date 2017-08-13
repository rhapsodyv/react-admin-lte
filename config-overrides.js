/* config-overrides.js */
const webpack = require('webpack');
const path = require('path');

function rewireLess (config, env, lessLoaderOptions = {}) {
    const lessExtension = /\.less$/;

    const fileLoader = config.module.rules[1].oneOf
        .find(rule => rule.loader && rule.loader.endsWith(`${path.sep}file-loader${path.sep}index.js`));
    fileLoader.exclude.push(lessExtension);

    const cssRules = config.module.rules[1].oneOf
        .find(rule => String(rule.test) === String(/\.css$/));

    let lessRules;
    if (env === 'production') {
        lessRules = {
            test: lessExtension,
            loader: [
                // TODO: originally this part is wrapper in extract-text-webpack-plugin
                //       which we cannot do, so some things like relative publicPath
                //       will not work.
                //       https://github.com/timarney/react-app-rewired/issues/33
                ...cssRules.loader,
                { loader: 'less-loader', options: lessLoaderOptions }
            ]
        };
    } else {
        lessRules = {
            test: lessExtension,
            include: '/Users/victor/Development/playground/admin-tle-react/src',
            use: [
                ...cssRules.use,
                { loader: 'less-loader', options: lessLoaderOptions }
            ]
        };
    }

    config.module.rules.push(lessRules);
    // config.module.rules.push({
    //     test: /\.js$/,
    //     issuer: /\.less$/,
    //     use: [{
    //         loader: "js-to-less-loader"
    //     }]});

    return config;
}

module.exports = function override(config, env) {
    //do stuff with the webpack config...

    //diz pra porcaria usar o meu eslintrc!!
    config.module.rules[0].use[0].options.useEslintrc = true;
    config.module.rules[0].use[0].options.ignore = true;

    // melhor fazer eslint ignorar para incluir o jquery direto na pagina
    // config.plugins.push(new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jquery: "jquery",
    //     'window.jQuery': 'jquery',
    //     jQuery: "jquery",
    //     "window.jQuery": "jquery"
    // }));

    // const ExtractTextPlugin = require("extract-text-webpack-plugin");
    //
    // const extractLess = new ExtractTextPlugin({
    //     filename: "[name].[contenthash].css",
    //     disable: process.env.NODE_ENV === "development"
    // });
    // config.plugins.push(extractLess);

    rewireLess(config, env, { relativeUrls: true, sourceMap: true });

    return config;
}