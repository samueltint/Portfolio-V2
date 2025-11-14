import LiquidGlass from "liquid-glass-react";

function HeaderCard() {
  return (
    <div className="relative mx-auto my-8">
      <div className="flex flex-row items-center">
        <div className="fixed top-10 z-10" >
          <LiquidGlass cornerRadius={8}>
            <p className="font-display font-normal text-9xl text-sky-700">
              Samuel Tint
            </p>
            <hr className="my-6 border-t border-2 border-sky-800 px-8 w-full" />
            <p className="font-display font-normal text-6xl text-sky-700">
              Sydney Based Software Developer
            </p>
          </LiquidGlass>
        </div>
        <div className="h-96 w-96 aspect-square shadow-lg -ml-10 rounded-full overflow-hidden ">
          <img src="/assets/images/profile.jpg" alt="Profile" />
        </div>
      </div>
      {/* <img
        className="absolute inset-0 object-cover w-full h-full"
        src="/assets/colourful-backdrop.png"
      /> */}
    </div>
  );
}

export default HeaderCard;
