import { useState, useEffect, useRef } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const scope = useRef(null);
  const [_, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;

    animate(
      scope.current.querySelector(".arrow"),
      { rotate: isOpen ? 180 : 0 },
      { duration: 0.1 }
    );

    animate(
      scope.current.querySelector("ul"),
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
      scope.current.querySelectorAll("li"),
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen, animate]);

  return scope;
}

const Dropdown = ({ ddName, data, selection, onSelectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);


  const ddListRef = useRef()
  const ddButtonRef = useRef()

  const handleSelection = (item) => {
    // if (selection === item) {
    //   onSelectionChange(ddName, "");
    // } else {
    //   onSelectionChange(ddName, item);
    // }
    // setIsOpen(false);
    onSelectionChange(ddName, item.id);
  
  };

  useEffect(() => {
    console.log("log from dd: ", data);
    
  }, [data]);

  const handleOutSideClick = (e) => {
    if(ddButtonRef.current.contains(e.target)){
        return
    }
    if (isOpen && ddListRef.current && !ddListRef.current.contains(e.target)) {
        setIsOpen(false);
    }
};
  useEffect(() => {
      document.addEventListener("click", handleOutSideClick);
  
    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, [isOpen]);

  return (
    <nav className="menu" ref={scope} key={ddName + "insights"}>
      <motion.button
      ref={ddButtonRef}
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
      ref={ddListRef}
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}
        className="mt-2 bg-white border border-gray-300 p-2 text-sm shadow-md space-y-2 absolute w-[200px] max-h-[300px] overflow-y-auto z-2"
      >
        {data?.map((item, index) => (
          <li
            className="cursor-pointer flex justify-start gap-3 w-full text-sm font-medium"
            key={index}
            onClick={() => handleSelection(item)}
          >
            <input
              type="checkbox"
              // name={item?.attributes?.typeName + "cb"}
              // id={item?.attributes?.typeName + "cb"}
              name={item?.id}
              id={item?.id}
              checked={selection.includes(item?.id)}
            //   onChange={() => handleSelection(item)}
            />
            <label
              className="cursor-pointer dark:text-black"
              // htmlFor={item?.attributes?.typeName ?? item + "cb"}
              htmlFor={item?.id}
            >
              {item?.name}
            </label>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Dropdown;
