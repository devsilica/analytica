import "./globals.css";

import { ThemeProvider }
from "@/components/providers/ThemeProvider";

import { QueryProvider }
from "@/components/providers/QueryProvider";

import { Toaster }
from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html
      lang="en"
      suppressHydrationWarning
    >

      <body>

        <ThemeProvider>

          <QueryProvider>

            {children}

            <Toaster
              richColors
              position="top-right"
            />

          </QueryProvider>

        </ThemeProvider>

      </body>

    </html>

  );
}