import { GlassCard } from "@developer-hub/liquid-glass";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeaderCard() {
  return (
    <div className="relative w-full my-8 flex place-content-center">
      <div className="flex flex-row  items-center">
        <GlassCard
          displacementScale={10}
          padding="40px 40px"
          blurAmount={0.5}
          className="z-20"
        >
          <p
            className="font-display font-normal  text-7xl text-sky-700"
            data-text="Samuel Tint"
          >
            Samuel Tint
          </p>
          <hr className="my-6 border-t border-2 border-sky-800 px-6 w-full" />
          <p
            className="font-display font-normal text-4xl text-sky-700"
            data-text="Sydney Based Software Developer"
            style={{ filter: "url(#inner-shadow)" }}
          >
            Sydney Based Software Developer
          </p>
        </GlassCard>
        <div className="h-96 w-96 aspect-square shadow-lg -ml-16 rounded-full overflow-hidden z-10">
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
