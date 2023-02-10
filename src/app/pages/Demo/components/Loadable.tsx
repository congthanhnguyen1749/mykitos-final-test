import { lazyLoad } from 'utils/loadable';

export const DemoComponents = lazyLoad(
  () => import('./index'),
  module => module.DemoComponents,
);
