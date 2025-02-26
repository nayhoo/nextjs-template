import { getTheme } from "@/actions/get-theme-action";
import "@/styles/globals.css";
import "@nayhoo/ui/css";
import type { Metadata } from "next";
import { AppProvider } from "./provider";

export const metadata: Metadata = {
  title: "Next.js template",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getTheme();

  return (
    <html lang="en">
      <body>
        <AppProvider theme={theme}>{children}</AppProvider>
      </body>
    </html>
  );
}
