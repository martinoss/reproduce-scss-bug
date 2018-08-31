import * as React from 'react';

/* Comment out next line to make loading work too */
import './persons-list.scss';

// tslint:disable-next-line:no-console
console.log('PersonsList.js')

class PersonsList extends React.Component {
  
  public render(): JSX.Element {    

    // tslint:disable-next-line:no-console
    console.log('PersonsList render()')

    return (
      <ul className="list">
        <li>Person 1</li>
        <li>Person 2</li>
      </ul>        
    );        
  }
}

export default PersonsList;