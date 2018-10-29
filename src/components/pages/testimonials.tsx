import * as React from 'react';
var styles = require('./testimonials.scss');
var mainStyles = require('./../main.scss');
var classNames = require('classnames');
const testimonials = require('./testimonials.json')

export class Testimonials extends React.Component {
  render() {
    return (
      <>
        <h1 className={classNames(styles.page)}>TESTIMONIALS</h1>
        <div className={classNames(mainStyles.content, mainStyles.column, styles.testimonials)}>
          {testimonials.map((testimonial: any, i: number) => <p key={i}>"{testimonial}"</p>)}
        </div>
      </>
    )
  }
}
