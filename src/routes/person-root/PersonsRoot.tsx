import * as React from 'react';
import { Route, Switch } from 'react-router';
import { PersonsList } from './routes/routes';

// tslint:disable-next-line:no-console
console.log('PersonsRoot.js')

/* Uncomment next line to make it work */
// import './persons-root.scss';

export default class PersonsRoot extends React.Component<any> {

  public render(): JSX.Element {

    const { match } = this.props;

    // tslint:disable-next-line:no-console
    console.log('PersonsRoot render()')

    return (
      <div>
        Foo ya foo bar
        <Switch>
          <Route path={`${match.path}/`} exact={true} component={PersonsList} />
        </Switch>
      </div>
    );
  }
}
