"use client";

import { motion } from "framer-motion";

const stats = [
  {
    title: "Revenue",
    value: "$84,240",
  },
  {
    title: "Customers",
    value: "8,421",
  },
  {
    title: "Orders",
    value: "12,582",
  },
  {
    title: "Growth",
    value: "+18%",
  },
];

export function OverviewGrid() {
  return (
    <section
      className="
      grid gap-6
      md:grid-cols-2
      xl:grid-cols-4
      "
    >

      {stats.map((item) => (

        <motion.div
          key={item.title}

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          whileHover={{
            y: -6,
            scale: 1.02,
          }}

          transition={{
            duration: 0.25,
          }}

          className="
            rounded-3xl
            border border-slate-800
            bg-slate-900
            p-6
          "
        >

          <p className="text-slate-500">

            {item.title}

          </p>

          <h2
            className="
            mt-4
            text-4xl
            font-bold
            "
          >

            {item.value}

          </h2>

        </motion.div>

      ))}

    </section>
  );
}