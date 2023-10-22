import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-kaltert flex items-center justify-between border-t-2 border-portokall">
            <Link href="/" className="font-bold text-xl">Pizza Mania</Link>
            <p>@ ALL RIGHTS RESERVED.</p>
        </div>

    )
}

export default Footer