import React from 'react'
import img1 from "../assets/pizzaimage.png";
import img2 from "../assets/image.png";
import img4 from "../assets/spagg.png";
import img3 from "../assets/sushi.png"
import img7 from "../assets/drinks.png"
import img6 from "../assets/dessert.png"
import img5 from "../assets/salad3.png"
import img8 from "../assets/breakfast.png"

const category2 = [
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

function Categories2() {
  const handleCategoryClick = (destination) => {
    // Handle navigation here
    console.log(`Navigate to: ${destination}`);
    // navigate(destination) // Uncomment when using react-router
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {category2.map((food) => (
          <div 
            key={food.id}
            onClick={() => handleCategoryClick(food.destination)}
            className={`${food.color} rounded-3xl p-3 flex flex-col items-center justify-between cursor-pointer hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md h-full min-h-[100px] sm:min-h-[100px]`}
          >
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-700 text-center w-full">
              {food.name}
            </h3>
            <div className="w-full flex justify-center mt-2">
              <img 
                src={food.image} 
                alt={food.name}
                className="h-16 sm:h-20 md:h-24 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories2