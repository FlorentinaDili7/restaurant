import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {

    const user = false;

    return (
        <div className='h-12 text-portokall p-4 flex justify-between border-b-2 border-portokall uppercase md:h-16 lg:px-20 xl:px-40'>
            {/* Left links */}
            <div className="hidden md:flex gap-4 flex-1">
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/contacts">Contact</Link>
            </div>
            {/* Logo */}
            <div className="font-extrabold text-kaltert md:text-[24px] md:text-center flex-1">
                <Link href="/home">Pizza Mania</Link>
            </div>
            <div className="md:hidden">
                <Menu />
            </div>
            {/* Right links */}
            <div className="hidden md:flex gap-4 items-center justify-end flex-1">
                <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-portokall text-kaltert rounded-md px-1">
                    <Image src="/phone.png" width={20} height={20} alt="" />
                    <span>+4567898765</span>
                </div>
                {!user ?
                    (
                        <Link href="/login" >Log in</Link>
                    ) : (<Link href="/orders" >Orders</Link>
                    )
                }
                <CartIcon />
            </div>
        </div>
    )
}

export default Navbar