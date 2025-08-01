import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/components/mainHeader.module.css';
import Logo from './Logo';

const MainHeader = () => {
  return (
    <div className="bg-[#fff] border z-[50] top-[50] fixed w-[100%] py-[5px] px-[50px] hidden lg:block">
        <header>
            <nav className="flex justify-between items-center text-[#181842]">
                <div className="flex flex-col items-center text-[24px] font-bold">
                   <Logo />
                   <h2 className="text-[10px]">Bueze Tech</h2>
                </div>
                <ul className="flex gap-5 text-[#181842]">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/our-process">Our Process</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/community">Community</Link></li>
                    <li><Link href="/contact-us">Contact Us</Link></li>
                </ul>

                <div className="flex gap-5 items-center">
                    <FontAwesomeIcon icon={faPhoneFlip} className="text-[#181842] w-[20px]" />
                    <div className="flex flex-col relative after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-[#181842] pr-4">
                       <p className="text-[#5c5c5d] font-bold"> Have any questions?</p>
                       <Link href="/" className="text-[#fd9800] opacity-[0.8]">Call: +234 703 033 1929</Link>
                    </div>
                    <button type="button" className={styles.bookSessionBtn}>
                      <Link href="/contact-us#calendly">Book A Session</Link>
                    </button>
                </div>
            </nav>
        </header>
    </div>
  );
};

export default MainHeader;
