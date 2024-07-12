"use client";
import Image from "next/image";
import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import ProductCart from "@/components/ProductCart";
import heroImage from "/public/hero-img.webp";
import Promotion from "@/views/Promotion";
import YourComponent from "@/views/YourComponent";
import Newsletter from "@/views/Newsletter";
import Footer from "@/component/layout/footer";



export default function Home() {
    return(
    <div>
        <Hero/>
        <Promotion/>
        <ProductList/>
        <YourComponent/>
        <Newsletter/>
        <Footer/>
        
    </div>
    );
}
