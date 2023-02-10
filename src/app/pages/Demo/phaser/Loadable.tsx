import { lazyLoad } from 'utils/loadable';

export const DemoPhaser = lazyLoad(
  () => import('./index'),
  module => module.DemoPhaser,
);
