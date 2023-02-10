import { lazyLoad } from 'utils/loadable';

export const DemoPiXi = lazyLoad(
  () => import('./index'),
  module => module.DemoPiXi,
);
