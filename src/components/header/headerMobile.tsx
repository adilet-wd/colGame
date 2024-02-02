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
            <header className="header header-mobile" >
                <div className="nav-placeholder"></div>
                <Navbar fixed="top" collapseOnSelect expand="md" >
                    <Container className="header-container">
                        <Navbar.Brand className={`${styles.logo, styles.logoMobile} `} href="/">
                            ColGame
                        </Navbar.Brand>
                        <div className="enterButtons">
                            <Button className={`${styles.button} button-register nav-link`}>Зарегистрироваться</Button>
                            <Button className={`${styles.button} button-login nav-link`}>Войти</Button>
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
                                <Link onClick={closeCanvas} href="/" className="nav-link">Главная</Link>
                                <Link onClick={closeCanvas} href="/tournaments" className="nav-link">Турниры</Link>
                                <Button onClick={closeCanvas} className={`${styles.button} nav-link`}>Зарегистрироваться</Button>
                                <Button onClick={closeCanvas} className={`${styles.button} nav-link`}>Войти</Button>
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
function closeCanvas() {
    window.scrollTo(0, 0);
    const navbarToggler = document.querySelector(".navbar-toggler") as HTMLElement;
    if (navbarToggler && !navbarToggler.classList.contains("collapsed")){
        navbarToggler.click();
    }
}