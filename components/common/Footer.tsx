import React from 'react'
import SocialLinks from './SocialLinks';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="bg-amber-50 w-full py-[20px] text-[#181842] text-[18px]">
            <footer className="px-[50px]">
                <nav className="flex flex-col justify-between gap-10 sm:flex-row sm:flex-wrap">
                    <div>
                        <p className="mb-5 font-[BreeSerif] w-[100%] text-left">
                            At Bueze Tech Limited, we blend innovation, excellence, and passion to deliver top-tier digital solutions tailored to your business needs. From intuitive websites and scalable software to cybersecurity and tech consulting, our expert team ensures every project is driven by results and powered by technology. With a commitment to quality, client satisfaction, and future-forward thinking, Bueze Tech stands as your trusted partner in transforming ideas into impactful digital experiences—making us the best choice in the tech industry.</p>
                        <SocialLinks />
                    </div>
                    <div>
                        <h2 className="text-[24px] text-[#fd9800] mb-2 font-bold">Short Link</h2>
                        <ul>

                            <li><span className="mr-[10px] text-[#fd9800] font-bold">&gt;</span><Link href="/">Home</Link></li>
                            {/* <li><span className="mr-[10px] text-[#fd9800] font-bold">&gt;</span><Link href="/about-us">About Us</Link></li> */}
                            <li><span className="mr-[10px] text-[#fd9800] font-bold">&gt;</span><Link href="/our-process">Our Process</Link></li>
                            <li><span className="mr-[10px] text-[#fd9800] font-bold">&gt;</span><Link href="/blog">Blog</Link></li>
                            <li><span className="mr-[10px] text-[#fd9800] font-bold">&gt;</span><Link href="/community">Community</Link></li>
                            <li><span className="mr-[10px] text-[#fd9800] font-bold">&gt;</span><Link href="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[24px] text-[#fd9800] mb-2 font-bold">Help Link</h2>
                        <ul>

                            <li><span className="mr-[10px] text-[#fd9800] font-bold">&gt;</span><Link href="/">Terms of Use</Link></li>
                            <li><span className="mr-[10px] text-[#fd9800] font-bold">&gt;</span><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><span className="mr-[10px] text-[#fd9800] font-bold">&gt;</span><Link href="/contact-us">Need Support?</Link></li>
                            <li><span className="mr-[10px] text-[#fd9800] font-bold">&gt;</span><Link href="/#faq">FAQs</Link></li>
                            <li><span className="mr-[10px] text-[#fd9800] font-bold">&gt;</span><Link href="/contact-us">Feedback</Link></li>
                            <li><span className="mr-[10px] text-[#fd9800] font-bold">&gt;</span><Link href="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[24px] text-[#fd9800] mb-2 font-bold">Help Link</h2>
                        <address>
                            <Link href="https://maps.app.goo.gl/XhbySAPMMv72hqkU7" title="Bueze tech limited address" target="_blank" className="flex gap-2 mb-5">
                                <span><FontAwesomeIcon icon={faLocationDot} className="text-[#fd9800] w-[16px]" /></span>
                                <span className="text-[#5c5c5d]">2b School Road, Elimgbu, Port Harcourt</span>
                            </Link>
                            <hr />
                            <Link href="mailto: info@buezetech.com" title="Bueze tech limited email" className="items-center flex gap-2 my-5">
                                <span><FontAwesomeIcon icon={faEnvelopeOpen} className="text-[#fd9800] w-[16px]" />
                                </span><span className="text-[#5c5c5d]">info@buezetech.com</span>
                            </Link>
                            <hr />
                            <Link href="/" className="items-center flex gap-2 my-5">
                            <span><FontAwesomeIcon icon={faPhoneFlip} className="text-[#fd9800] w-[20px]" /></span><span className="text-[#5c5c5d]">Call: +234 902 095 6168</span>
                            </Link>

                        </address>
                    </div>
                </nav>
                <div className="text-center mb-5">
                    <hr />
                    <p className="mt-5">&copy; <span className="text-[#fd9800] font-bold">Bueze <span className="text-[#181842]">Tech </span>Limited</span>, <span>All rights reserved</span></p>
                    <p className="italic">...Empowering Businesses With Technology</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
