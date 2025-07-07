import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import Layout from './result';

function Cart({ cart, updateQuantity, removeItem }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-600">Add some delicious items to your cart!</p>
      </div>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
        
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                >
                  <FaMinus className="w-3 h-3" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                >
                  <FaPlus className="w-3 h-3" />
                </button>
              </div>
              
              <button
                onClick={() => removeItem(item.id)}
                className="p-2 text-red-500 hover:text-red-700 transition-colors"
              >
                <FaTrash className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-xl font-bold">${calculateTotal().toFixed(2)}</span>
          </div>
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;