import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.scss'

import logo from '../assets/MAGbank.svg'
import { Navbar, Nav, Container, Button, ButtonGroup, NavDropdown, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navigation  = ({ onClick, isLogged, auth }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    auth.logout(() => navigate('/'))
  }

    return (
    <Navbar variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to='/'>
            <img
              src={logo}
              height="30"
              className="d-inline-block align-top"
              alt="MAGbank logo"
            />
          </Link>
        </Navbar.Brand>
        {isLogged && (
          <>
          <Form>
            <div className='navbar__Search-group d-none d-lg-flex'>
              <Form.Control type="text" placeholder="O que você procura?" />
              <Button variant='link'>
                <FontAwesomeIcon icon={faSearch} color="#FFF" />
              </Button>
            </div>
          </Form>
          <Button onClick={handleClick} variant='outline-light'>Sair</Button>
          </>
        )}
        {!isLogged && (
          <>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#cartao">Cartão</Nav.Link>
              <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
            <ButtonGroup aria-label="Basic example">
              <Button variant="outline-light">
                  <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/login">
                      Pessoa Física
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/login">
                      Pessoa Jurídica
                    </Link>
                  </NavDropdown.Item>
                  </NavDropdown>
              </Button>
              <Button variant="outline-light" onClick={onClick}>abra sua conta</Button>
            </ButtonGroup>
          </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
)}

export default Navigation