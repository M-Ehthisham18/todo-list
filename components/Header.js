import React from "react";
import Link from "next/link";
const Header = ({ user = "shahul" }) => {
  return (
    <>
      <div className="px-10 py-4 bg-[#00ced1] justify-between flex">
        <div className="font-extrabold text-2xl flex items-center">
          <Link href="/Home"> My To-Do List</Link>
        </div>
        <div>
          <p className="text-3xl font-extrabold ">{user}</p>
        </div>
        <div className="justify-between flex items-center gap-8 pr-[24px] font-bold text-xl ">
          <Link href="/Home" className="hover:underline underline-offset-[20px] decoration-[7px]  decoration-[#e8faff]">    Home    </Link>
          <Link href="/About"> About</Link>
          <Link href="/Blog"> Blog</Link>
          <Link href="/Contact"> Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
