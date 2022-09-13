import path from 'path';
import { fileURLToPath } from 'url';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import * as config from './config/index.js';
import * as modules from './modules/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const configs = {
  entry: `${config.paths.src}/index.tsx`,
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', 'json'],
    alias: {
      '@': config.paths.src,
    },
  },
  module: {
    rules: [modules.tj, modules.css, modules.images, modules.fonts],
  },
  output: {
    path: config.paths.build,
    filename: config.outputs.JS_FILE_OUTPUT,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${config.paths.public}/index.html`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: config.paths.public,
          to: config.paths.build,
          noErrorOnMissing: true,
          globOptions: {
            dot: true,
            ignore: ['**/.DS_Store', '**/.gitkeep', '**/index.html'],
          },
        },
      ],
    }),
    new CleanWebpackPlugin({
      root: config.paths.build,
    }),
  ],
  stats: 'errors-only',
  context: __dirname,
  target: config.isDevelopment ? 'web' : 'browserslist',
  mode: config.isDevelopment ? 'development' : 'production',
};
