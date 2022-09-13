import * as config from './config/index.js';
import * as DevConfig from './webpack.dev.js';
import * as ProdConfig from './webpack.prod.js';

export default config.isDevelopment
  ? DevConfig.WebpackDevConfig
  : ProdConfig.WebpackProdConfig;
