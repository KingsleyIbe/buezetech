import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocation';
import { faEnvelopeOpen, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '../../styles/components/topHeader.module.css';
import SocialLinks from './SocialLinks';

const TopHeader = () => {
  return (
    <div className="bg-black flex flex-row justify-between items-center py-[10px] px-[50px]" >
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
        <SocialLinks />
    </div>
  );
};

export default TopHeader;
