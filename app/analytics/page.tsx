import { DashboardShell } from "@/components/layout/shell/DashboardShell";

import { RevenueChart } from "@/components/dashboard/RevenueChart";

import {
  revenueData,
  customerGrowth,
  orderData,
} from "@/data/analytics";

export default function AnalyticsPage() {
  return (
    <DashboardShell>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold">
            Analytics
          </h1>

          <p className="text-slate-500">
            Monitor trends and business insights
          </p>

        </div>

        <section className="grid gap-6 xl:grid-cols-2">

          <RevenueChart
            data={revenueData}
            dataKey="revenue"
            title="Revenue"
            subtitle="Growth trend"
          />

          <RevenueChart
            data={customerGrowth}
            dataKey="customers"
            title="Customers"
            subtitle="Acquisition trend"
          />

          <RevenueChart
            data={orderData}
            dataKey="orders"
            title="Orders"
            subtitle="Order volume"
          />

        </section>

      </div>

    </DashboardShell>
  );
}