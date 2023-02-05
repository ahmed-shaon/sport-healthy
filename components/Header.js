import Link from "next/link";
import React from "react";

export default function Header() {
  const menuItem = <ul className="flex items-center space-x-8 ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Program</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/blog">About Us</Link>
        </li>
        <li>
          <button className="bg-[#264373] text-white px-8 py-3 rounded-[10px]">Log in</button>
        </li>
      </ul>
  return (
    <div className="flex justify-between items-center py-4">
      <Link href="/" className="text-xl text-[#6765f0] font-['Sporting_Grotesque'] space-x-1">
        <span className="bg-[#6765f0] text-white rounded-lg px-2 pb-1">
          Gym
        </span>
        <span>baran</span>
      </Link>
      {
        menuItem
      }
      
    </div>
  );
}
