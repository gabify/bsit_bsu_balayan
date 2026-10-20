import Placeholder from "../../assets/placeholder-pic.png";

const NameBanner = ({ name, position="", image=Placeholder }) => {
  return (
    <section className="bg-red-600 px-2.5 pt-3 pb-3 rounded-xl mb-3">
        <article className="flex gap-1 justify-start items-center mb-2">
            <div>
                <img src={image} alt="picture" className="w-14 rounded-full p-1"/>
            </div>
            <div className="text-gray-100">
                <h2 className="font-bold -mb-1.5">{name}</h2>
                <small className="text-yellow-100 text-sx font-light">{position}</small>
            </div>
        </article>
        <div className="w-full lg:w-24 h-0.5 bg-yellow-500" />
    </section>
  );
}

export default NameBanner;