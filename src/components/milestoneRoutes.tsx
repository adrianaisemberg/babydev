import * as React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Page } from './pages/page';
import { images } from '../images';
import { texts } from '../texts';
var milestones = require('./pages/milestones.json');

export class MilestoneRoutes extends React.Component {
  render() {
    var routes = milestones.map((milestone: any, index: number) => {
      var page = (
        <Page
          image={images[milestone.image]}
          title={`${milestone.title}`}
          text={texts[milestone.text]}
        />
      );

      return (
        <Route
          key={index}
          path={`/milestone/${milestone.href}`}
          render={() => page}
        />
      );
    });

    return (
      <Switch>
        {routes}
      </Switch>
    );
  }
}
