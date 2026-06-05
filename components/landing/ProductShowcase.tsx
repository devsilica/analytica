"use client";

import Image from "next/image";

import { motion } from "framer-motion";

export default function ProductShowcase() {

  return (

    <section
      className="
      mx-auto

      mt-40

      max-w-7xl

      px-6
      "
    >

      <div className="text-center">

        <h2
          className="
          text-5xl

          font-bold
          "
        >

          See Everything.

          <span
            className="
            block

            text-blue-400
            "
          >

            From One Dashboard
          </span>

        </h2>

        <p
          className="
          mt-6

          text-slate-400
          "
        >

          Revenue, customers, reports and growth metrics —
          all unified.

        </p>

      </div>

      <div
        className="
        relative

        mt-24
        "
      >

        {/* floating cards */}

        <motion.div

          animate={{
            y:[0,-12,0],
          }}

          transition={{
            repeat:Infinity,
            duration:6,
          }}

          className="
          absolute

          left-0

          top-20

          rounded-2xl

          border border-slate-800

          bg-slate-900

          p-5
          "
        >

          Revenue +24%

        </motion.div>

        <motion.div

          animate={{
            y:[0,12,0],
          }}

          transition={{
            repeat:Infinity,
            duration:7,
          }}

          className="
          absolute

          right-0

          bottom-20

          rounded-2xl

          border border-slate-800

          bg-slate-900

          p-5
          "
        >

          Reports Generated

        </motion.div>

        <motion.div

          whileHover={{
            y:-8,
          }}

          className="
          overflow-hidden

          rounded-[36px]

          border border-slate-800

          bg-slate-900

          p-4
          "
        >

          <Image

            src="/dashboard-preview.png"

            alt="dashboard"

            width={1600}

            height={1000}

            className="
            rounded-3xl
            "
          />

        </motion.div>

      </div>

    </section>

  );

}