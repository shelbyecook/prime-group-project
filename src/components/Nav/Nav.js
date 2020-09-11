import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

import {
  Navbar,
  NavbarBrand,
  UncontrolledCollapse,
  Container,
  Row,
  Col,
  NavItem,
  NavLink,
  Popover,
} from 'reactstrap';

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }
  console.log(props);

  return (
    <Navbar
      className="navbar-horizontal navbar-dark"
      style={{ backgroundColor: '#bc91d9' }}
      expand="lg"
    >
      <Container>
        {/* <NavLink onClick={(e) => e.preventDefault()}> */}
        <Link to="/home">
          <img
            style={{
              marginTop: '2px',
              marginLeft: '2px',
              height: '75%',
              width: '75%',
            }}
            src="https://www.innovateherkc.com/wp-content/uploads/2019/09/InnovateHer_Logo_small.png"
            alt="logo for InnovateHer KC"
          />
        </Link>
        {/* </NavLink> */}
        <button
          aria-controls="navbar-info"
          aria-expanded={false}
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbar-info"
          data-toggle="collapse"
          id="navbar-info"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar-info">
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6"></Col>
              <Col className="collapse-close" xs="6">
                <button
                  aria-controls="navbar-info"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#navbar-info"
                  data-toggle="collapse"
                  id="navbar-info"
                  type="button"
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Show the link to the info page and the logout button if the user is logged in */}
          <div className="ml-auto">
            {props.store.user.id && (
              <>
                <i className="ni ni-circle-08" style={{ color: 'white' }} />
                <NavLink className="nav-item">
                  <Link className="nav-item" to={loginLinkData.path}>
                    {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
                    {loginLinkData.text}
                  </Link>
                </NavLink>
                <i className="ni ni-book-bookmark" style={{ color: 'white' }} />
                <NavLink className="nav-item">
                  <Link className="nav-item" to="/info">
                    Info Page
                  </Link>
                </NavLink>
                <i className="ni ni-user-run" style={{ color: 'white' }} />
                <NavLink className="nav-logout">
                  <LogOutButton className="nav-logout" />
                </NavLink>
              </>
            )}

            {/* Always show this link since the about page is not protected */}
            <NavLink
              className="nav-item"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <Link className="nav-item" to="/about">
                About
              </Link>
            </NavLink>
          </div>
        </UncontrolledCollapse>
      </Container>
    </Navbar>
  );
};

export default connect(mapStoreToProps)(Nav);
