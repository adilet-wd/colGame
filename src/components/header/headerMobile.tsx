'use client'
import * as React from 'react';
import styles from './header.module.scss';
import { Button, Container, Form, Nav, NavDropdown, NavLink, Navbar, Offcanvas } from 'react-bootstrap';

export interface Props {
}

export default function HeaderMobile() {
  return (
    <>
            <div className={styles.headerPlaceholder}></div>
            <header className={styles.header}>
                <div className="nav-placeholder"></div>
                <Navbar fixed="top" collapseOnSelect expand="md" >
                    <Container className={styles.headerContainer}>
                        {/* Лого */}
                        <Navbar.Brand className={styles.logo} href="/">
                            ColGame
                        </Navbar.Brand>
                        <div className={styles.enterButtons}>
                            <Button className={styles.button}>Зарегистрироваться</Button>
                            <Button className={styles.button}>Войти</Button>
                        </div>
                        {/* Появляющийся бургер */}
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            ColGame
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <NavLink >Главная</NavLink>
                                <NavLink>Турнирная таблица</NavLink>
                                <Button className={styles.button}>Зарегистрироваться</Button>
                                <Button className={styles.button}>Войти</Button>
                            </Nav>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        {/* Часть,которая останется в бургере */}
                        {/* <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <NavLink >Главная</NavLink>
                                <NavLink>Турнирная таблица</NavLink>
                                <Button>Зарегистрироваться</Button>
                                <Button>Войти</Button>
                            </Nav>
                        </Navbar.Collapse> */}
                    </Container>
                </Navbar>
            </header>


        </>
  );
}

// Helper functions
function getExclamationMarks(numChars: number) {
  
}