"use client";

import { motion } from "framer-motion";

const metrics = [

  {
    value:"120K+",
    label:"Revenue Tracked",
  },

  {
    value:"5K+",
    label:"Businesses",
  },

  {
    value:"99.9%",
    label:"Uptime",
  },

  {
    value:"Trusted",
    label:"By SMEs",
  },

];

export default function SocialProof() {

  return (

    <section
      className="
      mx-auto

      mt-28

      max-w-6xl

      px-6
      "
    >

      <div
        className="
        grid

        gap-6

        md:grid-cols-4
        "
      >

        {metrics.map((metric)=>(

          <motion.div

            key={metric.label}

            initial={{
              opacity:0,
              y:30,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            viewport={{
              once:true,
            }}

            whileHover={{
              y:-8,
            }}

            className="
            rounded-3xl

            border border-slate-800

            bg-slate-900/70

            p-8

            text-center
            "
          >

            <h3
              className="
              text-4xl

              font-bold
              "
            >

              {metric.value}

            </h3>

            <p
              className="
              mt-2

              text-slate-400
              "
            >

              {metric.label}

            </p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}