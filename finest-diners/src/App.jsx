import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import SignIn from "./signupandsignup/signin";
import SignUp from "./signupandsignup/signup";
import Cart from "./component/cart";
import { useState } from "react";
import Burgers from "./pages/burger";
import Pizza from "./pages/pizza";
import ScrollToTop from "./ScrollToTop";
import Profile from "./pages/profile";

function App() {
  const [cart, setCart] = useState([]);

  // Calculate total number of items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (item) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...currentCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(itemId);
      return;
    }

    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          <Home addToCart={addToCart} cartItemCount={cartItemCount} />
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <ScrollToTop />
          <Home addToCart={addToCart} cartItemCount={cartItemCount} />
        </>
      ),
    },
    {
      path: "/menu",
      element: (
        <>
          <ScrollToTop />
          <Menu addToCart={addToCart} cartItemCount={cartItemCount} />,
        </>
      ),
    },
    {
      path: "/burgers",
      element: (
        <>
          <ScrollToTop />
          <Burgers addToCart={addToCart} cartItemCount={cartItemCount} />,
        </>
      ),
    },
    {
      path: "/pizza",
      element: (
        <>
          <ScrollToTop />
          <Pizza addToCart={addToCart} cartItemCount={cartItemCount} />,
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <ScrollToTop />
          <About cartItemCount={cartItemCount} />,
        </>
      ),
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/signIn",
      element: <SignIn />,
    },
    {
      path: "/cart",
      element: (
        <Cart
          cart={cart}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <ScrollToTop />
          <Profile cartItemCount={cartItemCount} />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
