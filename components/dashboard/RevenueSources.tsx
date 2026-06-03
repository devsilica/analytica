"use client";

import { motion } from "framer-motion";

import {
  CreditCard,
  Building2,
  Store,
} from "lucide-react";

const sources = [
  {
    name: "Subscriptions",
    value: "$124K",
    growth: "+12%",
    icon: CreditCard,
  },
  {
    name: "Enterprise",
    value: "$86K",
    growth: "+8%",
    icon: Building2,
  },
  {
    name: "Marketplace",
    value: "$42K",
    growth: "+21%",
    icon: Store,
  },
];

export function RevenueSources() {
  return (

    <section
      className="
      grid gap-6
      md:grid-cols-3
      "
    >

      {sources.map(
        (
          source,
          index
        ) => {

          const Icon =
            source.icon;

          return (

            <motion.div
              key={source.name}

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.35,
                delay:
                  index * 0.12,
              }}

              whileHover={{
                y: -6,
                scale: 1.02,
              }}

              whileTap={{
                scale: 0.98,
              }}

              className="
              rounded-2xl

              border
              border-slate-800

              bg-slate-900

              p-6

              transition-all

              hover:border-slate-700
              "
            >

              <motion.div

                whileHover={{
                  rotate: 8,
                  scale: 1.1,
                }}

                transition={{
                  duration: 0.2,
                }}

                className="
                mb-4
                w-fit

                rounded-xl

                bg-slate-800

                p-3
                "
              >

                <Icon size={18} />

              </motion.div>

              <p
                className="
                text-sm
                text-slate-500
                "
              >

                {source.name}

              </p>

              <h3
                className="
                mt-3

                text-3xl

                font-bold
                "
              >

                {source.value}

              </h3>

              <p
                className="
                mt-2

                text-sm

                text-emerald-400
                "
              >

                {source.growth}

              </p>

            </motion.div>

          );

        }
      )}

    </section>

  );
}