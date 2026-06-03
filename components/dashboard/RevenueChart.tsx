"use client";

import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface Props {
  data: any[];
  dataKey: string;
  title: string;
  subtitle: string;
}

export function RevenueChart({
  data,
  dataKey,
  title,
  subtitle,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
      rounded-3xl
      border border-slate-800
      bg-slate-900
      p-8
      "
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <p className="text-sm text-slate-500">
            {subtitle}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 px-3 py-2 text-sm">
          +18.4%
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>
            <CartesianGrid
              stroke="#1E293B"
              vertical={false}
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B" }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748B" }}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey={dataKey}
              stroke="#3B82F6"
              strokeWidth={4}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}