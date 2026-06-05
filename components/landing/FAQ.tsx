"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useState } from "react";

const faqs = [

  "Who is Analytica for?",

  "Can I export reports?",

  "How secure is my data?",

  "How long does setup take?",

  "Do integrations exist?",

];

export default function FAQ() {

  const [
    open,
    setOpen,
  ] = useState<number | null>(
    null
  );

  return (

    <section
      className="
      mx-auto

      mt-40

      max-w-4xl

      px-6
      "
    >

      <motion.h2

        initial={{
          opacity:0,
          y:40,
        }}

        whileInView={{
          opacity:1,
          y:0,
        }}

        className="
        text-center

        text-5xl

        font-bold
        "
      >

        FAQ

      </motion.h2>

      <div className="mt-16 space-y-4">

        {faqs.map((faq,index)=>(

          <motion.div

            key={faq}

            whileHover={{
              y:-3,
            }}

            className="
            rounded-2xl

            border border-slate-800

            bg-slate-900
            "
          >

            <button

              onClick={()=>

                setOpen(

                  open===index

                  ? null

                  : index

                )

              }

              className="
              w-full

              p-6

              text-left
              "
            >

              {faq}

            </button>

            <AnimatePresence>

              {

                open===index && (

                  <motion.div

                    initial={{
                      opacity:0,
                      height:0,
                    }}

                    animate={{
                      opacity:1,
                      height:"auto",
                    }}

                    exit={{
                      opacity:0,
                      height:0,
                    }}

                    className="
                    overflow-hidden

                    px-6

                    pb-6

                    text-slate-400
                    "
                  >

                    More details about {faq}

                  </motion.div>

                )

              }

            </AnimatePresence>

          </motion.div>

        ))}

      </div>

    </section>

  );

}