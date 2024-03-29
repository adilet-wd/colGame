'use client'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import Image from 'next/image';

import googleIcon from "../../assets/icons/google-icon.svg";
import unlockedPassword from "../../assets/icons/unlock-password.svg";
import lockedPassword from "../../assets/icons/lock-password.svg";

export default function Login() {
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setpasswordType] = useState('password');
    const [passwordIcon, setPasswordIcon] = useState(lockedPassword);
    // const [validated, setValidated] = useState(false);

    const toggleVisibility = () => {
        if (passwordInputRef.current) {
            if (passwordType === "password") {
                setpasswordType("text");
                setPasswordIcon(unlockedPassword);
            } else {
                console.log("Нажатие")
                setpasswordType("password");
                setPasswordIcon(lockedPassword);
            }
        }
    };

    useEffect(() => {
        if (passwordInputRef.current && passwordInputRef.current.type === "text") {
            setPasswordIcon(unlockedPassword);
        } else if (passwordInputRef.current && passwordInputRef.current.type === "password") {
            setPasswordIcon(lockedPassword);
        }
    }, [passwordInputRef.current?.type]);

    function handleSubmit (e: React.FormEvent<HTMLFormElement>){
        const form = e.currentTarget;
        e.preventDefault();
        console.log(e)
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
        // if (form.checkValidity() === true) {
        //     orderConfirm(event);
        //     sendEmail(event);
        // }
        // setValidated(true);
    };

    return (
            <Container className="login-container">
                <header className="login-header">
                <h1 className="login-header-title"><Link href="/">ColGame</Link></h1>
                </header>
                <main className="login-component">
                    <div className="login-form-wrapper">
                        <Form className="login__form "noValidate onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="validationMail">
                                <Form.Control className="login__input"
                                    required
                                    type="email"
                                    name="user_email"
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 login__password" controlId="validationUserName">
                                <Form.Control className="login__input"
                                    required
                                    ref={passwordInputRef}
                                    type={passwordType}
                                    name="password"
                                    placeholder="Пароль"
                                />
                                <Image className="login__password-logo" onClick={toggleVisibility} src={passwordIcon} alt="" />
                            </Form.Group>
                            <div className="login-options">
                                <Form.Check className="login-options__remember-me" type={'checkbox'} id={`default-checkbox`} label={`Запомнить меня`}/>
                                <Link className="login-options__forgot-password" href="#">Забыли пароль?</Link>
                            </div>
                            <Button className="login__button"type="submit">Войти</Button>
                        </Form>
                        <div className="login-social-component">
                            <div className="login-social__separator">
                                <div></div>
                                <div className="login-social__separator-text">Или</div>
                                <div></div>
                            </div>
                            <div className="login-social-options">
                                <Button className="login-social-button -google">
                                    <div className="login-social-icon">
                                        <Image src={googleIcon} alt="Google Icon" />   
                                    </div>
                                    <div className="login-social-text">Войти через Google</div>
                                    <div></div>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <h4 className="login-signup"></h4>
                </main>
                
            </Container>
    );
}


