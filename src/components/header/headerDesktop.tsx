'use client'
import * as React from 'react';
import styles from './header.module.scss';
import { Container, Nav, NavLink, Navbar, } from 'react-bootstrap';
import Link from 'next/link';

export interface Props {
}

export default function HeaderDesktop() {
  return (
    <>
            <header className="header header-desktop">
                <div className="nav-placeholder"></div>
                <Navbar fixed="top" collapseOnSelect expand="md" >
                    <Container>
                        {/* Лого */}
                        <Navbar.Brand className={styles.logo} href="/">
                            ColGame
                        </Navbar.Brand>
                        
                        <Nav className='mr-auto'>
                            <Link href="/" className="nav-link">Главная</Link>
                            <Link href="/tournaments" className="nav-link">Турниры</Link>
                            <Link href="#" className={`${styles.button} nav-link`}>Зарегистрироваться</Link>
                            <Link href="/login" className={`${styles.button} nav-link`}>Войти</Link>
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