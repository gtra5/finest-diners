import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  User,
  Home,
  Heart,
  Settings,
  HelpCircle,
  LogOut,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";

const productItems = [
  { label: "Burgers", href: "/burgers" },
  { label: "Pizza", href: "/pizza" },
  { label: "Sushi", href: "/menu" },
  { label: "Resources", href: "/resources" },
];

function FinestDinersLogo() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="flex items-center space-x-2 cursor-pointer"
    >
      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-sm">FD</span>
      </div>
      <span className="font-bold text-xl text-gray-800 hidden sm:block">
        Finest Diners
      </span>
    </div>
  );
}

function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (href) => {
    navigate(href);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
      >
        <span>Order</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-20">
            {productItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleItemClick(item.href)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
              >
                {item.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Header({ cartItemCount = 0 }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Mock user for demo - replace with your auth logic

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const userDoc = await getDoc(doc(db, "users", authUser.uid));
        if (userDoc.exists()) {
          setUser({
            ...authUser,
            name: userDoc.data().name,
          });
        } else {
          setUser(authUser);
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (typeof document !== "undefined") {
      document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <FinestDinersLogo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => navigate("/")}
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>

              <ProductDropdown />

              <button
                onClick={() => navigate("/favorites")}
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                <Heart className="w-4 h-4" />
                <span>Favorites</span>
              </button>

              <button
                onClick={() => navigate("/settings")}
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>

              <button
                onClick={() => navigate("/help")}
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Help</span>
              </button>
            </nav>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <button
                onClick={() => navigate("/cart")}
                className="relative p-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* User Profile or Sign In */}
              {user ? (
                <div
                  className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer"
                  onClick={() => navigate("/profile")}
                  title="View Profile"
                >
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              ) : (
                <button
                  onClick={() => navigate("/signup")}
                  className="p-2 text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <User className="w-6 h-6" />
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
                onClick={toggleMenu}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <FinestDinersLogo />
          <button
            className="p-2 text-gray-700 hover:text-orange-500 transition-colors"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col h-full">
          <nav className="flex-1 px-4 py-6 space-y-2">
            <button
              onClick={() => handleNavigation("/")}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>

            <div className="px-3 py-2">
              <div className="text-gray-700 font-medium mb-2">Order</div>
              <div className="ml-4 space-y-1">
                {productItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavigation("/favorites")}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left"
            >
              <Heart className="w-5 h-5" />
              <span>Favorites</span>
            </button>

            <button
              onClick={() => handleNavigation("/profile")}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left"
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </button>

            <button
              onClick={() => handleNavigation("/settings")}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>

            <button
              onClick={() => handleNavigation("/help")}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left"
            >
              <HelpCircle className="w-5 h-5" />
              <span>Help</span>
            </button>
          </nav>

          {/* Sign Out Button */}
          {user && (
            <div className="p-4 border-t">
              <button
                className="w-full flex items-center justify-start space-x-3 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                onClick={() => {
                  // Add sign out logic here
                  closeMenu();
                }}
              >
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
