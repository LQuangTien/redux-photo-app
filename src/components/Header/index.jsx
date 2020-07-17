import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss'
Header.propTypes = {

};

function Header() {
  return (
    <header className='header'>
      <Container>
        <Row className='justify-content-between'>
          <Col xs='auto'>
            <a
              href="https//facebook.com"
              className='header__link header__title'
              target='_blank'
              rel='noopener noreferrer'
            >
              LQTien
            </a>
          </Col>

          <Col xs='auto'>
            <NavLink
              exact
              className='header__link'
              to='/photos'
              activeClassName='header__link--active'
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;