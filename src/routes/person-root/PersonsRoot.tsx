import * as React from 'react';
import { Route, Switch } from 'react-router';
import { PersonsList } from './routes/routes';

/* Uncomment next line to make it work */
// import './persons-root.scss';

export default class PersonsRoot extends React.Component<any> {

  public render(): JSX.Element {

    const { match } = this.props;

    return (
      <div>
        <Switch>
          <Route path={`${match.path}/`} exact={true} component={PersonsList} />
        </Switch>
      </div>
    );
  }
}
