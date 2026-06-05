"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function CTA() {

  return (

    <motion.section

      initial={{
        opacity:0,
        y:50,
      }}

      whileInView={{
        opacity:1,
        y:0,
      }}

      viewport={{
        once:true,
      }}

      className="
      mx-auto

      mt-40

      max-w-5xl

      px-6

      text-center
      "
    >

      <h2
        className="
        text-6xl

        font-bold
        "
      >

        Ready To Grow Smarter?

      </h2>

      <p
        className="
        mt-6

        text-slate-400
        "
      >

        No credit card required.

      </p>

      <div className="mt-10 flex justify-center gap-4">

        <motion.div

          whileHover={{
            scale:1.04,
          }}

          whileTap={{
            scale:.96,
          }}
        >

          <Link

            href="/dashboard"

            className="
            rounded-2xl

            bg-blue-600

            px-8 py-4
            "
          >

            Open Dashboard

          </Link>

        </motion.div>

      </div>

    </motion.section>

  );

}