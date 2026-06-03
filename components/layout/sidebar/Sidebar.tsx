"use client";

import Link from "next/link";

import {
  usePathname,
} from "next/navigation";

import {
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Users,
  Settings,
  Menu,
  X,
  ChevronLeft,
} from "lucide-react";

const links = [

  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },

  {
    name: "Reports",
    href: "/reports",
    icon: FileText,
  },

  {
    name: "Customers",
    href: "/customers",
    icon: Users,
  },

  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },

];

export function Sidebar() {

  const pathname =
    usePathname();

  const [
    collapsed,

    setCollapsed,

  ] = useState(false);

  const [
    mobileOpen,

    setMobileOpen,

  ] = useState(false);

  return (

    <>

      {/* Mobile Trigger */}

      <motion.button

        whileTap={{
          scale: .9,
        }}

        onClick={() =>

          setMobileOpen(
            !mobileOpen
          )

        }

        className="
        fixed

        left-4
        top-4

        z-50

        rounded-xl

        border border-slate-800

        bg-slate-900

        p-2

        lg:hidden
        "
      >

        {mobileOpen

          ? <X size={18} />

          : <Menu size={18} />}

      </motion.button>

      {/* Overlay */}

      <AnimatePresence>

        {mobileOpen && (

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

            onClick={() =>
              setMobileOpen(false)
            }

            className="
            fixed inset-0

            z-30

            bg-black/60

            backdrop-blur-sm

            lg:hidden
            "
          />

        )}

      </AnimatePresence>

      {/* Sidebar */}

      <motion.aside

        initial={{
          x: -100,
          opacity: 0,
        }}

        animate={{

          x: 0,

          opacity: 1,

          width:

            collapsed

              ? 110

              : 290,

        }}

        transition={{
          type: "spring",
          damping: 22,
        }}

        className={`

        fixed

        left-0
        top-0

        z-40

        flex

        h-screen

        flex-col

        border-r

        border-slate-800/60

        bg-slate-950/95

        backdrop-blur-xl

        transition-transform

        duration-300

        ${

          mobileOpen

            ? "translate-x-0"

            : "-translate-x-full lg:translate-x-0"

        }

        `}
      >

        {/* Header */}

        <div

          className="
          relative

          flex

          items-center

          justify-center

          border-b

          border-slate-800/60

          px-4

          py-5
          "
        >

          <motion.div

            animate={{
              scale:
                collapsed
                ? .95
                : 1,
            }}

            className="text-center"
          >

            <h1
              className="
              text-xl

              font-bold
              "
            >

              {collapsed

                ? "A"

                : "Analytica"}

            </h1>

            {!collapsed && (

              <motion.p

                initial={{
                  opacity: 0,
                }}

                animate={{
                  opacity: 1,
                }}

                className="
                text-xs

                text-slate-500
                "
              >

                Analytics Platform

              </motion.p>

            )}

          </motion.div>

          {/* Collapse Button */}

          <motion.button

            whileTap={{
              scale: .9,
            }}

            onClick={() =>

              setCollapsed(
                !collapsed
              )

            }

            className="
            absolute

            -right-5

            top-1/2

            hidden

            h-10
            w-10

            -translate-y-1/2

            items-center

            justify-center

            rounded-full

            border border-slate-800

            bg-slate-900

            shadow-xl

            lg:flex
            "
          >

            <motion.div

              animate={{
                rotate:

                  collapsed

                    ? 180

                    : 0,
              }}

            >

              <ChevronLeft
                size={16}
              />

            </motion.div>

          </motion.button>

        </div>

        {/* Navigation */}

        <nav

          className="
          mt-6

          flex-1

          space-y-2

          px-3
          "
        >

          {links.map(
            (
              link,
              index
            ) => {

              const Icon =
                link.icon;

              const active =
                pathname ===
                link.href;

              return (

                <motion.div

                  key={link.name}

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
                      index * .05,
                  }}
                >

                  <Link

                    href={link.href}

                    className={`

                    flex

                    items-center

                    rounded-2xl

                    py-3

                    transition-all

                    ${

                      collapsed

                        ? "justify-center px-2"

                        : "gap-4 px-4"

                    }

                    ${

                      active

                        ?

                        "bg-blue-600 text-white shadow-lg"

                        :

                        "hover:bg-slate-900"

                    }

                    `}
                  >

                    <motion.div

                      whileHover={{
                        scale: 1.12,
                        rotate: 6,
                      }}

                    >

                      <Icon
                        size={19}
                      />

                    </motion.div>

                    {!collapsed && (

                      <motion.span>

                        {link.name}

                      </motion.span>

                    )}

                  </Link>

                </motion.div>

              );

            }
          )}

        </nav>

        {/* Footer */}

        <div

          className="
          mb-4

          border-t

          border-slate-800/60

          p-3
          "
        >

          <motion.div

            whileHover={{
              scale: 1.02,
            }}

            className="
            flex

            items-center

            gap-3

            rounded-2xl

            bg-slate-900/70

            p-3
            "
          >

            <div

              className="
              flex

              h-10
              w-10

              items-center

              justify-center

              rounded-full

              bg-blue-600
              "
            >

              A

            </div>

            {!collapsed && (

              <div>

                <p>

                  Admin User

                </p>

                <p
                  className="
                  text-xs

                  text-slate-500
                  "
                >

                  Pro Plan

                </p>

              </div>

            )}

          </motion.div>

        </div>

      </motion.aside>

    </>

  );

}