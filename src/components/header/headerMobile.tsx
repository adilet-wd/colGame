'use client'
import * as React from 'react';
import styles from './header.module.scss';
import { Button, Container,  Nav, NavLink, Navbar, Offcanvas } from 'react-bootstrap';
import Link from 'next/link';

export interface Props {
}

export default function HeaderMobile() {
  return (
    <>
            <header className="header">
                <div className="nav-placeholder"></div>
                <Navbar fixed="top" collapseOnSelect expand="md" >
                    <Container className="header-container">
                        <Navbar.Brand className={`${styles.logo, styles.logoMobile} `} href="/">
                            ColGame
                        </Navbar.Brand>
                        <div className={styles.enterButtons}>
                            <Button className={`${styles.button} nav-link`}>Зарегистрироваться</Button>
                            <Button className={`${styles.button} nav-link`}>Войти</Button>
                        </div>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            ColGame
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link href="/" className="nav-link">Главная</Link>
                                <Link href="/tournaments" className="nav-link">Турниры</Link>
                                <Button className={`${styles.button} nav-link`}>Зарегистрироваться</Button>
                                <Button className={`${styles.button} nav-link`}>Войти</Button>
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