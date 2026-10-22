const NameBanner = ({ name, position=""}) => {
  return (
    <section className="bg-yellow-900 px-2.5 pt-3 pb-3 rounded-xl mb-3">
        <article className="flex gap-1 justify-start items-center mb-2">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 text-gray-200">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                </svg>
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