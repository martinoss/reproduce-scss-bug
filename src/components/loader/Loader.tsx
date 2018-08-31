import * as React from 'react';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

// tslint:disable-next-line:no-console
console.log('Loader.js')

const Loader: React.SFC = (props: any) => {
  // tslint:disable-next-line:no-console
  console.log('Loader render()', props)

  if (props.error) {
    return <h1>Error: {props.error}</h1>;
  } else if (props.timedOut) {
    return <h1>Error: {props.timedOut}</h1>;
  } else {
    return <Spinner size={SpinnerSize.large} />;
  }
}

export default Loader;