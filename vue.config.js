const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
    configureWebpack: {
        plugins: process.env.NODE_ENV === 'production' ? [
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                routes: ['/', '/about', '/contact', '/cv', '/skills']
            })
        ]: []
    }
}