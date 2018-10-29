import * as React from 'react';
import { Header } from './header';
import { Main } from './main';
import './app.scss';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
