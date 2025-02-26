"use client";

import { ThemeProvider } from "@nayhoo/ui/providers";
import * as React from "react";

type AppProviderProps = {
  children: React.ReactNode;
  theme?: "light" | "dark";
};

export const AppProvider = ({ children, theme }: AppProviderProps) => {
  return <ThemeProvider themeMode={theme}>{children}</ThemeProvider>;
};
