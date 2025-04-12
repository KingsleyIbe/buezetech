import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/components/mainHeader.module.css';
import Logo from "../../public/logo.png";

const MainHeader = () => {
  return (
    <div className="bg-[#fff] py-[30px] px-[50px]">
        <header>
            <nav className="flex justify-between items-center">
                <div>
                    <Link href="/"><Image src={Logo} alt="Bueze Tech Limited Logo" width="60" height="40" /></Link>
                </div>
                <ul className="flex gap-5 text-[#181842] font-bold">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about-us">About Us</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/community">Community</Link></li>
                    <li><Link href="/contact-us">Contact Us</Link></li>
                </ul>

                <div className="flex gap-5 items-center">
                    <FontAwesomeIcon icon={faPhoneFlip} className="text-[#181842] w-[20px]" />
                    <div className="flex flex-col relative after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[2px] after:bg-[#181842] pr-4">
                       <p className="text-[#5c5c5d] font-bold"> Have any questions?</p>
                       <Link href="/" className="text-[#fd9800] opacity-[0.8]">Call: +234 902 095 6168</Link>
                    </div>
                    <button type="button" className={styles.bookSessionBtn}>
                      <Link href="/">Book A Session</Link>
                    </button>
                </div>
            </nav>
        </header>
    </div>
  );
};

export default MainHeader;
