import { ScrollContext } from "@utils/contexts/scroll-observer";
import Image from "next/image";
import { useCallback, useContext, useRef, useState } from "react";

const Masthead: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      style={{
        transform: `translateY(-${progress * 20}vh)`,
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
        <div
          className={`flex-grow-0  transition-all duration-1000 ${
            imageLoaded ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="mb-6 text-4xl xl:text-5xl">Trung</h1>
          <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
            <span>Hello,</span>
            <span> I&apos;m fresher front-end developer</span>
          </h2>
        </div>
      </div>
      <div
        className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          src="/assets/arrow-down.svg"
          alt="scoll down"
          width={"60%"}
          height={"60%"}
          onLoadingComplete={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Masthead;
