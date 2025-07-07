import Layout from "../component/result";
// import img1 from "../assets/gen3.png";
// import img2 from "../assets/gen1.png";
// import img3 from "../assets/gen4.png";
// import img8 from "../assets/yen.png";
// import img6 from "../assets/plate2.png";
import Frontpage from "../pages/frontpage";
import Categories from "../pages/cartegories";
import FoodItem from "../pages/footItem";
// import img10 from "../assets/Ramen-bro.svg";
// import img11 from "../assets/Take Away-cuate (1).svg";
// import img12 from "../assets/fast food-rafiki.svg";
// import img13 from "../assets/high five 2.svg";
import img14 from "../assets/pasta-removebg-preview.png";
import ReviewCarousel from "../pages/customerReviews";
import img15 from "../assets/drinks.png";
import img16 from "../assets/ads.png";
import Location from "../component/location";

function Home({ addToCart, cartItemCount }) {
  const foodln = [
    {
      id: 2,
      name: "Veggie Delight Burger",
      description: "Nigeria",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
    },
    {
      id: 4,
      name: "BBQ Chicken Pizza",
      description: "Nigeria",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
    },
    {
      id: 1,
      name: "California Roll",
      description: "Nigeria",
      price: 8.99,
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&auto=format",
    },
    {
      id: 1,
      name: "Spaghetti & Meatballs",
      description: "Nigeria",
      price: 12.09,
      image: img14,
    },
    {
      id: 1,
      name: "Doughnuts",
      description: "Nigeria",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94",
    },
    {
      id: 1,
      name: "Strawberry Sangria",
      description: "Nigeria",
      price: 18.99,
      image: img15,
    },
  ];

  return (
    <Layout cartItemCount={cartItemCount}>
      <div className="">
        {" "}
        <Frontpage />
      </div>
      <div className="categories px-4">
        <div className="w-full h-12 mt-14 text-xl sm:text-2xl lg:text-2xl">
          Shop from categories
        </div>
        <Categories />
      </div>
      <div className="dish-cards">
        <div className="px-4">
          <div className="w-full h-12 mt-14 text-xl sm:text-2xl lg:text-2xl">
            Limited product
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8 mt-5 px-4">
          {foodln.map((item) => (
            <div key={item.id} className="flex justify-center">
              <FoodItem item={item} onAddToCart={() => addToCart(item)} />
            </div>
          ))}
        </div>
      </div>
      <div className="px-4">
        <div className="w-full h-12 mt-14 text-xl sm:text-2xl lg:text-2xl">
          Advertisement
        </div>
        <div className="w-full h-80 sm:h-96 lg:h-[360px] bg-gray-300 rounded-2xl flex flex-row items-center justify-center gap-2 sm:gap-4 mt-5">
          <div className="flex flex-col items-start justify-center p-2 sm:p-4 lg:p-8 text-left w-1/2 h-full rounded-lg">
            <span className="text-lg sm:text-xl lg:text-2xl">
              Special offer
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
              25% OFF
            </h1>
            <p className="text-xs sm:text-sm lg:text-xl text-left p-1 pt-3">
              Your Palate Deserves the Best. Try Our Chef's Special Chicken –
              25% Off for First-Time Orders.
            </p>
            <button className="p-2 w-full bg-black border-2 border-white text-white sm:w-28 md:w-32 h-10 lg:w-36 lg:h-14 rounded-lg mt-2 sm:mt-4 hover:bg-white hover:text-black transition-colors duration-300 text-xs sm:text-sm lg:text-base">
              Buy now
            </button>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <img
              src={img16 || "/placeholder.svg"}
              alt="Advertisement"
              className="w-full h-full max-w-xs sm:max-w-sm lg:max-w-md object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        {" "}
        <ReviewCarousel />
      </div>
      <Location />
    </Layout>
  );
}

export default Home;
