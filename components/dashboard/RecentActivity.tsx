"use client";

import {
  motion,
} from "framer-motion";

const activity = [
  "New customer signup",
  "Subscription upgraded",
  "Revenue milestone reached",
  "Order completed",
  "New invoice generated",
];

export function RecentActivity() {
  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.4,
      }}

      className="
      rounded-2xl
      border border-slate-800
      bg-slate-900
      p-5
      "
    >

      <h3 className="text-base font-semibold">

        Recent Activity

      </h3>

      <div className="mt-6 space-y-3">

        {activity.map(
          (
            item,
            index
          ) => (

            <motion.div
              key={item}

              initial={{
                opacity: 0,
                x: -20,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                delay:
                  index * 0.1,
                duration: 0.3,
              }}

              whileHover={{
                scale: 1.02,
                y: -2,
              }}

              whileTap={{
                scale: 0.98,
              }}

              className="
              rounded-xl
              border border-slate-800

              px-4 py-3

              transition-all

              hover:border-slate-700

              hover:bg-slate-800/40
              "
            >

              {item}

            </motion.div>

          )
        )}

      </div>

    </motion.div>

  );
}