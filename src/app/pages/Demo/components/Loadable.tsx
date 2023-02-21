import { lazyLoad } from 'utils/loadable';

export const AppMykitos = lazyLoad(
  () => import('./index'),
  module => module.AppMykitos,
);
