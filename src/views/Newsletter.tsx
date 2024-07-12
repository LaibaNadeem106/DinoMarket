"use client"
import React from 'react'
import './Newsletter.css';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



const Newsletter = () => {
  return (
    <div>
    <div className="background2-text flex flex-col items-center mt-3">
    <strong className='mr-16 mt-1'>Newsletter</strong>
    <div className="flex w-full max-w-sm items-center space-x-2 mr-16 mt-1">
      <Input type="email" placeholder="Input email address" />
      <Button className='bg-black' type="submit">Get Started</Button>
    </div>
  </div>
  <div className="text-center mt-60">
    <h3 className="font-bold text-3xl space-x-2 mt-4 ml-14">Subscribe Our Newsletter</h3>
    <p className='text-1xl mt-2 ml-14'>Get the latest information and promo offers directly</p>
  </div>
  </div>
    
  )
}

export default Newsletter