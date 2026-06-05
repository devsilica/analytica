"use client";

import {
  motion,
} from "framer-motion";

const steps = [

  "Create Account",

  "Connect Data",

  "Track Metrics",

  "Generate Reports",

  "Grow Business",

];

const container = {

  hidden:{},

  show:{

    transition:{

      staggerChildren:.12,

    },

  },

};

const item = {

  hidden:{

    opacity:0,

    y:40,

  },

  show:{

    opacity:1,

    y:0,

    transition:{

      duration:.7,

      ease:[0.22,1,0.36,1],

    },

  },

};

export default function HowItWorks() {

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

          How It Works

        </h2>

        <p
          className="
          mt-4

          text-slate-400
          "
        >

          Setup takes minutes, not weeks.

        </p>

      </motion.div>

      {/* Steps */}

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

        gap-6

        md:grid-cols-5
        "
      >

        {steps.map((step,index)=>(

          <motion.div

            key={step}

            variants={item}

            whileHover={{

              y:-10,

              scale:1.03,

            }}

            className="
            relative

            rounded-3xl

            border border-slate-800

            bg-slate-900

            p-8

            text-center

            transition-all
            "
          >

            {/* glow */}

            <div
              className="
              absolute

              inset-0

              rounded-3xl

              opacity-0

              transition-opacity

              hover:opacity-100

              bg-gradient-to-b

              from-blue-500/5

              to-transparent
              "
            />

            {/* number */}

            <motion.div

              whileHover={{
                rotate:8,
              }}

              className="
              mx-auto

              flex

              h-14
              w-14

              items-center

              justify-center

              rounded-full

              bg-blue-600

              text-lg

              font-bold

              shadow-lg
              "
            >

              {index + 1}

            </motion.div>

            <p
              className="
              mt-6

              font-medium

              text-slate-200
              "
            >

              {step}

            </p>

          </motion.div>

        ))}

      </motion.div>

    </section>

  );

}