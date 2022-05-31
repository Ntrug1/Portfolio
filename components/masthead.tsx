import React from "react";
import Image from "next/image";
import { ArrowDown2 } from "iconsax-react";

const Masthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        {/* <source src */}
        {/* need to find video with both m4v type and webm */}
      </video>
      <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
        {/* add logo image with width: 128/3, height:114/3, alt: logo */}
      </div>
      <div className="p-12 font-bold z-10 text-white text-center drop-shadow[0_5px_3px_grba(0,0,0,0.4)] flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">
          Trung
        </h1>
          <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
            <span>Hello,</span>
            <span> I'm fresher front-end developer</span>
          </h2>
      </div>
      <div className="flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
        <ArrowDown2 size={64} color='white' />
      </div>
    </div>
  )
}

export default Masthead