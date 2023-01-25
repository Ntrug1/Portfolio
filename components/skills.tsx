import style from "@styles/skills.module.css";
import { ScrollContext } from "@utils/contexts/ScrollObserver";
import { useContext, useRef } from "react";

const opacityForBlock = (sectionProgress: number, blocNo: number) => {
  const progress = sectionProgress - blocNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};
const Skills = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  let numberOfPage = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numberOfPage - 0.2, Math.max(0.2, percentY)); // !BUG: not changing opacity correctly when scrolling
  }

  return (
    <div ref={refContainer} className="bg-white text-black">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={style.skillText}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            Aliqua velit ut magna qui
          </div>
          <span
            className={`${style.skillText} inline-block after:content-['_']`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Proident deserunt ullamco veniam quis deserunt. Amet aliquip
          </span>
          <span
            className={`${style.skillText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            Proident deserunt ullamco veniam quis deserunt. Amet aliquip
          </span>
        </div>
      </div>
    </div>
  );
};
export default Skills;
