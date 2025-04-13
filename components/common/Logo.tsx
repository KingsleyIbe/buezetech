import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImage from "../../public/logo.png";

const Logo = () => {
  return (
          <Link href="/">
            <Image src={LogoImage} alt="Bueze Tech Limited Logo" width={60} height={40}/>
        </Link>
  );
};

export default Logo;
