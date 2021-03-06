import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Helmet} from 'react-helmet';
import Headshot from './headshot.png';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen

    });
  }

  render() {
    return <Fragment>
      <Navbar className = "Navbar" variant = "light" expand="xs">
        <NavbarBrand className="navbar-brand">Casey Kesterson</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="navbar">
            <NavItem>
              <NavLink className="navbar-options" href="/components/">Books</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-options" href="https://github.com/caseykesterson/Author-Website">Other Published Works</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-options" href="/components/">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navbar-options" href="/components/">Contact Me</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
        <div className="content">
            <Helmet>
                <style>{'body { background-color: #b9b09c; }'}</style>
                <div id="bio-picture">
                  <img src={Headshot} alt="Casey Kesterson"></img>
                </div>
            </Helmet>
        </div>
    </Fragment>
  }
}