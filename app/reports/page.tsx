"use client";

import { motion } from "framer-motion";

import { DashboardShell } from "@/components/layout/shell/DashboardShell";

import {
  FileDown,
  Calendar,
  TrendingUp,
  Filter,
} from "lucide-react";

const reports = [

  {
    title: "Revenue Report",
    date: "Jun 2026",
    growth: "+18%",
  },

  {
    title: "Customer Growth",
    date: "Jun 2026",
    growth: "+12%",
  },

  {
    title: "Sales Performance",
    date: "Jun 2026",
    growth: "+24%",
  },

  {
    title: "Market Analysis",
    date: "Jun 2026",
    growth: "+9%",
  },

];

export default function ReportsPage() {

  return (

    <DashboardShell>

      <motion.div

        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: .4,
        }}

        className="space-y-8"
      >

        {/* Header */}

        <div
          className="
          flex flex-col gap-4

          md:flex-row

          md:items-center

          md:justify-between
          "
        >

          <div>

            <motion.h1

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              className="
              text-3xl
              font-bold
              "
            >

              Reports

            </motion.h1>

            <p className="text-slate-500">

              Business insights and exports

            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <motion.button

              whileHover={{
                scale: 1.03,
              }}

              whileTap={{
                scale: .96,
              }}

              className="
              flex items-center gap-2

              rounded-xl

              border border-slate-800

              px-4 py-2
              "
            >

              <Calendar size={18} />

              Last 30 Days

            </motion.button>

            <motion.button

              whileHover={{
                scale: 1.03,
              }}

              whileTap={{
                scale: .96,
              }}

              className="
              flex items-center gap-2

              rounded-xl

              bg-blue-600

              px-4 py-2
              "
            >

              <FileDown size={18} />

              Export

            </motion.button>

          </div>

        </div>

        {/* Cards */}

        <section
          className="
          grid gap-6

          md:grid-cols-2

          xl:grid-cols-4
          "
        >

          {reports.map(
            (
              report,
              index
            ) => (

              <motion.div

                key={report.title}

                initial={{
                  opacity: 0,
                  y: 25,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay:
                    index * 0.1,
                }}

                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}

                className="
                rounded-3xl

                border border-slate-800/70

                bg-slate-900/95

                backdrop-blur-xl

                p-6

                shadow-xl
                "
              >

                <div className="flex justify-between">

                  <motion.div

                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                  >

                    <TrendingUp />

                  </motion.div>

                  <span className="text-emerald-400">

                    {report.growth}

                  </span>

                </div>

                <h3
                  className="
                  mt-8

                  text-xl

                  font-semibold
                  "
                >

                  {report.title}

                </h3>

                <p className="mt-2 text-slate-500">

                  {report.date}

                </p>

              </motion.div>

            )
          )}

        </section>

        {/* Generated Reports */}

        <motion.div

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: .2,
          }}

          className="
          rounded-3xl

          border border-slate-800

          bg-slate-900

          p-6
          "
        >

          <div className="mb-6 flex justify-between">

            <h2
              className="
              text-xl

              font-semibold
              "
            >

              Generated Reports

            </h2>

            <motion.button

              whileHover={{
                scale: 1.05,
              }}

              whileTap={{
                scale: .95,
              }}

              className="
              flex items-center gap-2

              rounded-xl

              border border-slate-700

              px-4 py-2
              "
            >

              <Filter size={16} />

              Filter

            </motion.button>

          </div>

          <div className="space-y-4">

            {reports.map(
              (
                report,
                index
              ) => (

                <motion.div

                  key={report.title}

                  initial={{
                    opacity: 0,
                    x: -20,
                  }}

                  animate={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    delay:
                      index * .08,
                  }}

                  whileHover={{
                    scale: 1.01,
                  }}

                  className="
                  flex items-center

                  justify-between

                  rounded-xl

                  border border-slate-800

                  bg-slate-950/40

                  p-4
                  "
                >

                  <div>

                    <h4>

                      {report.title}

                    </h4>

                    <p className="text-slate-500">

                      Generated {report.date}

                    </p>

                  </div>

                  <motion.button

                    whileHover={{
                      scale: 1.05,
                    }}

                    whileTap={{
                      scale: .95,
                    }}

                    className="
                    rounded-xl

                    bg-slate-800

                    px-4 py-2
                    "
                  >

                    View

                  </motion.button>

                </motion.div>

              )
            )}

          </div>

        </motion.div>

      </motion.div>

    </DashboardShell>

  );

}