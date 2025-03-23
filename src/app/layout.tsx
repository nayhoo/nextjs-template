import "@/styles/globals.css";
import "@nayhoo/ui/theme/index.css";
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
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
