import bannerImg from "./img/donateImg.jpg"
const Banner = () => {
  return (
    <div className=" bg-paste">
      <div className="container mx-auto p-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="...">
            <p className="lg:pt-28 md:pt-2 text-5xl font-bold text-black ">
              Making a donation for
              <br /> Nature.
            </p>
            <p className=" text-justify lg:pl-0 pt-5 md:pl-0 sm:pl-3">
              When you donate, you’re supporting effective solutions to big
               environmental challenges—an investment in the future of our
              planet.
            </p>
            <div className=" pt-5 sm:pl-0">
            <button
              type="button"
              class="text-white bg-lightgreen hover:bg-lightgreen focus:ring-4 focus:outline-none focus:ring-dark-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800"
            >
              Donate Now
            </button>
            </div>
          </div>

          <div className="...">
            <div className="sm: mt-4">
            <img className="h-90 w-90 pl-0 md:pl-3 rounded" src={bannerImg}/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
