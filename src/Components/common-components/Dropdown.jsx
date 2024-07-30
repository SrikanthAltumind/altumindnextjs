import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

const Dropdown = ({ ddName, data, selection, onSelectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const handleSelection = (item) => {
    if (selection === item) {
      onSelectionChange(ddName, "");
    } else {
      onSelectionChange(ddName, item); 
    }
    setIsOpen(false);
  };

  return (
    <nav className="menu" ref={scope}>
      <div
        style={{
          position: "fixed",
          bottom: -210,
          left: 200,
          width: 100,
          height: 100,
          background: "white",
        }}
      />
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-3 items-center justify-between p-2 w-[200px] border border-gray-300 rounded-md"
      >
        <p className="text-sm font-semibold">{ddName}</p>
        <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 20 20"
            className="fill-current text-black dark:text-white"
          >
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <ul
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}
        className="mt-2 bg-white border border-gray-300 p-2 text-sm shadow-md space-y-2 absolute w-[200px] z-2"
      >
        {data?.map((item, index) => (
          <li className="flex justify-start gap-3 w-full" key={index}>
            <input
              type="checkbox"
              name=""
              id={item + "cb"}
              checked={selection === item}
              onChange={() => handleSelection(item)}
            />
            <label className="dark:text-black" htmlFor={item + "cb"}>
              {item}
            </label>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Dropdown;
