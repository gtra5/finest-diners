import React, { useRef, useState, useEffect } from "react";
import Header from "../component/header";
import Footer from "./footer";

const Layout = ({ children, cartItemCount = 0 }) => {
  // Draggable button state
  const [pos, setPos] = useState({
    x: window.innerWidth - 88,
    y: window.innerHeight - 88,
  });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
    document.body.style.userSelect = "none";
    e.stopPropagation(); // Prevent event bubbling
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPos({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.body.style.userSelect = "";
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  const scrollToTop = (e) => {
    e.stopPropagation(); // Prevent triggering drag when clicking
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header cartItemCount={cartItemCount} />
      <section className="w-full p-4 md:5 lg:p-10">{children}</section>
      <Footer />
      {/* Moveable Back to Top Button */}
      <button
        onClick={scrollToTop}
        onMouseDown={handleMouseDown}
        style={{
          position: "fixed",
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          zIndex: 1000,
          cursor: dragging ? "grabbing" : "grab",
          background: "#7BF1A8",
          color: "white",
          borderRadius: "50%",
          width: 48,
          height: 48,
          border: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          transition: "background 0.2s",
        }}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
};

export default Layout;
