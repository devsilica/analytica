"use client";

import {
  Bell,
  Search,
  Moon,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";

export function Header() {

  return (

    <motion.header

      initial={{
        opacity: 0,
        y: -20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      className="
      sticky top-0 z-30

      border-b border-slate-800/60

      bg-slate-950/80

      backdrop-blur-xl

      px-6 py-4
      "
    >

      <div
        className="
        flex flex-col gap-4

        lg:flex-row

        lg:items-center

        lg:justify-between
        "
      >

        {/* Left */}

        <div>

          <h1
            className="
            mt-1

            text-2xl

            font-bold
            "
          >

            Dashboard

          </h1>

        </div>

        {/* Search */}

        <div
          className="
          relative

          w-full

          lg:w-[420px]
          "
        >

          <Search
            size={18}

            className="
            absolute

            left-4

            top-3.5

            text-slate-500
            "
          />

          <input

            placeholder="Search metrics, customers..."

            className="
            w-full

            rounded-2xl

            border border-slate-800

            bg-slate-900/80

            py-3

            pl-12

            pr-4

            outline-none

            focus:border-blue-500
            "
          />

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <motion.button

            whileHover={{
              scale: 1.05,
            }}

            whileTap={{
              scale: .95,
            }}

            className="
            rounded-xl

            border border-slate-800

            bg-slate-900

            p-3
            "
          >

            <Moon size={18} />

          </motion.button>

          <motion.button

            whileHover={{
              scale: 1.05,
            }}

            whileTap={{
              scale: .95,
            }}

            className="
            relative

            rounded-xl

            border border-slate-800

            bg-slate-900

            p-3
            "
          >

            <Bell size={18} />

            <span
              className="
              absolute

              -right-1
              -top-1

              flex

              h-5
              w-5

              items-center

              justify-center

              rounded-full

              bg-blue-600

              text-xs
              "
            >

              3

            </span>

          </motion.button>

          <motion.div

            whileHover={{
              scale: 1.05,
            }}

            className="
            flex

            h-11
            w-11

            items-center

            justify-center

            rounded-full

            bg-blue-600

            font-medium
            "
          >

            A

          </motion.div>

        </div>

      </div>

    </motion.header>

  );

}
