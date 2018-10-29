import * as React from 'react';
import { Routes } from './routes';
var styles = require('./main.scss');

export class Main extends React.Component {
  render() {
    return (
      <main className={styles.content}>
        <Routes />
      </main>
    )
  }
}
