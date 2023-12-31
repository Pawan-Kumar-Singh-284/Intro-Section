import mobileImg from "../assets/images/image-hero-mobile.png";
import desktopImg from "../assets/images/image-hero-desktop.png";
import audioPhile from "../assets/images/client-audiophile.svg";
import dataBiz from "../assets/images/client-databiz.svg";
import maker from "../assets/images/client-maker.svg";
import meet from "../assets/images/client-meet.svg";

function Hero() {
  return (
    <>
      <section className=" flex flex-col-reverse py-20 md:grid  md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto">
        <article className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
          <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5 ">
            Make
            <br /> remote work
          </h1>
          <p className="mt-15">
            Get your team in sync, no matter your location.
            <br /> Streamline processes, create team rituals, and
            <br /> watch productivity soar.
          </p>
          <button className="bg-black rounded-lg shadow text-white font-bold hover:opacity-75 transition-all duration-150 py-2 px-6 curser-pointer mt-10 pt-3 pb-2">
            Learn more
          </button>
          <ul className="grid grid-cols-4 gap-1 mt-20 place-items-center md:place-items-start ">
            <li>
              <img src={dataBiz} alt="databiz" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={audioPhile} alt="audiophile" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={meet} alt="meet" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={maker} alt="maker" className="w-16 md:w-24" />
            </li>
          </ul>
        </article>

        <article>
          <picture>
            <source media="(min-width:768px)" srcSet={desktopImg}></source>
            <img src={mobileImg} alt="mobile-image" className="w-full"></img>
          </picture>
        </article>
      </section>
    </>
  );
}

export default Hero;
