const webpackBaseConfig = {
    stats: {
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: true,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: false,
        errorDetails: false,
        warnings: false,
        publicPath: false
    }
};

const webpackDevConfig = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            envName: 'development',
                            presets: ['@babel/preset-react']
                        }
                    }
                ]
            }
        ]
    }
};

const webpackProdConfig = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            envName: 'production',
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                ]
            }
        ]
    }
};

exports.webpackBaseConfig = webpackBaseConfig;
exports.webpackDevConfig = webpackDevConfig;
exports.webpackProdConfig = webpackProdConfig;
