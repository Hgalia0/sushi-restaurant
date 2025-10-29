import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // optional, for icon

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // 🧠 Show button when scrolled 300px down
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🚀 Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#FEAA36] hover:bg-[#e2972e] text-white p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
}
