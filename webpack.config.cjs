const path = require('path');

module.exports = {
  entry: './src/main.tsx', // Adjust according to your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Adjust according to your desired output directory
    clean: true, // Clean the output directory before each build
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // If you are using CSS
        use: ['style-loader', 'css-loader'],
      },
      // Add other loaders as needed (e.g., images)
    ],
  },
  devtool: 'source-map', // Optional: for debugging purposes
};