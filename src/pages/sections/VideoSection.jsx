import BSULogo from "../../assets/Batangas_State_Logo.png"

const CornerMark = ({ position }) => {
  const base = "absolute w-6 h-6 border-red-700 pointer-events-none";
  const map = {
    tl: "-top-3 -left-3 border-t-2 border-l-2",
    tr: "-top-3 -right-3 border-t-2 border-r-2",
    bl: "-bottom-3 -left-3 border-b-2 border-l-2",
    br: "-bottom-3 -right-3 border-b-2 border-r-2",
  };
  return <span aria-hidden="true" className={`${base} ${map[position]}`} />;
};

const VideoSection = () => {
  return (
    <>
      <section
        id="video-section"
        className="w-full min-h-screen bg-slate-100 flex items-center mx-auto"
      >
        <div className="w-full max-w-7xl mx-auto px-6 py-16 md:px-10 lg:py-24 grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">
          {/* Text column */}
          <div className="lg:col-span-5 flex flex-col items-center-safe lg:items-start text-center lg:text-start">
            {/* Logo placeholder */}
            <div
              role="img"
              aria-label="University logo placeholder"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full border-slate-400 bg-white/70 flex items-center justify-center text-center text-xs font-medium text-slate-500"
            >
              <img src={BSULogo} alt="" />
            </div>

            <div>
              <h2 className="mt-4 text-xl md:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
                Batangas State University
              </h2>
              <p className="font-light text-red-500">The National Engineering University</p>
              <small className="text-sm font-bold tracking-wide">Balayan Campus</small>
            </div>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
              A proud part of the National Engineering University, shaping
              future leaders for the global knowledge economy.
            </p>
          </div>

          {/* Video column */}
          <div className="lg:col-span-7">
            <div className="relative">
              <CornerMark position="tl" />
              <CornerMark position="tr" />
              <CornerMark position="bl" />
              <CornerMark position="br" />

              {/* Video placeholder (16:9) */}
              <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-slate-900 shadow-xl">
                <iframe src="https://drive.google.com/file/d/1IZdO4paSR2U91YnVi2nHGZf8UU6LlUQb/preview" className="w-full h-full"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
