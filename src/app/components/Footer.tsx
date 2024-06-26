import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-[#F58220] flex items-center justify-between border-t border-portokall">
            <Link href="/" className="font-bold text-xl">PIZZA MANIA</Link>
            
            <p>© ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export default Footer;