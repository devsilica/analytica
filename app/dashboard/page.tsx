import { DashboardShell } from "@/components/layout/shell/DashboardShell";

import { OverviewGrid } from "@/components/dashboard/OverviewGrid";

import { RevenueChart } from "@/components/dashboard/RevenueChart";

import { RecentActivity } from "@/components/dashboard/RecentActivity";

import { RevenueSources } from "@/components/dashboard/RevenueSources";

import { CustomerTable } from "@/components/dashboard/CustomerTable";

import { revenueData } from "@/data/analytics";

export default function DashboardPage() {
  return (

    <DashboardShell>

      <div className="space-y-8">

        <OverviewGrid />

        <section className="grid gap-6 xl:grid-cols-3">

          <div className="xl:col-span-2">

            <RevenueChart
              data={revenueData}
              dataKey="revenue"
              title="Revenue Overview"
              subtitle="Last 6 months performance"
            />

          </div>

          <RecentActivity />

        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="xl:col-span-3">

            <RevenueSources />

          </div>

          <div
            className="
              rounded-3xl
              border border-slate-800
              bg-slate-900/80
              backdrop-blur-sm
              p-6
            "
          >

            <div>

              <h3 className="text-base font-semibold">

                Conversion Rate

              </h3>

              <p className="text-sm text-slate-500">

                Sales conversion metrics

              </p>

            </div>

            <div className="mt-8">

              <h2 className="text-5xl font-bold">

                4.8%

              </h2>

              <p className="mt-3 text-emerald-400">

                +0.8% from last month

              </p>

            </div>

          </div>

        </section>

        <section className="pt-6">

          <CustomerTable />

        </section>

      </div>

    </DashboardShell>

  );
}