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
        <div className="border">
            <ul className="flex flex-row gap-2">
                <li className="bg-[#fff] rounded-[50%] py-2 px-4" ><Link href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} className="text-[#181842] w-[20px] min-h-[20px]" /></Link></li>
                <li className="bg-[#fff] rounded-[50%] py-2 px-4"><Link href="https://facebook.com"><FontAwesomeIcon icon={faLinkedinIn} className="text-[#181842] w-[20px] min-h-[20px] pt-1" /></Link></li>
                <li className="bg-[#fff] rounded-[50%] py-2 px-4"><Link href="https://facebook.com"><FontAwesomeIcon icon={faTwitter} className="text-[#181842] w-[20px] min-h-[20px] pt-2"/></Link></li>
                <li className="bg-[#fff] rounded-[50%] py-2 px-4"><Link href="https://facebook.com"><FontAwesomeIcon icon={faInstagram} className="text-[#181842] w-[20px] min-h-[20px] pt-1"/></Link></li>
                <li className="bg-[#fff] rounded-[50%] py-2 px-4"><Link href="https://facebook.com"><FontAwesomeIcon icon={faTiktok} className="text-[#181842] w-[20px] min-h-[20px] pt-1"/></Link></li>
            </ul>
        </div>

    </div>
  );
};

export default TopHeader;
