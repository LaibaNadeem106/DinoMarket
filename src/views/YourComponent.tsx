import React from 'react';
import Image from 'next/image';
import './YourComponent.css';  // Make sure to import your styles
import image1 from "/public/image1.webp";
import { Button } from "@/components/ui/button";

const YourComponent: React.FC = () => {
  return (
   
      
      
    <div className="container background-strip mt-8 flex space-x-4 ">
      {/* Section 1 - Top Left */}
      <div className="section section1">
        <div className="background-text">
          <span><strong>Different</strong></span> <br />
          <span><strong>from</strong></span> <br />
          <span><strong>others</strong></span>
        </div>
        <div className='flex items-start'>
          <ul className="ml-4">
            <li className="font-bold mt-9">Using Good Quality <br />Materials</li>
            <li>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</li>
            <li className="font-bold mt-9">100% Handmade <br />Products</li>
            <li>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>

      {/* Section 3 - Left Top (Small Gap from Section 1) */}
      <ul className="section section3">
        <li className='font-bold mt-9'>Modern Fashion <br />Design</li>
        <li>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</li>
        <li className='font-bold mt-9'>Discount for Bulk <br />Orders</li>
        <li>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</li>
      </ul>
       
      <div className="absolute right-40 text-center ">
        <h1 className="font-bold text-4xl">Unique and Authentic <br /> Vintage Designer<br />  Jewellery</h1>
        <p>This piece is ethically crafted in our small family-<br />owned workshop in Peru with unmatched <br />attention to detail and care. The Natural color is <br />the actual natural color of the fiber, undyed and<br /> 100% traceable.</p>
        <div className='flex justify-center'><Button className='bg-black h-10 px-4 flex items-center'>
          <div className="h-3 w-3 rounded-full bg-white mr-2 ">
          </div>
          See All Product
        </Button>
        </div>
      </div>
      

      {/* Centered Image */}
      <div className="flex justify-center items-center flex-col">
        <Image
          src={image1}
          alt="Image1"
          width={250}
          height={300}
          decoding="async"
          data-nimg="1"
          loading="lazy"
          style={{ color: 'transparent' }}
          className="justify-center"
        />
      </div>
    </div>
  );
};

export default YourComponent;
