import Layout from "../component/result";
import FoodItem from "../pages/footItem";
import img3 from "../assets/sushi (2).png";
import img4 from "../assets/sushi-close-up.jpg";
import img5 from "../assets/closeup-shot-delicious-sushi-roll-with-seasonings-white-background.jpg";
import Location from "../component/location";
import Categories2 from "../component/categories2";
// Define menu items

const food3 = [
  {
    id: 1,
    name: "California Roll",
    description:
      "Rice on the outside, filled with crab meat, avocado, and cucumber",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&auto=format",
  },
  {
    id: 2,
    name: "Salmon Nigiri",
    description: "Thin slices of fresh salmon on top of seasoned rice",
    price: 9.99,
    image: "https://images.pexels.com/photos/8951563/pexels-photo-8951563.jpeg",
  },
  {
    id: 3,
    name: "Tuna Roll",
    description: "Rice and seaweed roll filled with fresh tuna and avocado",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351",
  },
  {
    id: 4,
    name: "Dragon Roll",
    description:
      "Rice and seaweed roll filled with eel and avocado, topped with cucumber and tobiko",
    price: 12.99,
    image: img4,
  },
  {
    id: 5,
    name: "Spicy Tuna Roll",
    description: "Rice and seaweed roll filled with spicy tuna and avocado",
    price: 11.99,
    image: img5,
  },
];

function Menu({ addToCart, cartItemCount }) {
  return (
    <Layout cartItemCount={cartItemCount}>
      <div className="w-full flex h-fit flex-col-reverse bg-blue-400 rounded-2xl  items-center justify-center bg-gray-200 lg:flex-row h-120 bg-cover bg-center">
        <div className="w-full  lg:w-1/2 p-8  lg:text-left  rounded-lg ">
          <h1 className="text-2xl text-center lg:text-7xl font-bold text-left">
            Sushi
          </h1>
          <p className="text-lg text-left  pt-3 ">
            From classic maki and nigiri to inside-out uramaki and hearty
            futomaki, Finest diner delivers a wide selection of delicious sushi
            right to your doorstep.
          </p>
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
              src={img3}
              alt="Person with food"
              className="w-full h-full object-cover  lg:w-3/4 lg:h-3/4"
            />
          </div>
        </div>
      </div>

      <div className="burgercard">
        <div className="w-full h-12 mt-14 text-2xl lg:">Sushi</div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8 mt-5 px-4">
          {food3.map((item) => (
            <div key={item.id} className="flex justify-center">
              <FoodItem item={item} onAddToCart={() => addToCart(item)} />
            </div>
          ))}
        </div>
      </div>
      <Location />
      <Categories2 />
    </Layout>
  );
}

export default Menu;
