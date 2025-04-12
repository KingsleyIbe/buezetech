import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocation';
import { faEnvelopeOpen, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '../../styles/components/topHeader.module.css';

const TopHeader = () => {
  return (
    <div className="bg-black flex flex-row justify-between items-center py-[30px] px-[50px]" >
        <div className="flex gap-10">
            <Link href="https://maps.app.goo.gl/XhbySAPMMv72hqkU7" title="Bueze tech limited address" target="_blank" className="flex gap-2">
              <span><FontAwesomeIcon icon={faLocationDot} className="text-[#fd9800] w-[16px]" /></span>
              <span className="text-[#5c5c5d]">2b School Road, Elimgbu, Port Harcourt</span>
            </Link>
            <Link href="mailto: info@buezetech.com" title="Bueze tech limited email" className="items-center flex gap-2">
              <span><FontAwesomeIcon icon={faEnvelopeOpen} className="text-[#fd9800] w-[16px]"/>
              </span><span className="text-[#5c5c5d] text-[16px]">info@buezetech.com</span>
            </Link>
        </div>
        <div className="">
            <nav className="flex flex-row gap-2">
                <Link href="https://facebook.com" target="_blank" title="Bueze tech limited facebook account" className={styles.socialIconContainer} ><FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} /></Link>
                <Link href="https://facebook.com" target="_blank" title="Bueze tech limited linkendin account" className={styles.socialIconContainer}><FontAwesomeIcon icon={faLinkedinIn} className={`${styles.socialIcon} pt-1`} /></Link>
                <Link href="https://facebook.com" target="_blank" title="Bueze tech limited twitter account" className={styles.socialIconContainer}><FontAwesomeIcon icon={faTwitter} className={`${styles.socialIcon} pt-2`}/></Link>
                <Link href="https://facebook.com" target="_blank" title="Bueze tech limited instagram account" className={styles.socialIconContainer}><FontAwesomeIcon icon={faInstagram} className={`${styles.socialIcon} pt-1`}/></Link>
                <Link href="https://facebook.com" target="_blank" title="Bueze tech limited tiktok account" className={styles.socialIconContainer}><FontAwesomeIcon icon={faTiktok} className={`${styles.socialIcon} pt-1`}/></Link>
            </nav>
        </div>
    </div>
  );
};

export default TopHeader;
