"use client";

import { motion } from "framer-motion";

const problems = [

  "Spreadsheet chaos",

  "Manual reporting",

  "Poor visibility",

  "Slow decision making",

];

const solutions = [

  "Unified analytics",

  "Business insights",

  "Automated reporting",

  "Real-time tracking",

];

export default function ProblemSolution() {

  return (

    <section
      className="
      mx-auto

      mt-36

      max-w-7xl

      px-6
      "
    >

      <div
        className="
        mb-16

        text-center
        "
      >

        <h2
          className="
          text-5xl

          font-bold
          "
        >

          Stop Running Your Business

          <span
            className="
            block

            text-blue-400
            "
          >

            With Guesswork

          </span>

        </h2>

      </div>

      <div
        className="
        grid

        gap-8

        lg:grid-cols-2
        "
      >

        {/* Problems */}

        <motion.div

          initial={{
            opacity:0,
            x:-50,
          }}

          whileInView={{
            opacity:1,
            x:0,
          }}

          viewport={{
            once:true,
          }}

          className="
          rounded-[32px]

          border border-red-500/10

          bg-slate-900

          p-10
          "
        >

          <h3
            className="
            text-3xl

            font-bold
            "
          >

            Before Analytica

          </h3>

          <div className="mt-8 space-y-5">

            {problems.map((problem)=>(

              <div
                key={problem}

                className="
                rounded-xl

                bg-slate-950

                p-4
                "
              >

                {problem}

              </div>

            ))}

          </div>

        </motion.div>

        {/* Solutions */}

        <motion.div

          initial={{
            opacity:0,
            x:50,
          }}

          whileInView={{
            opacity:1,
            x:0,
          }}

          viewport={{
            once:true,
          }}

          className="
          rounded-[32px]

          border border-blue-500/10

          bg-slate-900

          p-10
          "
        >

          <h3
            className="
            text-3xl

            font-bold
            "
          >

            After Analytica

          </h3>

          <div className="mt-8 space-y-5">

            {solutions.map((solution)=>(

              <div
                key={solution}

                className="
                rounded-xl

                bg-blue-500/10

                p-4
                "
              >

                {solution}

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>

  );

}