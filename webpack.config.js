module.exports = {
    entry: './src/index.js',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {   test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
