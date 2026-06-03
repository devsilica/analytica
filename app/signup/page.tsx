"use client";

import Link from "next/link";

import {
  User,
  Mail,
  Lock,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

export default function SignupPage() {

  return (

    <main
      className="
      flex min-h-screen
      items-center
      justify-center

      bg-gradient-to-br
      from-slate-950
      via-slate-950
      to-blue-950

      p-6
      "
    >

      <motion.div

        initial={{
          opacity: 0,
          y: 40,
          scale: .95,
        }}

        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        transition={{
          duration: .55,
          ease: "easeOut",
        }}

        className="
        w-full
        max-w-md

        rounded-3xl

        border border-slate-700/60

        bg-slate-900/95

        backdrop-blur-xl

        shadow-2xl

        p-8
        "
      >

        {/* Header */}

        <motion.div

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: .1,
          }}

          className="text-center"
        >

          <motion.h1

            initial={{
              opacity: 0,
              y: -10,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            className="
            text-4xl
            font-bold
            tracking-tight
            text-white
            "
          >

            Create Account

          </motion.h1>

          <p
            className="
            mt-3
            text-slate-400
            "
          >

            Start using Analytica

          </p>

        </motion.div>

        {/* Inputs */}

        <div className="mt-8 space-y-4">

          {/* Name */}

          <motion.div

            initial={{
              opacity: 0,
              x: -20,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              delay: .15,
            }}

            whileHover={{
              scale: 1.01,
            }}

            className="relative"
          >

            <User

              size={18}

              className="
              absolute
              left-4
              top-4

              text-slate-500
              "
            />

            <input

              type="text"

              placeholder="Full Name"

              className="
              w-full

              rounded-2xl

              border border-slate-700

              bg-slate-950/70

              py-3
              pl-12
              pr-4

              text-white

              placeholder:text-slate-500

              outline-none

              transition

              focus:border-blue-500

              focus:ring-2
              focus:ring-blue-500/20
              "
            />

          </motion.div>

          {/* Email */}

          <motion.div

            initial={{
              opacity: 0,
              x: 20,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              delay: .2,
            }}

            whileHover={{
              scale: 1.01,
            }}

            className="relative"
          >

            <Mail

              size={18}

              className="
              absolute
              left-4
              top-4

              text-slate-500
              "
            />

            <input

              type="email"

              placeholder="Email"

              className="
              w-full

              rounded-2xl

              border border-slate-700

              bg-slate-950/70

              py-3
              pl-12
              pr-4

              text-white

              placeholder:text-slate-500

              outline-none

              transition

              focus:border-blue-500

              focus:ring-2
              focus:ring-blue-500/20
              "
            />

          </motion.div>

          {/* Password */}

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
              delay: .25,
            }}

            whileHover={{
              scale: 1.01,
            }}

            className="relative"
          >

            <Lock

              size={18}

              className="
              absolute
              left-4
              top-4

              text-slate-500
              "
            />

            <input

              type="password"

              placeholder="Password"

              className="
              w-full

              rounded-2xl

              border border-slate-700

              bg-slate-950/70

              py-3
              pl-12
              pr-4

              text-white

              placeholder:text-slate-500

              outline-none

              transition

              focus:border-blue-500

              focus:ring-2
              focus:ring-blue-500/20
              "
            />

          </motion.div>

          {/* Button */}

          <motion.button

            whileHover={{
              scale: 1.02,
            }}

            whileTap={{
              scale: .96,
            }}

            initial={{
              opacity: 0,
              y: 15,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: .3,
            }}

            className="
            w-full

            rounded-2xl

            bg-blue-600

            py-3

            font-semibold

            text-white

            shadow-lg

            transition-all

            hover:bg-blue-500
            "
          >

            Create Account

          </motion.button>

        </div>

        {/* Footer */}

        <motion.p

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: .4,
          }}

          className="
          mt-8
          text-center
          text-slate-400
          "
        >

          Already have an account?

          <Link

            href="/login"

            className="
            ml-2

            text-blue-500

            hover:text-blue-400
            "
          >

            Login

          </Link>

        </motion.p>

      </motion.div>

    </main>

  );

}