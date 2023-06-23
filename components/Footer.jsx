import React from 'react';
import photof from '@/public/footerphoto.png';
import Image from 'next/image';
function Footer() {
  return (
    <div className="z-[-1]">
      <Image alt="footerphoto" src={photof} />
    </div>
  );
}

export default Footer;
