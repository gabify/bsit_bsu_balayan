import BSULogo from "../../assets/Batangas_State_Logo.png";
import BgVid from "../../assets/bg-website-bsu-bsit.mp4";

const WelcomeSection = () => {
  return(
    <>
      <main className="relative isolate flex items-center-safe overflow-hidden">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src={BgVid}
          autoPlay
          muted
          loop
          playsInline
          poster={BSULogo}
        />

        <div className="absolute inset-0 -z-10 opacity-80 bg-linear-to-r from-[#6B101C]/75 via-[#31080D]/75 to-[#6B101C]/55" />

        <section className="relative z-10 w-full h-130 lg:h-160 mx-auto py-3 px-2 lg:px-36 lg:pt-72 flex flex-col justify-center md:justify-between bg-black/45">
          <article className="flex flex-col lg:flex-row lg:gap-10 items-center-safe">
            <div className="mt-48 mb-8 lg:mt-0 lg:mb-0">
              <img src={BSULogo} alt="batstateu-logo" className="w-32 lg:w-52"/>
            </div>
            <div className="text-center lg:text-start">
              <h1 className="uppercase font-extrabold tracking-wide lg:text-5xl text-gray-100">Batangas State University</h1>
              <h2 className="font-extralight text-rose-500 lg:text-2xl">The National Engineering University</h2>
              <p className="font-bold tracking-wide mt-2 lg:mt-6 mb-1 lg:text-2xl text-gray-100">Balayan Campus</p>
              <small className="font-extralight lg:text-xl py-1 text-gray-50 opacity-90">College of Informatics and Computing Sciences</small>
            </div>
          </article>
          <article className="mt-10 lg:mt-0 text-xs flex gap-3 text-gray-50 font-light lg:text-xl lg:justify-center-safe lg:gap-10">
            <small>Leading Innovation</small>
            <small className="lg:hidden">&#9679;</small>
            <small>Transforming Lives</small>
            <small className="lg:hidden">&#9679;</small>
            <small>Building The Nation</small>
          </article>
        </section>
      </main>
    </>
  );
};

export default WelcomeSection;
