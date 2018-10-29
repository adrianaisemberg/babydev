import * as React from 'react';
import { NavLink } from 'react-router-dom';
var styles = require('./header.scss');

interface HeaderState {
  collapsed: boolean;
}

export class Header extends React.Component<{}, HeaderState> {
  constructor(props: any) {
    super(props);

    this.state = {
      collapsed: true,
    };
  }

  collapseMenu() {
    this.setState({
      collapsed: true,
    });
  }

  toggleMenu() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <a className={styles.logo} href='/'>BabyDev</a>
        <label id={styles.hamburger} onClick={() => this.toggleMenu()} />
        <nav className={this.state.collapsed ? null : styles.expanded}>
          <ul>
            <li><NavLink onClick={() => this.collapseMenu()} exact={true} to='/' activeClassName={styles.active}>Home</NavLink></li>
            <li><NavLink onClick={() => this.collapseMenu()} exact={true} to='/milestones' activeClassName={styles.active}>Milestones</NavLink></li>
            <li><NavLink onClick={() => this.collapseMenu()} exact={true} to='/services' activeClassName={styles.active}>Services</NavLink></li>
            <li><NavLink onClick={() => this.collapseMenu()} exact={true} to='/about' activeClassName={styles.active}>About</NavLink></li>
            <li><NavLink onClick={() => this.collapseMenu()} exact={true} to='/contact' activeClassName={styles.active}>Contact</NavLink></li>
            <li><NavLink onClick={() => this.collapseMenu()} exact={true} to='/articles' activeClassName={styles.active}>Articles</NavLink></li>
            <li><NavLink onClick={() => this.collapseMenu()} exact={true} to='/testimonials' activeClassName={styles.active}>Testimonials</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
}
