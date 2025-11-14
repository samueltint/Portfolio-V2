import { GlassCard } from "@developer-hub/liquid-glass";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeaderCard() {
  return (
    <div className="relative mx-auto my-8 ">
      <div className="flex flex-row  items-center">
        <GlassCard
          displacementScale={10}
          padding="40px 40px"
          blurAmount={0.5}
          className="z-20"
        >
          <p
            className="font-display font-normal  text-9xl text-sky-700"
            data-text="Samuel Tint"
          >
            Samuel Tint
          </p>
          <hr className="my-6 border-t border-2 border-sky-800 px-6 w-full" />
          <p
            className="font-display font-normal text-6xl text-sky-700"
            data-text="Sydney Based Software Developer"
            style={{ filter: "url(#inner-shadow)" }}
          >
            Sydney Based Software Developer
          </p>
        </GlassCard>
        <div className="h-96 w-96 aspect-square shadow-lg -ml-12 rounded-full overflow-hidden z-10">
          <img src="/assets/images/profile.jpg" alt="Profile" />
        </div>
      </div>
      <img
        className="absolute inset-0 z-0 object-cover overflow-visible w-full h-full"
        src="/assets/images/colourful-backdrop.png"
      />
    </div>
  );
}

export default HeaderCard;
