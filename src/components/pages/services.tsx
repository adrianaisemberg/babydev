import * as React from 'react';
import { ServiceLink } from '../controls/service-link';
var services = require('./services.json');
var styles = require('./../main.scss');
var classNames = require('classnames');

export class Services extends React.Component {
  render() {
    var serviceLink = services.map((service: any, index: number) => (
      <ServiceLink
        key={index}
        title={service.title}
        description={service.description}
        duration={service.duration}
        prices={service.prices}
      />
    ));

    return (
      <div className={classNames(styles.content, styles.column)}>{serviceLink}</div>
    );
  }
}
