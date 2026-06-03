"use client";

import { motion } from "framer-motion";

const stats = [
  {
    title: "Revenue Growth",
    value: "24%",
  },
  {
    title: "Customer Retention",
    value: "24%",
  },
  {
    title: "Conversion Rate",
    value: "24%",
  },
];

export function AnalyticsStats() {
  return (

    <section
      className="
      grid gap-6
      md:grid-cols-3
      "
    >

      {stats.map(
        (
          item,
          index
        ) => (

          <motion.div

            key={item.title}

            initial={{
              opacity: 0,
              y: 25,
              scale: 0.96,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            transition={{
              duration: 0.4,
              delay:
                index * 0.12,
            }}

            whileHover={{
              y: -8,
              scale: 1.02,
            }}

            whileTap={{
              scale: 0.98,
            }}

            className="
            group

            relative

            overflow-hidden

            rounded-3xl

            border border-slate-800/70

            bg-slate-900/95

            backdrop-blur-xl

            p-6

            shadow-xl

            transition-all

            hover:border-slate-700
            "
          >

            {/* Glow */}

            <motion.div

              initial={{
                opacity: 0,
              }}

              whileHover={{
                opacity: 1,
              }}

              className="
              absolute

              inset-0

              bg-gradient-to-r

              from-blue-500/5

              via-transparent

              to-cyan-500/5
              "
            />

            <div className="relative">

              <motion.p

                initial={{
                  opacity: 0,
                }}

                animate={{
                  opacity: 1,
                }}

                className="
                text-slate-500
                "
              >

                {item.title}

              </motion.p>

              <motion.h2

                initial={{
                  opacity: 0,
                  y: 10,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay:
                    index * 0.12 +
                    0.15,
                }}

                className="
                mt-4

                text-4xl

                font-bold
                "
              >

                {item.value}

              </motion.h2>

            </div>

          </motion.div>

        )
      )}

    </section>

  );
}