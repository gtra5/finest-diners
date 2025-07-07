import img1 from "../assets/image.png";
function Frontpage() {
  return (
    <div className="w-full flex h-fit flex-col-reverse bg-blue-400 rounded-2xl p-2 items-center justify-center bg-gray-200 lg:flex-row h-120 bg-cover bg-center">
      <div className="w-full  lg:w-1/2 p-8  lg:text-left  rounded-lg ">
        <h1 className="text-2xl text-center lg:text-7xl font-bold text-left">
          Fastest <span className="text-blue-400">delivery</span> and easy pick
          up.
        </h1>
        <p className="text-xl text-left p-2 pt-3 ">
          Craving something delicious? Get fast, easy food delivery right to
          your door!
        </p>
        <button className="p-2 w-full bg-black border-2 border-white text-white lg:w-35 h-15 rounded-lg mt-4 hover:bg-white hover:text-black transition-colors duration-300">
          Buy now
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center  ">
        <div className="yellow-circle"></div>
        <div className="decorative-lines">
          <div className="line line-top-left"></div>
          <div className="line line-top-right"></div>
          <div className="line line-bottom-right"></div>
        </div>
        <div className="w-10/10 h-full flex items-center justify-center">
          <img
            src={img1}
            alt="Person with food"
            className="w-full h-full object-cover  lg:w-3/4 lg:h-3/4"
          />
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
