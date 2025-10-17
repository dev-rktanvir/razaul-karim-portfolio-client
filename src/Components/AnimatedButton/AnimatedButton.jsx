import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AnimatedButton = ({ text = "Click Me", color = "#F20101" }) => {
    return (
        <button
            className={`group relative overflow-hidden border border-solid rounded-full pl-5 pr-16 py-3 font-medium w-fit cursor-pointer`}
            style={{
                borderColor: color,
                color: color,
            }}
        >
            <span
                className="relative z-10 transition-colors duration-500 text-white group-hover:text-white"
            >
                {text}
            </span>

            <span
                className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out group-hover:ease-out"
                style={{ backgroundColor: color }}
            ></span>

            <span
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full transition duration-500"
                style={{ backgroundColor: color, color: "white" }}
            >
                <FaArrowRight />
            </span>
        </button>
    );
};

export default AnimatedButton;
