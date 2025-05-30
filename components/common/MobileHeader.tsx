'use client';
import React, { useState } from 'react'
import Link from 'next/link';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/components/mainHeader.module.css';
import Logo from './Logo';

const MobileHeader = () => {
    const [isOpen, setIsopen] = useState(false);

    const handleToggle = () => {
        setIsopen(!isOpen);
        console.log("click");
    };

    return (
        <div className="block bg-[#ddd] border fixed top-0 w-full py-[20px] z-50 lg:hidden">
            <header className="relative">
                <nav className="flex justify-between items-center px-[50px]">
                   <Logo />
                    <button type="button" className={styles.bookSessionBtn}>
                      <Link href="/contact-us#calendly">Book A Session</Link>
                    </button>
                    <button onClick={handleToggle}>
                        <FontAwesomeIcon icon={faBars} className="text-[#181842] w-[30px] h-[30px] border p-2 rounded-[8px]" />
                    </button>
                </nav>

                {isOpen && (
                    <nav className="absolute top-[80] w-[100%] bg-[#181842] z-40 p-6">
                        <ul className="flex flex-col gap-5 text-[#fd9800]">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about-us">About Us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/community">Community</Link></li>
                            <li><Link href="/contact-us">Contact Us</Link></li>
                        </ul>
                    </nav>
                )}
            </header>
        </div>
    );
};

export default MobileHeader;
