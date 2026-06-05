"use client";

import {
  motion,
} from "framer-motion";

const plans = [

  {

    name:"Starter",

    price:"Free",

    features:[

      "Basic Analytics",

      "Customer Tracking",

      "Reports",

    ],

  },

  {

    name:"Growth",

    price:"$19/mo",

    popular:true,

    features:[

      "Advanced Analytics",

      "Unlimited Reports",

      "Growth Metrics",

      "Priority Support",

    ],

  },

  {

    name:"Business",

    price:"$49/mo",

    features:[

      "Teams",

      "Automation",

      "Advanced Insights",

      "Everything Included",

    ],

  },

];

const container = {

  hidden:{},

  show:{

    transition:{

      staggerChildren:.15,

    },

  },

};

const item = {

  hidden:{

    opacity:0,

    y:50,

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

export default function Pricing() {

  return (

    <section
      id="pricing"

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
          y:30,
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

          Simple Pricing

        </h2>

        <p
          className="
          mt-4

          text-slate-400
          "
        >

          Flexible pricing that grows with your business.

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
        mt-20

        grid

        gap-8

        lg:grid-cols-3
        "
      >

        {plans.map((plan)=>(

          <motion.div

            key={plan.name}

            variants={item}

            whileHover={{

              y:-12,

              scale:1.02,

            }}

            className={`
            relative

            overflow-hidden

            rounded-[32px]

            border

            p-8

            transition-all

            ${
              plan.popular

              ? "border-blue-500 bg-slate-900"

              : "border-slate-800 bg-slate-900"
            }
            `}
          >

            {/* glow */}

            <div
              className="
              absolute

              inset-0

              bg-gradient-to-b

              from-blue-500/5

              to-transparent

              opacity-0

              transition-opacity

              hover:opacity-100
              "
            />

            {plan.popular && (

              <motion.div

                animate={{

                  scale:[1,1.05,1],

                }}

                transition={{

                  repeat:Infinity,

                  duration:2,

                }}

                className="
                mb-5

                inline-block

                rounded-full

                bg-blue-600

                px-3 py-1

                text-sm
                "
              >

                Most Popular

              </motion.div>

            )}

            <h3
              className="
              text-3xl

              font-bold
              "
            >

              {plan.name}

            </h3>

            <p
              className="
              mt-4

              text-5xl

              font-bold
              "
            >

              {plan.price}

            </p>

            <div className="mt-8 space-y-4">

              {plan.features.map((feature,index)=>(

                <motion.p

                  key={feature}

                  initial={{
                    opacity:0,
                    x:-10,
                  }}

                  whileInView={{
                    opacity:1,
                    x:0,
                  }}

                  transition={{
                    delay:index * .08,
                  }}
                >

                  ✓ {feature}

                </motion.p>

              ))}

            </div>

            <motion.button

              whileHover={{
                scale:1.03,
              }}

              whileTap={{
                scale:.97,
              }}

              className="
              mt-10

              w-full

              rounded-2xl

              bg-blue-600

              py-3

              font-medium
              "
            >

              Get Started

            </motion.button>

          </motion.div>

        ))}

      </motion.div>

    </section>

  );

}