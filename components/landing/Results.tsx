"use client";

import { motion } from "framer-motion";

const stats = [

  {
    value:"120K+",
    label:"Revenue Tracked",
  },

  {
    value:"8 Hours",
    label:"Saved Weekly",
  },

  {
    value:"3x",
    label:"Faster Reporting",
  },

  {
    value:"99.9%",
    label:"Uptime",
  },

];

export default function Results() {

  return (

    <section
      className="
      mx-auto

      mt-40

      max-w-6xl

      px-6
      "
    >

      <div
        className="
        grid

        gap-8

        md:grid-cols-4
        "
      >

        {stats.map((item,index)=>(

          <motion.div

            key={item.label}

            initial={{
              opacity:0,
              scale:.9,
            }}

            whileInView={{
              opacity:1,
              scale:1,
            }}

            transition={{
              delay:index * .1,
            }}

            viewport={{
              once:true,
            }}

            whileHover={{
              y:-10,
              scale:1.04,
            }}

            className="
            rounded-3xl

            border border-slate-800

            bg-slate-900

            p-8

            text-center
            "
          >

            <h3 className="text-5xl font-bold">

              {item.value}

            </h3>

            <p className="mt-3 text-slate-400">

              {item.label}

            </p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}