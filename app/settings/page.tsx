"use client";

import { DashboardShell } from "@/components/layout/shell/DashboardShell";

import {
  Bell,
  Shield,
  User,
  Moon,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";

import { motion } from "framer-motion";

export default function SettingsPage() {

  const [emailNotif,setEmailNotif] =
    useState(true);

  const [darkMode,setDarkMode] =
    useState(true);

  const [twoFactor,setTwoFactor] =
    useState(false);

  function Toggle({
    active,
    onClick,
  }: {
    active: boolean;
    onClick: () => void;
  }) {

    return (

      <button

        onClick={onClick}

        className={`
        relative

        h-7
        w-14

        rounded-full

        transition

        ${
          active
            ? "bg-blue-600"
            : "bg-slate-700"
        }
        `}
      >

        <motion.div

          animate={{
            x: active ? 28 : 2,
          }}

          transition={{
            type: "spring",
            stiffness: 350,
          }}

          className="
          absolute

          top-[2px]

          h-6
          w-6

          rounded-full

          bg-white
          "
        />

      </button>

    );

  }

  return (

    <DashboardShell>

      <div className="space-y-8">

        {/* Hero */}

        <motion.section

          initial={{
            opacity:0,
            y:20,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          className="
          overflow-hidden

          rounded-3xl

          border border-slate-800

          bg-gradient-to-r

          from-slate-900

          via-slate-900

          to-blue-950/40

          p-8
          "
        >

          <div className="flex items-center gap-5">

            <div
              className="
              flex

              h-20
              w-20

              items-center

              justify-center

              rounded-full

              bg-blue-600

              text-2xl

              font-bold
              "
            >

              A

            </div>

            <div>

              <h1 className="text-4xl font-bold">

                Settings

              </h1>

              <p className="mt-2 text-slate-400">

                Control preferences and account settings

              </p>

            </div>

          </div>

        </motion.section>

        {/* Cards */}

        <div className="grid gap-6 xl:grid-cols-2">

          {/* Profile */}

          <motion.div

            whileHover={{
              y:-4,
            }}

            className="
            rounded-3xl

            border border-slate-800

            bg-slate-900/95

            p-6
            "
          >

            <div className="flex items-center gap-3">

              <User />

              <h2 className="font-semibold">

                Profile

              </h2>

            </div>

            <div className="mt-6 space-y-4">

              <input

                placeholder="Full name"

                className="
                w-full

                rounded-2xl

                border border-slate-700

                bg-slate-950

                p-4
                "
              />

              <input

                placeholder="Email"

                className="
                w-full

                rounded-2xl

                border border-slate-700

                bg-slate-950

                p-4
                "
              />

            </div>

          </motion.div>

          {/* Notifications */}

          <motion.div

            whileHover={{
              y:-4,
            }}

            className="
            rounded-3xl

            border border-slate-800

            bg-slate-900/95

            p-6
            "
          >

            <div className="flex items-center gap-3">

              <Bell />

              <h2 className="font-semibold">

                Notifications

              </h2>

            </div>

            <div className="mt-8 flex justify-between">

              <div>

                <p>Email Notifications</p>

                <p className="text-sm text-slate-500">

                  Receive activity updates

                </p>

              </div>

              <Toggle

                active={emailNotif}

                onClick={() =>

                  setEmailNotif(
                    !emailNotif
                  )

                }

              />

            </div>

          </motion.div>

          {/* Security */}

          <motion.div

            whileHover={{
              y:-4,
            }}

            className="
            rounded-3xl

            border border-slate-800

            bg-slate-900/95

            p-6
            "
          >

            <div className="flex items-center gap-3">

              <Shield />

              <h2 className="font-semibold">

                Security

              </h2>

            </div>

            <div className="mt-8 flex justify-between">

              <div>

                <p>Two Factor Auth</p>

                <p className="text-sm text-slate-500">

                  Extra account protection

                </p>

              </div>

              <Toggle

                active={twoFactor}

                onClick={() =>

                  setTwoFactor(
                    !twoFactor
                  )

                }

              />

            </div>

          </motion.div>

          {/* Appearance */}

          <motion.div

            whileHover={{
              y:-4,
            }}

            className="
            rounded-3xl

            border border-slate-800

            bg-slate-900/95

            p-6
            "
          >

            <div className="flex items-center gap-3">

              <Moon />

              <h2 className="font-semibold">

                Appearance

              </h2>

            </div>

            <div className="mt-8 flex justify-between">

              <div>

                <p>Dark Mode</p>

                <p className="text-sm text-slate-500">

                  Switch interface theme

                </p>

              </div>

              <Toggle

                active={darkMode}

                onClick={() =>

                  setDarkMode(
                    !darkMode
                  )

                }

              />

            </div>

          </motion.div>

        </div>

      </div>

    </DashboardShell>

  );

}