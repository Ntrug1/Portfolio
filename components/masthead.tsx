import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ArrowDown2 } from "iconsax-react";
import { ScrollContext } from "../utils/contexts/ScrollObserver";

const Masthead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (refContainer && elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <div
      ref={refContainer}
      style={{
        transform: `translateY(-${progress * 50}vh)`,
      }}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover "
      >
        <source
          src="/assets/background-gif.mp4"
          type="video/mp4; codecs=hvc1"
        />
        <source
          src="/assets/background-gif.webm"
          type="video/webm; codecs=vp9"
        />
      </video>
      <div className="p-12 font-bold z-10 text-center drop-shadow[0_5px_3px_rgba(0,0,0,0.4)] flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Trung</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>Hello,</span>
          <span> I&apos;m fresher front-end developer</span>
        </h2>
      </div>
      <div className="flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 z-10">
        <ArrowDown2 size={64} color="white" />
      </div>
    </div>
  );
};

export default Masthead;
