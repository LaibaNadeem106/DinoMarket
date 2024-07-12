import React from 'react';
import Link from 'next/link';
import logo from '/public/Logo.webp';
import Image from 'next/image';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Footer = () => {
  const logoStyle = 'w-48 text-black '; // Set text-black for black color and bg-gray-200 for gray background
  const iconStyle = 'h-8 w-8 bg-gray-200 p-2 rounded-md'; // Set bg-gray-200 for gray background
  const iconFill = 'text-black'; // Set to text-black for black color

  return (
    <div className='mt-80 ml-20'>
      <Image src={logo} alt='logo' className={logoStyle} />
      <p className='mt-10'>
        Small, artisan label that offers a thoughtfully curated<br/> collection of high-quality everyday essentials made.
      </p>
      <div className=' mt-0 flex space-x-8 ml-80'>
        <div className='flex-col items-center ml-60'>
          <h2 className='font-bold'>Contact</h2>
          <p>Whatsapp</p>
          <p>Support 24h</p>
        </div>
        <div className='flex-col items-center ml-60'>
          <h1 className='font-bold'>Company</h1>
          <p>About</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>How it Works</p>
          <p>Contact Us</p>
        </div>
        <div className='flex-col items-center ml-60'>
          <h1 className='font-bold'>Support</h1>
          <p>Support Carrer</p>
          <p>24h Service</p>
          <p>Quick Chat</p>
        </div>
      </div>
      <div className='flex mt-0 gap-6'>
        <div className={`${iconStyle} ${iconFill}`}>
          <FacebookIcon className='h-full w-full' />
        </div>
        <div className={`${iconStyle} ${iconFill}`}>
          <LinkedinIcon className='h-full w-full' />
        </div>
        <div className={`${iconStyle} ${iconFill}`}>
          <TwitterIcon className='h-full w-full' />
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
