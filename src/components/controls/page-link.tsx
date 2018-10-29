import * as React from 'react';
var styles = require('./page-link.scss');
var classNames = require('classnames');

export interface PageLinkProps {
  href: string;
  image: string;
  title: string | string[];
  subTitle?: string;
  small?: boolean;
}

export class PageLink extends React.Component<PageLinkProps> {
  render() {
    const { href, image, title, subTitle } = this.props;

    return (
      <a href={href} className={classNames(styles.pageLink)}>
        <img src={image} />
        <div>
          {this.renderTitle()}
          {subTitle ? <h2>{subTitle}</h2> : null}
        </div>
      </a>
    )
  }

  renderTitle() {
    const { title, small } = this.props;
    const className = classNames({ [styles.small]: small });
    return typeof title === 'string' ?
      <h1 className={className}>{title}</h1> :
      (title as string[]).map((t, i) => <h1 key={i} className={className}>{t}</h1>);
  }
}
