import img1 from "../assets/image.png";
function Frontpage() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row bg-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 items-center justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
      <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          Fastest <span className="text-blue-400">delivery</span> and easy pick
          up.
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 mt-4 sm:mt-6 leading-relaxed">
          Craving something delicious? Get fast, easy food delivery right to
          your door!
        </p>
        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-lg mt-6 sm:mt-8 hover:bg-gray-800 transition-colors duration-300 text-base sm:text-lg font-semibold">
          Buy now
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <div className="yellow-circle"></div>
          <div className="decorative-lines">
            <div className="line line-top-left"></div>
            <div className="line line-top-right"></div>
            <div className="line line-bottom-right"></div>
          </div>
          <img
            src={img1}
            alt="Person with food"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
