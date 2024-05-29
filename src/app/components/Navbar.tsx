import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';
import Image from 'next/image';
import UserLinks from './UserLinks';

const Navbar = () => {

    return (
        <div className='h-12 text-[#F58220] p-4 flex justify-between border-b-2 border-[#F58220] uppercase md:h-16 lg:px-20 xl:px-40'>
            {/* Left links */}
            <div className="hidden md:flex gap-4 flex-1">
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
            </div>
            {/* Logo */}
            <div className="font-extrabold text-kaltert md:text-[24px] md:text-center flex-1">
                <Link href="/">PMANIA</Link>
            </div>
            <div className="md:hidden">
                <Menu />
            </div>
            <div className="hidden md:flex gap-4 items-center justify-end flex-1">
                <UserLinks />
                <CartIcon />
            </div>
        </div>
    )
}

export default Navbar