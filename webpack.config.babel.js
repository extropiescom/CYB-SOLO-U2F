import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
//const outputPath = path.join(__dirname, 'app', 'dist');
const outputPath = "/Users/chester/www";
export default [
    {
      target: 'web',
      devtool:  'source-map',
      entry: {
        renderer: `./test/fp.js`,
      },
      output: {
        path: outputPath,
        publicPath: './dist/',
        filename: '[name].js',
      },
      module: {
        noParse: /node_modules\/localforage\/dist\/localforage.js/,
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /^((?!\.global).)*\.css$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract(
              'css-loader?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!postcss-loader',
            ),
          },
          {
            test: /^((?!\.global).)*\.css$/,
            include: /node_modules/,
            loader: ExtractTextPlugin.extract(
              'css-loader?sourceMap!postcss-loader',
            ),
          },
          {
            test: /\.global\.css$/,
            loader: ExtractTextPlugin.extract(
              'css-loader?sourceMap!postcss-loader',
            ),
          },
          {
            test: /^((?!\.global).)*\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract(
              'css-loader?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!postcss-loader!sass-loader',
            ),
          },
          {
            test: /^((?!\.global).)*\.scss$/,
            include: /node_modules/,
            loader: ExtractTextPlugin.extract(
              'css-loader?sourceMap!postcss-loader!sass-loader',
            ),
          },
          {
            test: /\.global\.scss$/,
            loader: ExtractTextPlugin.extract(
              'css-loader?sourceMap!postcss-loader!sass-loader',
            ),
          },
        ],
      },
    }
];
    