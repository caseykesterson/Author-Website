import React, { Component } from 'react';
import logo from './logo.svg';
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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

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
      <div className="content"
    />
    </Fragment>
  }
}