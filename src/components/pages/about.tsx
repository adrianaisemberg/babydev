import * as React from 'react';
import { Page } from './page';
import { images } from '../../images';
import { texts } from '../../texts';
import { PageLink } from '../controls/page-link';
var mainStyles = require('./../main.scss');
var aboutStyles = require('./about.scss');
var classNames = require('classnames');

export class About extends React.Component {
  render() {
    return (
      <>
        <Page image={images['about-me']} title='LILACH AISEMBERG' text={texts['about']} />
        <div className={classNames(mainStyles.content, mainStyles.column, aboutStyles.links)}>
          <h3>THE METHOD</h3>
          <PageLink small={true} href='/pages/teach_support_challenge' image={images['about-me']} title={['TEACH.', 'SUPPORT.', 'CHALLENGE.']} />
          <PageLink small={true} href='/pages/hands_on_hollistic_innovative' image={images['about-me']} title={['HANDS-ON.', 'HOLISTIC.', 'INNOVATIVE']} />
          <PageLink small={true} href='/pages/the_developmental_environment' image={images['about-me']} title={['THE', 'DEVELOPMENTAL', 'ENVIRONMENT']} />
        </div>
      </>
    );
  }
}
