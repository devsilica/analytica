"use client";

import {
  TrendingUp,
  Clock,
  Eye,
  BarChart3,
  Users,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const benefits = [

  {
    title:"Faster Decisions",
    description:"Make smarter choices with real-time insights.",
    icon:TrendingUp,
  },

  {
    title:"Business Clarity",
    description:"See what matters across your operations.",
    icon:Eye,
  },

  {
    title:"Less Manual Work",
    description:"Automate repetitive reporting workflows.",
    icon:Clock,
  },

  {
    title:"Growth Tracking",
    description:"Monitor business performance continuously.",
    icon:BarChart3,
  },

  {
    title:"Customer Insights",
    description:"Understand customer behavior better.",
    icon:Users,
  },

  {
    title:"Smarter Operations",
    description:"Operate with data-driven confidence.",
    icon:Sparkles,
  },

];

export default function Benefits() {

  return (

    <section
      className="
      mx-auto
      mt-40
      max-w-7xl
      px-6
      "
    >

      {/* Heading */}

      <motion.div

        initial={{
          opacity:0,
          y:25,
        }}

        whileInView={{
          opacity:1,
          y:0,
        }}

        viewport={{
          once:true,
        }}

        transition={{
          duration:0.7,
        }}

        className="text-center"
      >

        <h2
          className="
          text-5xl
          font-bold
          "
        >

          Built For Better Decisions

        </h2>

        <p
          className="
          mt-5
          text-slate-400
          "
        >

          Outcomes that move your business forward.

        </p>

      </motion.div>

      {/* Cards */}

      <div
        className="
        mt-16
        grid
        gap-6
        md:grid-cols-3
        "
      >

        {benefits.map((benefit,index)=>{

          const Icon =
            benefit.icon;

          return (

            <motion.div

              key={benefit.title}

              initial={{
                opacity:0,
                y:35,
              }}

              whileInView={{
                opacity:1,
                y:0,
              }}

              viewport={{
                once:true,
              }}

              transition={{

                duration:0.6,

                delay:index * 0.1,

              }}

              whileHover={{

                y:-8,

                scale:1.02,

              }}

              className="
              relative
              overflow-hidden
              rounded-[28px]
              border border-slate-800
              bg-slate-900
              p-8
              transition-all
              "
            >

              {/* Glow */}

              <div
                className="
                absolute
                inset-0
                opacity-0
                hover:opacity-100
                transition-opacity
                bg-gradient-to-b
                from-blue-500/5
                to-transparent
                "
              />

              {/* Icon */}

              <motion.div

                whileHover={{
                  rotate:6,
                }}

                className="
                relative
                z-10
                "
              >

                <Icon
                  size={34}
                  className="
                  text-blue-400
                  "
                />

              </motion.div>

              <h3
                className="
                relative
                z-10
                mt-6
                text-xl
                font-semibold
                "
              >

                {benefit.title}

              </h3>

              <p
                className="
                relative
                z-10
                mt-3
                text-slate-400
                "
              >

                {benefit.description}

              </p>

            </motion.div>

          );

        })}

      </div>

    </section>

  );

}