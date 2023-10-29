
import React from 'react'
import Image from 'next/image'

const Slider = () => {
    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex items-center justify-center flex-col gap-8 text-portokall font-bold">
                <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
                    titulli
                </h1>
                <button className="bg-white border-2 border-portokall rounded-sm text-portokall hover:bg-portokall hover:text-white py-4 px-8">Order Now</button>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="w-full flex-1 relative">
                <Image src="/slide1.png" alt="" fill className="object-cover" />
            </div>
        </div>
    )
}

export default Slider

