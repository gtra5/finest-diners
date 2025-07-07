import img9 from "../assets/City skyline-rafiki.svg"

function Location() {
  const cities = ["Ogun", "Lagos", "Ikorodu", "Abuja", "Surulere", "Obada", "Auaba/Agbara", "Ibadan"]

  return (
    <div className="w-full flex flex-col h-fit items-center justify-center mt-10 bg-gray-300 lg:flex-row lg:h-96 rounded-2xl p-4 sm:p-6 lg:p-0">
      <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-full flex flex-col items-center justify-center">
        <img
          src={img9 || "/placeholder.svg"}
          alt="City skyline"
          className="w-3/4 h-3/4 object-cover rounded-lg sm:w-4/5 sm:h-4/5 lg:w-96 lg:h-96"
        />
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 text-left backdrop-blur-md rounded-lg">
        <h1 className="text-center text-xl sm:text-2xl lg:text-3xl mb-4">Nigeria's Most Prominent Cities</h1>
        {/* Cities Grid */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mt-2 sm:mt-3 lg:mt-5 mb-4 sm:mb-6 lg:mb-8">
          {cities.slice(0, 8).map((city) => (
            <button
              key={city}
              className="px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-blue-300 hover:bg-yellow-200 text-gray-800 font-medium rounded-full transition-all duration-200 hover:shadow-md hover:scale-105 text-sm sm:text-base"
            >
              {city}
            </button>
          ))}
        </div>
        {/* Bottom row for remaining cities if any */}
        {cities.length > 8 && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {cities.slice(8).map((city) => (
              <button
                key={city}
                className="px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-blue-300 hover:bg-yellow-200 text-gray-800 font-medium rounded-full transition-all duration-200 hover:shadow-md hover:scale-105 text-sm sm:text-base"
              >
                {city}
              </button>
            ))}
          </div>
        )}
        <button className="w-full bg-green-800 p-3 sm:p-4 text-white rounded-2xl lg:w-48 mt-4 sm:mt-6 lg:mt-4 text-sm sm:text-base">
          See all cities
        </button>
      </div>
    </div>
  )
}

export default Location
