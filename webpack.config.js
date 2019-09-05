const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const envValue = env || 'production';

  if (envValue === 'production') {
    return {
      mode: envValue,
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader'
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              },
              // Compiles Sass to CSS
              'sass-loader'
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html',
          filename: 'index.html',
          inject: 'body'
        })
      ]
    };
  } else if (envValue === 'development') {
    return {
      mode: envValue,
      entry: './src/index.js',
      optimization: {
        minimize: false
      },
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader'
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              },
              // Compiles Sass to CSS
              'sass-loader'
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html',
          filename: 'index.html',
          inject: 'body'
        })
      ]
    };
  }
};
