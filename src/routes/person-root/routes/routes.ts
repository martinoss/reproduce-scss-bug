import Loadable from 'react-loadable';

import Loader from '../../../components/loader/Loader'

export const PersonsList = Loadable({
  loader: () => import('./list/PersonsList'),
  loading: Loader,
});
