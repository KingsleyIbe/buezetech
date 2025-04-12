import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '../../styles/components/topHeader.module.css';


const SocialLinks = () => {
    return (
        <div className="">
            <nav className="flex flex-row gap-2">
                <Link href="https://facebook.com" target="_blank" title="Bueze tech limited facebook account" className={styles.socialIconContainer} ><FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} /></Link>
                <Link href="https://facebook.com" target="_blank" title="Bueze tech limited linkendin account" className={styles.socialIconContainer}><FontAwesomeIcon icon={faLinkedinIn} className={`${styles.socialIcon} pt-[2px]`} /></Link>
                <Link href="https://facebook.com" target="_blank" title="Bueze tech limited twitter account" className={styles.socialIconContainer}><FontAwesomeIcon icon={faTwitter} className={`${styles.socialIcon} pt-1`} /></Link>
                <Link href="https://facebook.com" target="_blank" title="Bueze tech limited instagram account" className={styles.socialIconContainer}><FontAwesomeIcon icon={faInstagram} className={`${styles.socialIcon} pt-[2px]`} /></Link>
                <Link href="https://facebook.com" target="_blank" title="Bueze tech limited tiktok account" className={styles.socialIconContainer}><FontAwesomeIcon icon={faTiktok} className={`${styles.socialIcon} pt-[2px]`} /></Link>
            </nav>
        </div>
    )
}

export default SocialLinks;
