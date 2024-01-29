'use client'
import * as React from 'react';
import styles from './header.module.scss';
import { Button, Container, Form, Nav, NavDropdown, NavLink, Navbar, Offcanvas } from 'react-bootstrap';

export interface Props {
}

export default function HeaderDesktop() {
  return (
    <>
            <div className={styles.headerPlaceholder}></div>
            <header className={styles.header}>
                <Navbar fixed="top" collapseOnSelect expand="md" >
                    <Container>
                        {/* Лого */}
                        <Navbar.Brand className={styles.logo} href="/">
                            ColGame
                        </Navbar.Brand>
                        
                        <Nav className='mr-auto'>
                            <NavLink >Главная</NavLink>
                            <NavLink>Турнирная таблица</NavLink>
                            <button className={`${styles.button} nav-link`}>Зарегистрироваться</button>
                            <button className={`${styles.button} nav-link`}>Войти</button>
                        </Nav>
                    </Container>
                </Navbar>
            </header>


        </>
  );
}

// Helper functions
function getExclamationMarks(numChars: number) {
  
}