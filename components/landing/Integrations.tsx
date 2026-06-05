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

const container = {

  hidden:{},

  show:{

    transition:{

      staggerChildren:.08,

    },

  },

};

const item = {

  hidden:{

    opacity:0,

    y:30,

  },

  show:{

    opacity:1,

    y:0,

    transition:{

      duration:.6,

      ease:[0.22,1,0.36,1],

    },

  },

};

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

      {/* Heading */}

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

          Connect Analytica with tools your business already uses.

        </p>

      </motion.div>

      {/* Grid */}

      <motion.div

        variants={container}

        initial="hidden"

        whileInView="show"

        viewport={{
          once:true,
          amount:.2,
        }}

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

            variants={item}

            whileHover={{

              y:-8,

              scale:1.03,

            }}

            animate={{

              y:[0,-2,0],

            }}

            transition={{

              y:{

                duration:
                  4 + index * .3,

                repeat:
                  Infinity,

                ease:
                  "easeInOut",

              },

            }}

            className="
            relative

            overflow-hidden

            rounded-2xl

            border border-slate-800

            bg-slate-900

            p-6

            text-center

            transition-all
            "
          >

            {/* hover glow */}

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

      </motion.div>

    </section>

  );

}