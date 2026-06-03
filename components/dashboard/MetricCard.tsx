"use client";

import { ReactNode } from "react";

import {
  motion,
} from "framer-motion";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
}

export function MetricCard({
  title,
  value,
  change,
  icon,
}: MetricCardProps) {

  return (

    <motion.div

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
        duration: 0.45,
        ease: "easeOut",
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

      px-6 py-5

      min-h-[140px]

      shadow-xl

      transition-all

      duration-300

      hover:border-slate-700

      hover:shadow-2xl
      "
    >

      {/* Glow Layer */}

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

      <div
        className="
        relative

        flex

        items-center

        justify-between
        "
      >

        <div>

          <motion.p

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            className="
            text-sm

            text-slate-500
            "
          >

            {title}

          </motion.p>

          <motion.h3

            initial={{
              opacity: 0,
              y: 10,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.1,
            }}

            className="
            mt-2

            text-4xl

            font-bold
            "
          >

            {value}

          </motion.h3>

          <p
            className="
            mt-2

            text-xs

            uppercase

            tracking-wider

            text-slate-500
            "
          >

            vs last month

          </p>

          <motion.p

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 0.15,
            }}

            className="
            mt-1

            text-sm

            font-medium

            text-emerald-400
            "
          >

            {change}

          </motion.p>

        </div>

        <motion.div

          whileHover={{
            rotate: 12,
            scale: 1.12,
          }}

          transition={{
            duration: 0.25,
          }}

          className="
          rounded-2xl

          bg-slate-800

          p-4

          shadow-inner

          group-hover:bg-slate-700
          "
        >

          {icon}

        </motion.div>

      </div>

    </motion.div>

  );

}