import { Header } from "../header/Header";

import { Sidebar } from "../sidebar/Sidebar";

export function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
      min-h-screen
      bg-slate-950
      text-white
      "
    >
      <Sidebar />

      <div
        className="
        lg:ml-72
        min-h-screen
        transition-all
        "
      >
        <Header />

        <main
          className="
          mx-auto
          max-w-[1600px]
          px-6
          pb-6
          pt-10
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}