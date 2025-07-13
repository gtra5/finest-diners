"use client"

import { FaShoppingCart } from "react-icons/fa"

function FoodItem({ item, onAddToCart }) {
  return (
    <div className="w-full flex-row h-fit rounded-3xl sm:w-80 md:w-96 lg:w-[380px] flex flex-row h-fit items-center bg-gray-200 border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.name}
        className="w-32 sm:w-36 md:w-40 p-3 h-32 sm:h-36 md:h-40 object-cover rounded-3xl lg:w-44 lg:h-48"
      />
      <div className="flex-1 p-4 flex flex-col justify-between h-full">
        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-900 mb-2 leading-tight">{item.name}</h3>
          <p className="text-sm text-gray-600 font-medium mb-3 lg:mb-4">{item.description}</p>
        </div>
        {/* Price and Button Row */}
        <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-4 md:flex-nowrap lg:flex-nowrap">
          <span className="text-xl sm:text-2xl lg:text-2xl text-gray-900">${item.price.toFixed(2)}</span>
          <button
            onClick={onAddToCart}
            className="bg-black text-white px-3 sm:px-4 py-2 lg:px-6 lg:py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 min-w-[44px] sm:min-w-[50px]"
          >
            <FaShoppingCart className="text-sm sm:text-base lg:text-lg" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
