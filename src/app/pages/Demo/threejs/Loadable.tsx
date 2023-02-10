import { lazyLoad } from 'utils/loadable';

export const DemoThree = lazyLoad(
  () => import('./index'),
  module => module.DemoThree,
);
