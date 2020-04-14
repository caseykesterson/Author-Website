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
      <Navbar className = "Navbar" variant = "light" expand="md">
        <NavbarBrand className="navbar-brand">Casey Kesterson</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
      </Navbar>
    </Fragment>
  }
}