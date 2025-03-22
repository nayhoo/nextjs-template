"use client";

import { ThemeProvider } from "@nayhoo/ui/providers";
import * as React from "react";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
