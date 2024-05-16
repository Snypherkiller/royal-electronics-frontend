import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBlog, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //customer
    const navItems = [
        { link: 'Home', path: '/' },
        { link: 'About', path: '/about' },
        { link: 'Shop', path: '/shop' },
        { link: 'Blog', path: '/blog' },
        { link: 'Sign-in', path: 'customer/login' },
        { link: 'Sign-up', path: '/Sign-up' },
        
        // admin
        { link: 'Admin', path: '/admin/dashboard' }
    ];

    return (
        <header className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <nav>
                <div className="flex justify-between items-center">
                    <Link to="/" className="logo">
                        <FaBlog className="icon" />
                        Electronics
                    </Link>

                    <ul className="menu-items">
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path}>{link}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="menu-toggle">
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
                        </button>
                    </div>
                </div>

                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="menu-items">
                        {navItems.map(({ link, path }, index) => (
                            <Link key={index} to={path}>{link}</Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
