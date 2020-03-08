const BundleTracker = require('webpack-bundle-tracker');
module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'es',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false
        }
    },
    publicPath: 'static/',
    configureWebpack: {
        plugins: [
            new BundleTracker({
                filename: '../dataworkshop_fe/webpack-stats.json'
            })
        ]
    }
};
