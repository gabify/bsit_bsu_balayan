import BSULogo from "../../assets/Batangas_State_Logo.png";

const WelcomeSection = () => {
  return(
    <>
      <section className="bg-gray-300 h-130 lg:h-160 py-3 px-2 lg:px-36 lg:pt-72 flex flex-col justify-between">
        <article className="flex flex-col lg:flex-row lg:gap-10 items-center-safe">
          <div className="mt-48 mb-8 lg:mt-0 lg:mb-0">
            <img src={BSULogo} alt="batstateu-logo" className="w-32 lg:w-52"/>
          </div>
          <div className="text-center lg:text-start">
            <h1 className="uppercase font-extrabold tracking-wide -mb-1.5 lg:text-3xl">Batangas State University</h1>
            <h2 className="font-extralight text-red-600 mb-2 lg:mb-6 lg:text-2xl">The National Engineering University</h2>
            <p className="font-bold tracking-wide -mb-2 lg:text-2xl">Balayan Campus</p>
            <small className="font-extralight lg:text-xl">College of Informatics and Computing Sciences</small>
          </div>
        </article>
        <article className="mt-10 lg:mt-0 text-xs flex gap-3 text-red-600 font-light lg:text-xl lg:justify-center-safe lg:gap-10">
          <small>Leading Innovation</small>
          <small className="lg:hidden">&#9679;</small>
          <small>Transforming Lives</small>
          <small className="lg:hidden">&#9679;</small>
          <small>Building The Nation</small>
        </article>
      </section>
    </>
  );
};

export default WelcomeSection;
