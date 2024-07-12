import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImage from "/public/hero-img.webp";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Feature1 from "/public/Feature1.webp";
import Feature2 from "/public/Feature2.webp";
import Feature3 from "/public/Feature3.webp";
import Feature4 from "/public/Feature4.webp";

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-y-10 py-6'>
      {/*left div*/}
      <div>
        <Badge className='py-3 px-6 mt-8 rounded-lg bg-blue-200 text-blue-700'>Sale 70%</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6" style={{ whiteSpace: 'pre-line' }}>
          An Industrial Take on {'\n'} Streetwear
        </h1>

        <div className="leading-7 mt-6">
          <p>Anyone can beat you but no one can beat your</p>
          <p className="leading-7 mt-0">outfit as long as you wear Dine outfits.</p>
        </div>

        <Button className='bg-black h-13 px-8 mt-6 flex items-center'>
          <div className="h-10 w-10 rounded-full flex justify-center items-center mr-2">
            <ShoppingCart className="h-6 w-6" />
          </div>
          Start Shopping
        </Button>

        <div className="flex mt-40">
          <Image src={Feature1} alt="Feature 1" className="mr-8" />
          <Image src={Feature2} alt="Feature 2" className="mr-8" />
          <Image src={Feature3} alt="Feature 3" className="mr-8" />
          <Image src={Feature4} alt="Feature 4" className="mr-8" />
        </div>
      </div>
      {/*right div*/}
      <div className='flex-1 relative'>
        <div className='absolute left-0 top-0 bg-pink-100 h-full w-full rounded-full' style={{ zIndex: '-1' }}></div>
        <Image src={heroImage} alt='hero' className='relative z-10' />
      </div>
    </section>
  );
};

export default Hero;

