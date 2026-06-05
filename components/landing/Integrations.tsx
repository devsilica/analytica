"use client";

import {
  motion,
} from "framer-motion";

const integrations = [

  "Stripe",

  "Paystack",

  "Google Sheets",

  "WhatsApp",

  "Slack",

  "Shopify",

  "CSV Import",

  "Zapier",

];

export default function Integrations() {

  return (

    <section
      className="
      mx-auto

      mt-40

      max-w-6xl

      px-6
      "
    >

      {/* heading */}

      <motion.div

        initial={{
          opacity:0,
          y:25,
        }}

        whileInView={{
          opacity:1,
          y:0,
        }}

        viewport={{
          once:true,
        }}

        transition={{
          duration:.7,
        }}

        className="text-center"
      >

        <h2
          className="
          text-5xl

          font-bold
          "
        >

          Works With Your Stack

        </h2>

        <p
          className="
          mt-4

          text-slate-400
          "
        >

          Connect Analytica with tools you already use.

        </p>

      </motion.div>

      {/* grid */}

      <div
        className="
        mt-16

        grid

        gap-5

        md:grid-cols-4
        "
      >

        {integrations.map((tool,index)=>(

          <motion.div

            key={tool}

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

            transition={{

              duration:.6,

              delay:index * .08,

            }}

            whileHover={{

              y:-8,

              scale:1.03,

            }}

            animate={{

              y:[0,-2,0],

            }}

            className="
            relative

            overflow-hidden

            rounded-2xl

            border border-slate-800

            bg-slate-900

            p-6

            text-center
            "
          >

            {/* glow */}

            <div
              className="
              absolute

              inset-0

              opacity-0

              transition-opacity

              hover:opacity-100

              bg-gradient-to-b

              from-blue-500/5

              to-transparent
              "
            />

            <span
              className="
              relative

              z-10

              font-medium
              "
            >

              {tool}

            </span>

          </motion.div>

        ))}

      </div>

    </section>

  );

}