import "./globals.css";

import type {
  Metadata,
} from "next";

import {
  ThemeProvider,
} from "@/components/providers/ThemeProvider";

import {
  QueryProvider,
} from "@/components/providers/QueryProvider";

import {
  Toaster,
} from "sonner";

export const metadata: Metadata = {

  title: {

    default:
      "Analytica Dashboard",

    template:
      "%s | Analytica",

  },

  description:
    "Modern analytics platform",

  icons: {

    icon: [

      {

        url:
          "/analytica.png",

        sizes:
          "32x32",

        type:
          "image/png",

      },

      {

        url:
          "/analytica.png",

        sizes:
          "192x192",

        type:
          "image/png",

      },

      {

        url:
          "/analytica.png",

        sizes:
          "512x512",

        type:
          "image/png",

      },

    ],

    apple: [

      {

        url:
          "/analytica.png",

        sizes:
          "180x180",

        type:
          "image/png",

      },

    ],

  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children:
    React.ReactNode;
}>) {

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