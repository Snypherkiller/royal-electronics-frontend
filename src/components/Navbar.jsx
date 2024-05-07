import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBlog, FaTimes } from 'react-icons/fa';

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
        { link: 'Login', path: '/login' },
        { link: 'Sign-up', path: '/Sign-up' },


        

    // admin
        { link: 'Admin', path: '/admin/dashboard' }

    ];

    return (
        <header className={`w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300 ${isSticky ? 'bg-blue-300 opacity-75' : ''}`}>
            <nav className="py-4 lg:px-24 px-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-red-700 flex items-center gap-2">
                        <FaBlog className="inline-block" />
                        Electronics
                    </Link>

                    <ul className="md:flex space-x-12 hidden">
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="space-x-12 hidden lg:flex items-center">
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes className="w-5 hover:text-blue-700" /> : <FaBars className="w-5 hover:text-blue-700" />}
                        </button>
                    </div>
                </div>

                <div className={`md:hidden ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
                    <div className="space-y-4 px-4 mt-16 py-7 bg-blue-700 opacity-75">
                        {navItems.map(({ link, path }, index) => (
                            <Link key={index} to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
