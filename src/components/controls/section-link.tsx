import * as React from 'react';
var styles = require('./section-link.scss');
var classNames = require('classnames');

export interface SectionLinkProps {
  href: string;
  image: string;
  title: string;
  subTitles: string[];
  reverse?: boolean;
  color: string;
}

export class SectionLink extends React.Component<SectionLinkProps> {
  render() {
    const { href, image, title, subTitles, reverse, color } = this.props;
    const lines = subTitles.map(line => {
      return <p key={line}>{line}</p>;
    });

    const style = {
      color,
    };

    return (
      <a href={href} className={classNames(styles.sectionLink, { [styles.reverse]: reverse })}>
        <div className={styles.imageContainer}>
          <img src={image} />
          <h2>{lines}</h2>
        </div>
        <div className={styles.gradientBackground} />
        <h1 style={style}>{title}</h1>
      </a>
    )
  }
}
