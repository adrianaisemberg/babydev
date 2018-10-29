import * as React from 'react';
import { SectionLink } from '../controls/section-link';
import { images } from '../../images';
var sections = require('./home.json');

export class Home extends React.Component {
  render() {
    return sections.map((section: any, index: number) => (
      <SectionLink
        key={index}
        href={section.href}
        image={images[section.image]}
        title={section.title}
        reverse={index % 2 === 1}
        subTitles={section.subTitles}
        color={section.color}
      />
    ));
  }
}
