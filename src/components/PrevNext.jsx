import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PrevNext({ prev, next }) {
  const [openPrev, setOpenPrev] = useState(false);
  const [openNext, setOpenNext] = useState(false);
  return (
    <div className="w-full h-10 bg-main-dark border-t border-gray-700 flex justify-center items-center uppercase text-gray-300 text-sm space-x-2">
      <div className="uppercase text-sm font-semibold grid grid-cols-2 gap-4 ">
        {/* prev */}
        {prev && (
          <div
            className="relative "
            onMouseEnter={() => setOpenPrev(true)}
            onMouseLeave={() => setOpenPrev(false)}
          >
            <Link to={`/comics/${prev?.id}`}>
              <span className="flex space-x-1 items-center h-full cursor-pointer px-2 ">
                <FaAngleLeft size="18" />
                <em>prev</em>
              </span>
            </Link>
            <AnimatePresence>
              {openPrev && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="z-20 absolute right-0 top-10 bg-white text-black w-40 h-72 p-2"
                >
                  <img
                    className="w-full h-52 object-cover"
                    src={`${prev?.thumbnail?.path}.${prev?.thumbnail?.extension}`}
                    alt="prev_image"
                  />
                  <h2 className="text-sm py-2">{prev?.title.substr(0, 28)}</h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
        {/* Next */}
        {next && (
          <div
            className="relative "
            onMouseEnter={() => setOpenNext(true)}
            onMouseLeave={() => setOpenNext(false)}
          >
            <Link to={`/comics/${next?.id}`}>
              <span className="flex space-x-1 items-center h-full cursor-pointer px-2 ">
                <em>next</em>
                <FaAngleRight size="18" />
              </span>
            </Link>
            <AnimatePresence>
              {openNext && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="z-20 absolute left-0 top-10 bg-white text-black w-40 h-72 p-2"
                >
                  <img
                    className="w-full h-52 object-cover"
                    src={`${next?.thumbnail?.path}.${next?.thumbnail?.extension}`}
                    alt="prev_image"
                  />
                  <h2 className="text-sm py-2">{next?.title.substr(0, 28)}</h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
