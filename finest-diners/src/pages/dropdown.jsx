import { useState, useRef, useEffect } from "react";
import { FaClock } from "react-icons/fa";

function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownStyles = {
    container: {
      position: "relative",
      display: "inline-block",
    },
    button: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      padding: "10px 15px",
      color: "#333",
      fontWeight: "500",
      transition: "color 0.2s ease",
    },
    icon: {
      width: "16px",
      height: "16px",
      transition: "transform 0.2s ease",
      transform: isOpen ? "rotate(180deg)" : "rotate(0)",
    },
    menu: {
      position: "absolute",
      top: "100%",
      left: "0",
      minWidth: "200px",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      padding: "8px 0",
      marginTop: "8px",
      zIndex: "100",
      listStyle: "none",
    },
    item: {
      display: "block",
      padding: "10px 15px",
      color: "#333",
      textDecoration: "none",
      transition: "background-color 0.2s ease",
    },
  };

  return (
    <div style={dropdownStyles.container} ref={dropdownRef}>
      <button
        style={dropdownStyles.button}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <FaClock />
        {title}
        <svg
          style={dropdownStyles.icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <ul style={dropdownStyles.menu}>
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                style={dropdownStyles.item}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#f5f5f5";
                  e.target.style.color = "#0070f3";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#333";
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
