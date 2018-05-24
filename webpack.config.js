var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app',
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
