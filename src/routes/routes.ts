import Loadable from 'react-loadable';

import Loader from '../components/loader/Loader'

export const PersonsRoot = Loadable({
  loader: () => import('./person-root/PersonsRoot'),
  loading: Loader,
});
