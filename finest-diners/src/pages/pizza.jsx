import Layout from "../component/result";
import FoodItem from "../pages/footItem";
import img3 from "../assets/pizza.png";
import Location from "../component/location";
import Categories2 from "../component/categories2";

const food2 = [
  {
    id: 1,
    name: "Margherita Pizza",
    description:
      "Classic pizza with tomato sauce, mozzarella cheese, fresh basil, and olive oil",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description:
      "Pizza topped with tomato sauce, mozzarella cheese, and pepperoni slices",
    price: 11.99,
    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
  },
  {
    id: 3,
    name: "Hawaiian Pizza",
    description:
      "Pizza with tomato sauce, mozzarella cheese, ham, and pineapple",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "BBQ Chicken Pizza",
    description:
      "Pizza with BBQ sauce, mozzarella cheese, grilled chicken, red onions, and cilantro",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
  },
  {
    id: 5,
    name: "Veggie Pizza",
    description:
      "Loaded with tomato sauce, mozzarella cheese, bell peppers, mushrooms, onions, and olives",
    price: 12.99,
    image:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

function Pizza({ addToCart, cartItemCount }) {
  return (
    <Layout cartItemCount={cartItemCount}>
      <div className="w-full flex h-fit flex-col-reverse bg-blue-400 rounded-2xl p-2 items-center justify-center bg-gray-200 lg:flex-row h-120 bg-cover bg-center">
        <div className="w-full  lg:w-1/2 p-8  lg:text-left  rounded-lg ">
          <h1 className="text-2xl text-center lg:text-7xl font-bold text-left">
            Pizza
          </h1>
          <p className="text-xl text-left p-2 pt-3 ">
            Craving pizza but don’t feel like cooking? With Finest diners, you
            can enjoy the best pizzas from top restaurants in Nigeria—without
            even leaving your couch!
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
        <div className="w-full h-12 mt-14 text-2xl lg:">Pizza</div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8 mt-5 px-4">
          {food2.map((item) => (
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

export default Pizza;
