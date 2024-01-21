import { useState } from "react";
import { motion } from "framer-motion";
import { PropagateLoader } from "react-spinners";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

export default function ListCarousel({ lists, isLoading }) {
  const CARD_WIDTH = 194;
  const CARD_HEIGHT = 340;
  const MARGIN = 8;
  const CARD_SIZE = CARD_WIDTH + MARGIN + 8;

  const BREAKPOINTS = {
    sm: 640,
    lg: 1024,
  };
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (lists?.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <>
      <div className="w-full flex justify-center">
        {/* 컨테이너 */}
        <div
          ref={ref}
          className="relative max-w-7xl w-full h-[380px] p-2 -translate-y-12 bg-white overflow-hidden"
        >
          {isLoading ? (
            <div className="w-full h-full flex justify-center items-center">
              <PropagateLoader color="#EC1D23" />
            </div>
          ) : (
            <motion.div
              animate={{
                x: offset,
              }}
              className="flex"
            >
              {lists?.map((item, index) => (
                <div
                  className="shrink-0 cursor-pointer group"
                  key={index}
                  style={{
                    width: `${CARD_WIDTH}px`,
                    height: `${CARD_HEIGHT}px`,
                    margin: `${MARGIN}px`,
                  }}
                >
                  <div className="w-full h-[280px]">
                    <img
                      className="w-full h-full object-cover duration-500 group-hover:-translate-y-3"
                      src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                      alt="comics_image"
                    />
                  </div>
                  <div className="py-2 px-1">
                    <h2 className="text-sm font-semibold duration-500 group-hover:text-red-600 ">
                      {item.title.substr(0, 48)}
                    </h2>
                    <h4 className="text-gray-500 text-sm">
                      {item.modified.split("-")[0]}
                    </h4>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[35%] z-30 rounded-r-xl bg-slate-500/50 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[35%] z-30 rounded-l-xl bg-slate-500/50 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </div>
      </div>
    </>
  );
}
