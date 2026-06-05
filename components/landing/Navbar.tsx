"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

export default function Navbar() {

  return (

    <motion.nav

      initial={{
        y:-40,
        opacity:0,
      }}

      animate={{
        y:0,
        opacity:1,
      }}

      transition={{
        duration:.7,
      }}

      className="
      sticky top-0 z-50

      border-b border-slate-800/50

      bg-slate-950/70

      backdrop-blur-xl
      "
    >

      <div
        className="
        mx-auto

        flex

        max-w-7xl

        items-center

        justify-between

        px-6 py-5
        "
      >

        {/* Logo */}

        <Link
          href="/"
          className="
          flex

          items-center

          gap-3
          "
        >

          <Image
            src="/analytica.png"
            alt="Analytica"

            width={46}
            height={46}

            className="rounded-xl"
          />

          <span
            className="
            text-xl

            font-semibold
            "
          >

            Analytica

          </span>

        </Link>

        {/* Links */}

        <div
          className="
          hidden

          items-center

          gap-8

          md:flex
          "
        >

          <a href="#features">

            Features

          </a>

          <a href="#pricing">

            Pricing

          </a>

          <a href="#docs">

            Docs

          </a>

          <a href="#resources">

            Resources

          </a>

        </div>

        {/* CTA */}

        <div
          className="
          flex

          items-center

          gap-4
          "
        >

          <Link
            href="/login"
            className="
            hidden

            text-slate-400

            md:block
            "
          >

            Login

          </Link>

          <Link
            href="/dashboard"

            className="
            rounded-xl

            bg-blue-600

            px-5 py-3

            transition-all

            hover:scale-[1.03]

            hover:bg-blue-500
            "
          >

            Open Dashboard

          </Link>

        </div>

      </div>

    </motion.nav>

  );

}