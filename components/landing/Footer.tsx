"use client";

import Link from "next/link";

import {
  motion,
} from "framer-motion";

const footerLinks = {

  Product:[

    "Features",

    "Pricing",

    "Dashboard",

    "Changelog",

  ],

  Resources:[

    "Docs",

    "Blog",

    "Guides",

    "Help Center",

  ],

  Company:[

    "About",

    "Careers",

    "Contact",

    "Press",

  ],

  Legal:[

    "Privacy",

    "Terms",

    "Cookies",

    "Security",

  ],

};

export default function Footer() {

  return (

    <motion.footer

      initial={{
        opacity:0,
        y:40,
      }}

      whileInView={{
        opacity:1,
        y:0,
      }}

      viewport={{
        once:true,
      }}

      transition={{
        duration:.8,
      }}

      className="
      relative

      mt-40

      overflow-hidden

      border-t border-slate-800

      px-6 py-20
      "
    >

      {/* glow */}

      <div
        className="
        absolute

        left-1/2
        top-0

        h-[250px]
        w-[250px]

        -translate-x-1/2

        rounded-full

        bg-blue-500/10

        blur-[120px]
        "
      />

      <div
        className="
        relative

        z-10

        mx-auto

        max-w-7xl
        "
      >

        {/* top */}

        <div
          className="
          grid

          gap-16

          lg:grid-cols-5
          "
        >

          {/* brand */}

          <div className="lg:col-span-1">

            <h3
              className="
              text-3xl

              font-bold
              "
            >

              Analytica

            </h3>

            <p
              className="
              mt-5

              text-slate-400
              "
            >

              Business analytics for smarter decisions.

            </p>

          </div>

          {/* links */}

          {Object.entries(
            footerLinks
          ).map(([title,links])=>(

            <div key={title}>

              <h4
                className="
                font-semibold
                "
              >

                {title}

              </h4>

              <div
                className="
                mt-5

                space-y-3
                "
              >

                {links.map((link)=>(

                  <motion.div

                    key={link}

                    whileHover={{
                      x:4,
                    }}
                  >

                    <Link

                      href="#"

                      className="
                      text-slate-500

                      transition-colors

                      hover:text-white
                      "
                    >

                      {link}

                    </Link>

                  </motion.div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* bottom */}

        <div
          className="
          mt-20

          flex

          flex-col

          items-center

          justify-between

          gap-6

          border-t border-slate-800

          pt-8

          md:flex-row
          "
        >

          <p className="text-slate-500">

            © 2026 Analytica.
            All rights reserved.

          </p>

          <div className="flex gap-6">

            {[
              "X",

              "LinkedIn",

              "GitHub",

              "Discord",

            ].map((social)=>(

              <motion.a

                key={social}

                href="#"

                whileHover={{

                  y:-3,

                  scale:1.05,

                }}

                className="
                text-slate-500

                hover:text-white
                "
              >

                {social}

              </motion.a>

            ))}

          </div>

        </div>

      </div>

    </motion.footer>

  );

}