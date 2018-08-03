import * as React from 'react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

const Loader: React.SFC = () => (
  <Spinner size={SpinnerSize.large} />
);

export default Loader;