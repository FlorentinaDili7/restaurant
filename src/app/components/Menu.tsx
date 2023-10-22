"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon'

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },

]

const Menu = () => {
    const [open, setOpen] = useState(false);

    const user = false;

    return (
        <div>
            {!open ? (
                < Image src="/open.png" alt="" width={20} height={20} onClick={() => setOpen(true)} />
            ) : (
                <Image src="/close.png" alt="" width={20} height={20} onClick={() => setOpen(false)} />
            )}
            {open && (
                <div className="absolute bg-portokall text-white position-absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col w-full gap-8 items-center justify-center text-lg z-10">
                    {links.map(item => (
                        <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>
                    ))}
                    {/* The code below is going to be updated */}
                    {!user ?
                        (
                            <Link href="/login" onClick={() => setOpen(false)}>Log in</Link>
                        ) : (<Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>
                        )
                    }
                    <Link href="/cart" onClick={() => setOpen(false)}>
                        <CartIcon />
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Menu