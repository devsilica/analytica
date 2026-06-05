"use client";

import { motion } from "framer-motion";

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

          Simple Pricing

        </h2>

        <p
          className="
          mt-4

          text-slate-400
          "
        >

          Flexible plans that scale with your business.

        </p>

      </motion.div>

      {/* cards */}

      <div
        className="
        mt-20

        grid

        gap-8

        lg:grid-cols-3
        "
      >

        {plans.map((plan,index)=>(

          <motion.div

            key={plan.name}

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

              duration:.6,

              delay:index * .12,

            }}

            whileHover={{

              y:-10,

              scale:1.02,

            }}

            className={`
            relative

            overflow-hidden

            rounded-[32px]

            border

            p-8

            ${
              plan.popular

              ? "border-blue-500 bg-slate-900"

              : "border-slate-800 bg-slate-900"
            }
            `}
          >

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

              {plan.features.map((feature,featureIndex)=>(

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
                    delay:featureIndex * .05,
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
              "
            >

              Get Started

            </motion.button>

          </motion.div>

        ))}

      </div>

    </section>

  );

}