import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import img1 from "../assets/pizzaimage.png";
import img2 from "../assets/image.png";
import img4 from "../assets/spagg.png";
import img3 from "../assets/sushi.png";
import img7 from "../assets/drinks.png";
import img6 from "../assets/dessert.png";
import img5 from "../assets/salad3.png";
import img8 from "../assets/breakfast.png";
const category = [
  {
    id: 1,
    name: "Pizza",
    image: img1,
    color: "bg-red-300",
    destination: "/pizza",
  },
  {
    id: 2,
    name: "Burgers",
    image: img2,
    color: "bg-orange-300",
    destination: "/burgers",
  },
  {
    id: 3,
    name: "Sushi",
    image: img3,
    color: "bg-blue-300",
    destination: "/menu",
  },
  {
    id: 4,
    name: "Pasta",
    image: img4,
    color: "bg-yellow-300",
    destination: "/pizza",
  },
  {
    id: 5,
    name: "Salads",
    image: img5,
    color: "bg-green-300",
    destination: "/pizza",
  },
  {
    id: 6,
    name: "Desserts",
    image: img6,
    color: "bg-pink-300",
    destination: "/pizza",
  },
  {
    id: 7,
    name: "Drinks",
    image: img7,
    color: "bg-purple-300",
    destination: "/pizza",
  },
  {
    id: 8,
    name: "Breakfast",
    image: img8,
    color: "bg-orange-300",
    destination: "/pizza",
  },
];

function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const carouselRef = useRef(null);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2); // Mobile: 2 items
      } else if (window.innerWidth < 768) {
        setItemsPerView(3); // Tablet: 3 items
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4); // Desktop: 4 items
      } else {
        setItemsPerView(5); // Large desktop: 5 items
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, category.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
  };

  const handleCategoryClick = (destination) => {
    // Handle navigation here
    console.log(`Navigate to: ${destination}`);
    // navigate(destination) // Uncomment when using react-router
  };

  return (
    <div className="w-full max-w-7xl  ">
      <div className="relative">
        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-300 disabled:opacity-300 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Previous categories"
          >
            <MdKeyboardArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}

        {currentIndex < maxIndex && (
          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-300 disabled:opacity-300 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Next categories"
          >
            <MdKeyboardArrowRight className="w-6 h-6 text-gray-600" />
          </button>
        )}

        {/* Carousel Container */}
        <div className="overflow-hidden mx-8">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {category.map((foodtype) => (
              <div
                key={foodtype.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div
                  onClick={() => handleCategoryClick(foodtype.destination)}
                  className={`${foodtype.color} rounded-xl p-4 h-24 sm:h-28 md:h-32 flex flex-col  cursor-pointer hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md`}
                >
                  <div className="text-left ">
                    {" "}
                    <h3 className="md:text-xl font-medium text-gray-700">
                      {foodtype.name}
                    </h3>
                  </div>
                  <img className="  lg:w-full" src={foodtype.image} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
