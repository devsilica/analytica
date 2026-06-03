import { DashboardShell } from "@/components/layout/shell/DashboardShell";

import { CustomerTable } from "@/components/dashboard/CustomerTable";

import {
  Users,
  UserPlus,
  TrendingUp,
  Globe,
} from "lucide-react";

const stats = [

  {
    title: "Total Customers",

    value: "8,421",

    icon: Users,
  },

  {
    title: "New Customers",

    value: "342",

    icon: UserPlus,
  },

  {
    title: "Growth",

    value: "+18%",

    icon: TrendingUp,
  },

  {
    title: "Countries",

    value: "42",

    icon: Globe,
  },

];

export default function CustomersPage() {
  return (

    <DashboardShell>

      <div className="space-y-8">

        {/* Header */}

        <div>

          <h1 className="text-3xl font-bold">

            Customers

          </h1>

          <p className="text-slate-500">

            Customer management and analytics

          </p>

        </div>

        {/* Stats */}

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {

            const Icon =
              item.icon;

            return (

              <div
                key={item.title}
                className="
                  rounded-3xl
                  border border-slate-800
                  bg-slate-900
                  p-6
                "
              >

                <div className="flex items-center justify-between">

                  <span className="text-slate-500">

                    {item.title}

                  </span>

                  <Icon size={18} />

                </div>

                <h2 className="mt-6 text-4xl font-bold">

                  {item.value}

                </h2>

              </div>

            );

          })}

        </section>

        {/* Table */}

        <section>

          <CustomerTable />

        </section>

      </div>

    </DashboardShell>

  );
}