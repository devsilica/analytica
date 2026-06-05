"use client";

import { motion } from "framer-motion";

const testimonials = [

  {
    name:"Sarah Johnson",
    role:"Retail Business Owner",
    quote:
      "Analytica helped us understand our revenue patterns and improve decisions.",
  },

  {
    name:"David Cole",
    role:"Agency Founder",
    quote:
      "Our reporting workflow became dramatically faster.",
  },

  {
    name:"Amina Yusuf",
    role:"Startup Founder",
    quote:
      "Simple, clean, and extremely useful for tracking growth.",
  },

];

export default function Testimonials() {

  return (

    <section
      className="
      mx-auto

      mt-40

      max-w-7xl

      px-6
      "
    >

      <motion.div

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

        className="text-center"
      >

        <h2
          className="
          text-5xl

          font-bold
          "
        >

          Loved By Growing Businesses

        </h2>

      </motion.div>

      <div
        className="
        mt-20

        grid

        gap-8

        lg:grid-cols-3
        "
      >

        {testimonials.map((item,index)=>(

          <motion.div

            key={item.name}

            initial={{
              opacity:0,
              y:40,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            transition={{
              delay:index * .15,
            }}

            whileHover={{
              y:-10,
              scale:1.02,
            }}

            viewport={{
              once:true,
            }}

            className="
            rounded-[32px]

            border border-slate-800

            bg-slate-900

            p-8
            "
          >

            <p className="text-slate-300">

              "{item.quote}"

            </p>

            <div className="mt-8">

              <h4 className="font-semibold">

                {item.name}

              </h4>

              <p className="text-slate-500">

                {item.role}

              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}