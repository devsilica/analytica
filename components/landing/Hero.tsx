"use client";

import Link from "next/link";
import Image from "next/image";

import {
  motion,
} from "framer-motion";

export default function Hero() {

  return (

    <section
      className="
      relative

      overflow-hidden
      "
    >

      {/* Glow */}

      <motion.div

        animate={{

          x:[0,100,0],

          y:[0,-60,0],

          scale:[1,1.1,1],

        }}

        transition={{

          duration:20,

          repeat:Infinity,

          ease:"easeInOut",

        }}

        className="
        absolute

        left-1/2
        top-20

        h-[550px]
        w-[550px]

        -translate-x-1/2

        rounded-full

        bg-blue-600/20

        blur-[160px]
        "
      />

      <div
        className="
        mx-auto

        flex

        max-w-7xl

        flex-col

        items-center

        px-6

        pt-28

        text-center
        "
      >

        {/* Badge */}

        <motion.div

          initial={{
            opacity:0,
            y:20,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          className="
          rounded-full

          border border-blue-500/20

          bg-blue-500/10

          px-4 py-2

          text-blue-400
          "
        >

          Built For SMEs 🚀

        </motion.div>

        {/* Headline */}

        <motion.h1

          initial={{
            opacity:0,
            y:30,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            delay:.1,
          }}

          className="
          mt-10

          max-w-5xl

          text-6xl

          font-bold

          leading-none

          md:text-8xl
          "
        >

          Turn Business Data

          <span
            className="
            block

            bg-gradient-to-r

            from-blue-400

            to-cyan-400

            bg-clip-text

            text-transparent
            "
          >

            Into Better Decisions

          </span>

        </motion.h1>

        {/* Sub */}

        <motion.p

          initial={{
            opacity:0,
            y:30,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            delay:.2,
          }}

          className="
          mt-8

          max-w-2xl

          text-xl

          leading-relaxed

          text-slate-400
          "
        >

          Track customers,
          revenue,
          reports,
          and growth metrics
          from one unified analytics platform.

        </motion.p>

        {/* CTA */}

        <motion.div

          initial={{
            opacity:0,
            y:20,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            delay:.3,
          }}

          className="
          mt-10

          flex

          flex-wrap

          justify-center

          gap-4
          "
        >

          <Link
            href="/dashboard"

            className="
            rounded-2xl

            bg-blue-600

            px-8 py-4

            font-medium

            transition-all

            hover:scale-[1.03]
            "
          >

            Open Dashboard

          </Link>

          <button
            className="
            rounded-2xl

            border border-slate-800

            px-8 py-4
            "
          >

            View Demo

          </button>

        </motion.div>

        {/* Trust */}

        <p
          className="
          mt-4

          text-sm

          text-slate-500
          "
        >

          No credit card required

        </p>

        {/* Dashboard */}

        <div
          className="
          relative

          mt-24
          "
        >

          {/* Card 1 */}

          <motion.div

            animate={{
              y:[0,-10,0],
            }}

            transition={{
              duration:6,
              repeat:Infinity,
            }}

            className="
            absolute

            -left-8

            top-20

            rounded-2xl

            border border-slate-800

            bg-slate-900/90

            p-5
            "
          >

            +24% Revenue

          </motion.div>

          {/* Card 2 */}

          <motion.div

            animate={{
              y:[0,10,0],
            }}

            transition={{
              duration:7,
              repeat:Infinity,
            }}

            className="
            absolute

            -right-8

            bottom-20

            rounded-2xl

            border border-slate-800

            bg-slate-900/90

            p-5
            "
          >

            5K Customers

          </motion.div>

          {/* Card 3 */}

          <motion.div

            animate={{
              y:[0,-6,0],
            }}

            transition={{
              duration:5,
              repeat:Infinity,
            }}

            className="
            absolute

            left-1/2

            -bottom-10

            -translate-x-1/2

            rounded-2xl

            border border-slate-800

            bg-slate-900/90

            p-5
            "
          >

            98% Accuracy

          </motion.div>

          {/* Preview */}

          <motion.div

            whileHover={{
              y:-8,
            }}

            className="
            overflow-hidden

            rounded-[32px]

            border border-slate-800

            bg-slate-900

            p-4

            shadow-2xl
            "
          >

            <Image
              src="/dashboard-preview.png"
              alt="dashboard"

              width={1500}
              height={900}

              className="
              rounded-3xl
              "
            />

          </motion.div>

        </div>

      </div>

    </section>

  );

}