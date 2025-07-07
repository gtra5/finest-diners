import Layout from "../component/result";
import FoodItem from "../pages/footItem";
import img3 from "../assets/buger2.png";
import Location from "../component/location";
import Categories2 from "../component/categories2";

const foods = [
  {
    id: 1,
    name: "Deluxe Burger",
    description: "Juicy beef patty with fresh vegetables and special sauce",
    price: 12.99,
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
  },
  {
    id: 2,
    name: "Veggie Delight Burger",
    description:
      "Grilled portobello mushroom with avocado, tomato, and vegan mayo",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
  },
  {
    id: 3,
    name: "BBQ Bacon Burger",
    description:
      "Beef patty topped with crispy bacon, melted cheddar cheese, and BBQ sauce",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b",
  },
  {
    id: 4,
    name: "Mushroom Swiss Burger",
    description:
      "Juicy beef patty topped with sautéed mushrooms and melted Swiss cheese",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Turkey Burger",
    description:
      "Lean turkey patty with lettuce, tomato, and a side of honey mustard",
    price: 11.99,
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
  },

  // ... other food items
];
function Burgers({ addToCart, cartItemCount }) {
  return (
    <Layout cartItemCount={cartItemCount}>
      <div className="w-full flex h-fit flex-col-reverse bg-blue-400 rounded-2xl p-2 items-center justify-center bg-gray-200 lg:flex-row h-120 bg-cover bg-center">
        <div className="w-full  lg:w-1/2 p-8  lg:text-left  rounded-lg ">
          <h1 className="text-2xl text-center lg:text-7xl font-bold text-left">
            Burgers
          </h1>
          <p className="text-xl text-left p-2 pt-3 ">
            Hungry for a burger that hits the spot? Whether you’re craving a
            classic cheeseburger, a spicy grilled chicken stack, or a
            gourmet-loaded masterpiece, Finest diners brings Nigeria’s best
            burgers straight to your door—no hassle, no waiting!
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
        <div className="w-full h-12 mt-14 text-2xl lg:">Burgers</div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8 mt-5 px-4">
          {foods.map((item) => (
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

export default Burgers;
