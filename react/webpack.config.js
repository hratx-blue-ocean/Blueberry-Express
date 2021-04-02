const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/public',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    publicPath: '/',
    port: process.env.PORT || 8080,
    host: '0.0.0.0',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [path.join(__dirname, 'node_modules/')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults',
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
    ],
  },
};
