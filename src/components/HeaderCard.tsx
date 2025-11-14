import { GlassCard } from "@developer-hub/liquid-glass";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function HeaderCard() {
  const [padding, setPadding] = useState<string>("40px 40px");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const handle = (e: MediaQueryListEvent | MediaQueryList) => {
      setPadding(e.matches ? "40px 40px" : "20px 20px");
    };
    handle(mq);
    // modern and legacy listeners
    if ("addEventListener" in mq) {
      (mq as MediaQueryList).addEventListener(
        "change",
        handle as EventListener
      );
      return () =>
        (mq as MediaQueryList).removeEventListener(
          "change",
          handle as EventListener
        );
    } else {
      (mq as MediaQueryList).addListener(
        handle as (e: MediaQueryListEvent) => void
      );
      return () =>
        (mq as MediaQueryList).removeListener(
          handle as (e: MediaQueryListEvent) => void
        );
    }
  }, []);

  return (
    <div className="relative w-full my-8 flex place-content-center">
      <div className="flex flex-row  items-center mx-4">
        <GlassCard
          displacementScale={10}
          padding={padding}
          blurAmount={0.5}
          className="z-20"
        >
          <p
            className="font-display font-normal  text-4xl md:text-7xl text-sky-700"
            data-text="Samuel Tint"
          >
            Samuel Tint
          </p>
          <hr className="my-2 md:my-6 border-t border-0 md:border-2 border-sky-800 px-6 w-full" />
          <p
            className="font-display font-normal text-2xl md:text-4xl text-sky-700"
            data-text="Sydney Based Software Developer"
            style={{ filter: "url(#inner-shadow)" }}
          >
            Sydney Based Software Developer
          </p>
        </GlassCard>
        <div className="hidden md:block h-96 w-96 aspect-square shadow-lg -ml-16 rounded-full overflow-hidden z-10">
          <img src="/assets/images/profile.jpg" alt="Profile" />
        </div>
      </div>
      <img
        className="translate-y-5 md:translate-0 absolute inset-0 z-0 object-cover overflow-visible w-full max-w-1/2 mx-auto h-full"
        src="/assets/images/colourful-backdrop.png"
      />
    </div>
  );
}

export default HeaderCard;
