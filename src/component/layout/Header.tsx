import Link from "next/link";
import logo from "/public/Logo.webp";
import Image from "next/image";
import { ShoppingCart, Search } from "lucide-react";

const Header = () => (
  <div className="flex justify-between items-center py-7 px-9">
    <div className="flex items-center gap-x-10">
      <Image src={logo} alt="logo" className="w-40" />
      <ul className="flex gap-x-10">
        <li className="text-lg">
          <Link href={"/"}>Female</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}>Male</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}>Kids</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}>All Products</Link>
        </li>
      </ul>
    </div>

    <div className="flex items-center relative">
      <div className="flex items-center">
        <span className="cursor-pointer">
          <Search className="h-5 w-5 text-gray-400" />
        </span>
        <input
          type="text"
          placeholder="What you looking for... "
          className="border border-gray-300 px-7 py-1 ml-2 rounded-md"
        />
      </div>
    </div>

    <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
      <ShoppingCart className="h-6 w-6" />
    </div>
  </div>
);

export default Header;

