"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

interface Customer {
  id: number;
  name: string;
  email: string;
  revenue: number;
  country: string;
  status: string;
}

interface Props {
  customer: Customer | null;
  open: boolean;
  onClose: () => void;
}

export function CustomerDrawer({
  customer,
  open,
  onClose,
}: Props) {

  return (

    <AnimatePresence>

      {open && customer && (

        <>

          {/* Backdrop */}

          <motion.div

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            onClick={onClose}

            className="
            fixed inset-0

            z-40

            bg-black/50

            backdrop-blur-sm
            "
          />

          {/* Drawer */}

          <motion.div

            initial={{
              x: 450,
            }}

            animate={{
              x: 0,
            }}

            exit={{
              x: 450,
            }}

            transition={{
              type: "spring",
              damping: 28,
              stiffness: 250,
            }}

            className="
            fixed

            right-0
            top-0

            z-50

            h-screen

            w-full
            sm:w-[420px]

            border-l
            border-slate-800/70

            bg-slate-950/95

            backdrop-blur-xl

            shadow-2xl

            p-6
            "
          >

            {/* Header */}

            <div
              className="
              flex items-center
              justify-between
              "
            >

              <motion.h2

                initial={{
                  opacity: 0,
                  y: -10,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                className="
                text-2xl
                font-bold
                "
              >

                Customer Details

              </motion.h2>

              <motion.button

                whileHover={{
                  scale: 1.08,
                }}

                whileTap={{
                  scale: .95,
                }}

                onClick={onClose}

                className="
                rounded-xl

                border border-slate-700

                px-4 py-2

                hover:bg-slate-800
                "
              >

                Close

              </motion.button>

            </div>

            {/* Content */}

            <div className="mt-10 space-y-7">

              {[
                {
                  label: "Name",
                  value: customer.name,
                },

                {
                  label: "Email",
                  value: customer.email,
                },

                {
                  label: "Revenue",
                  value:
                    "$" +
                    customer.revenue.toLocaleString(),
                },

                {
                  label: "Country",
                  value: customer.country,
                },

                {
                  label: "Status",
                  value: customer.status,
                },

              ].map(
                (
                  item,
                  index
                ) => (

                  <motion.div

                    key={item.label}

                    initial={{
                      opacity: 0,
                      x: 20,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                    }}

                    transition={{
                      delay:
                        index * 0.08,
                    }}

                    className="
                    rounded-2xl

                    border border-slate-800

                    bg-slate-900/60

                    p-4
                    "
                  >

                    <p
                      className="
                      text-sm

                      text-slate-500
                      "
                    >

                      {item.label}

                    </p>

                    <h3
                      className="
                      mt-2

                      text-lg

                      font-medium
                      "
                    >

                      {item.value}

                    </h3>

                  </motion.div>

                )
              )}

            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>

  );

}