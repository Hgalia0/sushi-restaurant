import React, { useState } from "react";
import menuData from "../Data/menu.json";
import Cart from "./Cart";

export default function Menuu({ onAddToCart }) {
    // 🔸 Add "All" as a default option
    const allItems = menuData.flatMap((cat) => cat.items);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentIndex, setCurrentIndex] = useState(0);
     
     // 🛒 Cart state
  

    const itemsPerPage = 4;
    const itemsPerpagemobile= 2;

    // 🧩 Choose which items to show
    const currentCategory =
        selectedCategory === "All"
            ? { category: "All", items: allItems }
            : menuData.find((cat) => cat.category === selectedCategory);

    const items = currentCategory.items;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // ✅ Desktop (4 items)
const visibleItems = items.slice(
  currentIndex * itemsPerPage,
  currentIndex * itemsPerPage + itemsPerPage
);

// ✅ Mobile (2 items)
const visiblemobile = items.slice(
  currentIndex * itemsPerpagemobile,
  currentIndex * itemsPerpagemobile + itemsPerpagemobile
);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? totalPages - 1 : prev - 1
        );
    };

    return (
        <div className="p-10 min-h-screen" id="menu">
            {/* 🍣 Category Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {/* Add "All" button first */}
                <button
                    onClick={() => {
                        setSelectedCategory("All");
                        setCurrentIndex(0);
                    }}
                    className={`px-5 py-2 rounded-xl text-lg font-semibold transition-all duration-300 ${selectedCategory === "All"
                        ? "bg-[#efa236] text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                >
                    All
                </button>

                {menuData.map((cat) => (
                    <button
                        key={cat.category}
                        onClick={() => {
                            setSelectedCategory(cat.category);
                            setCurrentIndex(0);
                        }}
                        className={`px-5 py-2 rounded-4xl text-lg  transition-all duration-300 ${selectedCategory === cat.category
                            ? "bg-[#f4af50] rounded-4xl text-white shadow-lg"
                            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        {cat.category}
                    </button>
                ))}
            </div>

            {/* 🍤 Items Slider */}
            <div className="relative flex items-center justify-center">
                {/* Prev Button */}
                <button
                    onClick={prev}
                    className="absolute left-0 max-sm:left-[-30px]  text-gray-400 text-3xl px-4 py-2 rounded-full  hover:opacity-90 transition"
                >
                    ‹
                </button>
                {/*pc version */}
                <div className="max-sm:hidden flex gap-8 overflow-hidden">
                    {visibleItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative rounded-2xl  w-64 h-64 flex-shrink-0 text-center overflow-hidden group"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* 🧡 Orange overlay */}
                            <div className="absolute inset-0 bg-[#f3c079]/30 transition-all duration-300 group-hover:bg-[#f3c079]/60"></div>

                            {/* 🍣 Content on top */}
                            <div className="relative z-10 flex  gap-20 h-full text-white p-4">
                                <div className="flex flex-col">
                                    <h3 className="mt-3 font-semibold text-2xl  drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">{item.name}</h3>
                                    <p className="text-lg mt-1 drop-shadow">{item.price}</p>

                                </div>

                                <button onClick={() => onAddToCart(item)} className="mt-4 text-2xl bg-white/10 backdrop-blur-md text-white w-10 h-10 rounded-lg shadow-lg hover:scale-105 transition flex justify-center items-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
                                    +
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

                      {/* mobile version  */}
                  <div className=" sm:hidden flex gap-4 overflow-hidden">
                    {visiblemobile.map((item) => (
                        <div
                            key={item.name}
                            className="relative rounded-2xl  w-35 h-45 flex-shrink-0 text-center overflow-hidden group"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* 🧡 Orange overlay */}
                            <div className="absolute inset-0 bg-[#f3c079]/30 transition-all duration-300 group-hover:bg-[#f3c079]/60"></div>

                            {/* 🍣 Content on top */}
                            <div className="relative z-10 flex flex-col justify-center items-center gap-13 h-full text-white p-4">
                                <div className="flex flex-col">
                                    <h3 className="mt-3  font-semibold text-[16px]  drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] w-40">{item.name}</h3>
                                    <p className="text-lg mt-1 drop-shadow">{item.price}</p>

                                </div>

                                <button onClick={() => onAddToCart(item)} className="  text-2xl bg-white/10 backdrop-blur-md text-white w-15 h-15 rounded-lg shadow-lg hover:scale-105 transition flex justify-center items-center drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
                                    +
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
                {/* Next Button */}
                <button
                    onClick={next}
                    className="absolute sm:right-0 max-sm:right-[-30px]   text-gray-400 text-3xl px-4 py-2 rounded-full hover:opacity-90 transition"
                >
                    ›
                </button>
            </div>

        </div>
    );
}
