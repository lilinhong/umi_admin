import { defineConfig } from 'umi';
import {routerConfig} from './src/config/routerConfig'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routerConfig,
});
