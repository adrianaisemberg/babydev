import * as React from 'react';
var contactStyles = require('./contact.scss');
var mainStyles = require('./../main.scss');
var classNames = require('classnames');

export class Contact extends React.Component {
  render() {
    return (
      <div className={classNames(mainStyles.content, mainStyles.column)}>
        {/* <form action='https://formspree.io/lilachberko@gmail.com' method='POST'> */}
        <form action='https://formspree.io/adrianaisemberg@gmail.com' method='POST'>
          <div className={classNames(contactStyles.input)}>
            <label htmlFor='form.name'>Name:</label>
            <div><input type='text' name='name' id='form.name' /></div>
          </div>
          <div className={classNames(contactStyles.input)}>
            <label htmlFor='form.email'>Email:</label>
            <div><input type='email' name='_replyto' id='form.email' /></div>
          </div>
          <div className={classNames(contactStyles.input)}>
            <label htmlFor='form.phone'>Phone:</label>
            <div><input type='tel' name='_replyto' id='form.phone' /></div>
          </div>
          <div className={classNames(contactStyles.input)}>
            <label htmlFor='form.text'>Message:</label>
            <div><textarea name='message' id='form.message' rows={10} /></div>
          </div>
          <div className={classNames(contactStyles.input)}>
            <input type='submit' value='Send' />
          </div>
        </form>
      </div>
    );
  }
}
