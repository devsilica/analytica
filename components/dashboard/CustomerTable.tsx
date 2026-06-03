"use client";

import {
  useMemo,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  Plus,
} from "lucide-react";

import { toast } from "sonner";

import { useCustomers } from "@/hooks/useCustomers";

import { Skeleton } from "@/components/shared/Skeleton";

import { CustomerDrawer } from "./CustomerDrawer";

import { CreateCustomerModal } from "./CreateCustomerModal";

const ITEMS_PER_PAGE = 8;

export function CustomerTable() {

  const [search, setSearch] =
    useState("");

  const [statusFilter,
    setStatusFilter] =
    useState("All");

  const [sortBy,
    setSortBy] =
    useState("name");

  const [page,
    setPage] =
    useState(1);

  const [drawerOpen,
    setDrawerOpen] =
    useState(false);

  const [selectedCustomer,
    setSelectedCustomer] =
    useState<any>(null);

  const [createOpen,
    setCreateOpen] =
    useState(false);

  const {

    customers: customerData,

    isLoading,

    createMutation,

    deleteMutation,

  } = useCustomers();

  const filteredCustomers =
    useMemo(() => {

      return customerData

        .filter((customer) =>

          customer.name

            .toLowerCase()

            .includes(

              search.toLowerCase()

            )

        )

        .filter((customer) =>

          statusFilter === "All"

            ? true

            : customer.status ===
              statusFilter

        )

        .sort((a, b) => {

          if (
            sortBy ===
            "revenue"
          ) {

            return (
              b.revenue -
              a.revenue
            );

          }

          return a.name.localeCompare(
            b.name
          );

        });

    }, [

      customerData,

      search,

      statusFilter,

      sortBy,

    ]);

  const paginatedCustomers =
    filteredCustomers.slice(

      (page - 1)
      * ITEMS_PER_PAGE,

      page *
      ITEMS_PER_PAGE

    );

  const totalPages =
    Math.ceil(

      filteredCustomers.length /
      ITEMS_PER_PAGE

    );

  if (isLoading) {

    return (

      <div className="space-y-4">

        <Skeleton className="h-14 w-full" />

        <Skeleton className="h-14 w-full" />

        <Skeleton className="h-14 w-full" />

      </div>

    );

  }

  if (!filteredCustomers.length) {

    return (

      <motion.div

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        className="
        rounded-3xl
        border border-slate-800
        bg-slate-900
        p-12
        text-center
        "
      >

        <h3 className="text-xl font-semibold">

          No customers found

        </h3>

        <p className="mt-2 text-slate-500">

          Try adjusting filters

        </p>

      </motion.div>

    );

  }

  return (

    <>

      <motion.div

        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        className="
        rounded-3xl

        border border-slate-800/70

        bg-slate-900/95

        backdrop-blur-xl

        shadow-xl

        p-6
        "
      >

        <motion.div

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: .15,
          }}

          className="
          mb-6

          flex flex-col gap-4

          lg:flex-row

          lg:items-center

          lg:justify-between
          "
        >

          <div
            className="
            flex flex-col gap-3

            sm:flex-row

            sm:flex-wrap
            "
          >

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value
                )
              }
              className="
              rounded-xl

              border border-slate-700

              bg-slate-950

              px-4 py-2
              "
            >

              <option value="name">

                Name

              </option>

              <option value="revenue">

                Revenue

              </option>

            </select>

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(
                  e.target.value
                )
              }
              className="
              rounded-xl
              border border-slate-700
              bg-slate-950
              px-4 py-2
              "
            >

              <option>All</option>

              <option>Active</option>

              <option>Pending</option>

              <option>Inactive</option>

            </select>

            <input
              placeholder="Search..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
              rounded-xl
              border border-slate-700
              bg-slate-950
              px-4 py-2
              "
            />

          </div>

          <motion.button

            whileHover={{
              scale: 1.03,
            }}

            whileTap={{
              scale: .96,
            }}

            onClick={() =>
              setCreateOpen(true)
            }

            className="
            flex items-center
            gap-2

            rounded-xl

            bg-blue-600

            px-4 py-2
            "
          >

            <Plus size={16} />

            Add Customer

          </motion.button>

        </motion.div>

        <div className="overflow-x-auto">

          <table
            className="
            min-w-[900px]

            w-full

            text-sm
            "
          >

            <thead>

              <tr
                className="
                border-b border-slate-800
                "
              >

                {[
                  "Name",
                  "Email",
                  "Revenue",
                  "Country",
                  "Status",
                  "Actions",
                ].map((head) => (

                  <th
                    key={head}
                    className="
                    py-4 text-left
                    "
                  >

                    <div className="flex gap-2">

                      {head}

                      <ArrowUpDown size={14} />

                    </div>

                  </th>

                ))}

              </tr>

            </thead>

            <tbody>

              <AnimatePresence>

                {paginatedCustomers.map(
                  (
                    customer,
                    index
                  ) => (

                    <motion.tr

                      key={customer.id}

                      initial={{
                        opacity: 0,
                        x: -20,
                      }}

                      animate={{
                        opacity: 1,
                        x: 0,
                      }}

                      exit={{
                        opacity: 0,
                      }}

                      transition={{
                        delay:
                        index * .04,
                      }}

                      whileHover={{
                        backgroundColor:
                        "rgba(30,41,59,.35)",
                      }}

                      className="
                      border-b
                      border-slate-800
                      "
                    >

                      <td className="py-4">

                        {customer.name}

                      </td>

                      <td>

                        {customer.email}

                      </td>

                      <td>

                        $
                        {customer.revenue.toLocaleString()}

                      </td>

                      <td>

                        {customer.country}

                      </td>

                      <td>

                        <span
                          className="
                          rounded-full
                          bg-slate-800
                          px-3 py-1
                          text-xs
                          "
                        >

                          {customer.status}

                        </span>

                      </td>

                      <td>

                        <div className="flex gap-2">

                          <motion.button

                            whileHover={{
                              scale: 1.05,
                            }}

                            whileTap={{
                              scale: .95,
                            }}

                            onClick={() => {

                              toast.success(
                                "Customer opened"
                              );

                              setSelectedCustomer(
                                customer
                              );

                              setDrawerOpen(
                                true
                              );

                            }}

                            className="
                            rounded-lg
                            border border-slate-700
                            px-3 py-1
                            "
                          >

                            View

                          </motion.button>

                          <motion.button

                            whileHover={{
                              scale: 1.05,
                            }}

                            whileTap={{
                              scale: .95,
                            }}

                            onClick={() =>

                              deleteMutation.mutate(
                                customer.id
                              )

                            }

                            className="
                            rounded-lg
                            border border-red-700
                            px-3 py-1
                            text-red-400
                            "
                          >

                            Delete

                          </motion.button>

                        </div>

                      </td>

                    </motion.tr>

                  )
                )}

              </AnimatePresence>

            </tbody>

          </table>

        </div>

        <motion.div

          className="
          mt-6

          flex items-center

          justify-between
          "
        >

          <p>

            Page {page}
            {" "}
            of
            {" "}
            {totalPages}

          </p>

          <div className="flex gap-2">

            <button
              disabled={page === 1}
              onClick={() =>

                setPage((p) =>

                  Math.max(
                    p - 1,
                    1
                  )

                )

              }
            >

              <ChevronLeft />

            </button>

            <button
              disabled={
                page === totalPages
              }
              onClick={() =>

                setPage((p) =>

                  Math.min(
                    p + 1,
                    totalPages
                  )

                )

              }
            >

              <ChevronRight />

            </button>

          </div>

        </motion.div>

      </motion.div>

      <CustomerDrawer
        customer={selectedCustomer}
        open={drawerOpen}
        onClose={() =>
          setDrawerOpen(false)
        }
      />

      <CreateCustomerModal
        open={createOpen}
        onClose={() =>
          setCreateOpen(false)
        }
        onSubmit={(data) =>

          createMutation.mutate(
            data
          )

        }
      />

    </>

  );

}