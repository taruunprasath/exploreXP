import React, { useEffect, useRef} from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../Assets/logo2.png';
import '../Header/header.css';
import { useAuth } from '../../AuthContext.js';

const nav__links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tour',
        display: 'Tour'
    },
    {
        path: '/gallery',
        display: 'Gallery'
    },
    {
        path: '/review',
        display: 'Review'
    },
];

const Header = () => {
    const { user, logout } = useAuth();
    const headerRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

    useEffect(() => {
        stickyHeaderFunc();

        return () => window.removeEventListener('scroll', stickyHeaderFunc);
    }, []);

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <Link to="/home">
                                <img src={Logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="navigation">
                            <ul className="menu d-flex align-items-cneter gap-5">
                                {nav__links.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink
                                            to={item.path}
                                            className={(navClass) => (navClass.isActive ? 'active__link' : '')}
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="nav__right d-flex align-items-center gap-4">
                            <div className="nav__btns d-flex align-items-center gap-4">
                                {user ? (
                                    <button style={{color:"white"}} className="btn primary__btn" onClick={logout}>
                                        Logout
                                    </button>
                                ) : (
                                    <>
                                        <Button className="btn secondary__btn">
                                            <Link to="/login">Login</Link>
                                        </Button>
                                        <Button className="btn primary__btn">
                                            <Link to="/signup">Signup</Link>
                                        </Button>
                                    </>
                                )}
                            </div>
                            <span className="mobile__menu">
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
