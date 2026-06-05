"use client";

import Image from "next/image";

import {
  TrendingUp,
  Users,
  FileText,
  Shield,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [

  {

    title:"Revenue Analytics",

    description:
      "Monitor revenue growth and trends.",

    image:
      "/revenue-card.png",

    icon:
      TrendingUp,

  },

  {

    title:"Customer Insights",

    description:
      "Understand customer behavior.",

    image:
      "/customer-card.png",

    icon:
      Users,

  },

  {

    title:"Reports",

    description:
      "Generate reports instantly.",

    image:
      "/report-card.png",

    icon:
      FileText,

  },

  {

    title:"Security",

    description:
      "Enterprise-grade protection.",

    image:
      "/dashboard-preview.png",

    icon:
      Shield,

  },

];

export default function Features() {

  return (

    <section
      id="features"

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

          Everything In One Place

        </h2>

      </div>

      <div
        className="
        mt-20

        grid

        gap-8

        md:grid-cols-2
        "
      >

        {features.map((feature)=>{

          const Icon =
            feature.icon;

          return (

            <motion.div

              key={feature.title}

              whileHover={{
                y:-10,
              }}

              className="
              rounded-[32px]

              border border-slate-800

              bg-slate-900

              p-6
              "
            >

              <Image

                src={feature.image}

                alt={feature.title}

                width={1000}

                height={600}

                className="
                rounded-2xl
                "
              />

              <div className="mt-6">

                <Icon className="text-blue-400" />

                <h3
                  className="
                  mt-4

                  text-2xl

                  font-semibold
                  "
                >

                  {feature.title}

                </h3>

                <p
                  className="
                  mt-3

                  text-slate-400
                  "
                >

                  {feature.description}

                </p>

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>

  );

}