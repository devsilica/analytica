"use client";

import {
  TrendingUp,
  Clock,
  Eye,
  BarChart3,
  Users,
  Sparkles,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

const benefits = [

  {
    title:"Faster Decisions",

    description:
      "Make smarter choices with real-time insights.",

    icon:
      TrendingUp,
  },

  {
    title:"Business Clarity",

    description:
      "See what matters across your operations.",

    icon:
      Eye,
  },

  {
    title:"Less Manual Work",

    description:
      "Automate repetitive reporting workflows.",

    icon:
      Clock,
  },

  {
    title:"Growth Tracking",

    description:
      "Monitor business performance continuously.",

    icon:
      BarChart3,
  },

  {
    title:"Customer Insights",

    description:
      "Understand customer behavior better.",

    icon:
      Users,
  },

  {
    title:"Smarter Operations",

    description:
      "Operate with data-driven confidence.",

    icon:
      Sparkles,
  },

];

const container = {

  hidden:{},

  show:{

    transition:{

      staggerChildren:.1,

    },

  },

};

const item = {

  hidden:{

    opacity:0,

    y:35,

  },

  show:{

    opacity:1,

    y:0,

    transition:{

      duration:.7,

      ease:[0.22,1,0.36,1],

    },

  },

};

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

      {/* heading */}

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
          duration:.7,
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

      {/* cards */}

      <motion.div

        variants={container}

        initial="hidden"

        whileInView="show"

        viewport={{
          once:true,
          amount:.2,
        }}

        className="
        mt-16

        grid

        gap-6

        md:grid-cols-3
        "
      >

        {benefits.map((item,index)=>{

          const Icon =
            item.icon;

          return (

            <motion.div

              key={item.title}

              variants={item}

              whileHover={{

                y:-8,

                scale:1.02,

              }}

              animate={{

                y:[0,-2,0],

              }}

              transition={{

                y:{

                  duration:
                    5 + index * .4,

                  repeat:
                    Infinity,

                  ease:
                    "easeInOut",

                },

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

              {/* glow */}

              <div
                className="
                absolute

                inset-0

                opacity-0

                transition-opacity

                hover:opacity-100

                bg-gradient-to-b

                from-blue-500/5

                to-transparent
                "
              />

              {/* icon */}

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

                {item.title}

              </h3>

              <p
                className="
                relative

                z-10

                mt-3

                text-slate-400
                "
              >

                {item.description}

              </p>

            </motion.div>

          );

        })}

      </motion.div>

    </section>

  );

}