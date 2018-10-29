import * as React from 'react';
var pageStyles = require('./page.scss');
var mainStyles = require('./../main.scss');
var classNames = require('classnames');

export interface PageProps {
  image: string;
  title: string;
  subtitle?: string;
  text: string[];
}

export class Page extends React.Component<PageProps> {
  render() {
    const { image, title, subtitle, text } = this.props;
    return (
      <div className={classNames(mainStyles.content, mainStyles.column, pageStyles.page)}>
        <img src={image} />
        <h1>{title}</h1>
        {subtitle ? <h2>{subtitle}</h2> : null}
        {text.map((t, i) => <p key={i}>{t}</p>)}
      </div>
    );
  }
}
