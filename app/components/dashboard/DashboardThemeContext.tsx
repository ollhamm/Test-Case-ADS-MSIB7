"use client";
import React, { createContext, useContext, useState } from "react";

interface DashboardThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const DashboardThemeContext = createContext<
  DashboardThemeContextType | undefined
>(undefined);

export const DashboardThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DashboardThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DashboardThemeContext.Provider>
  );
};

export const useDashboardTheme = () => {
  const context = useContext(DashboardThemeContext);
  if (!context) {
    throw new Error(
      "useDashboardTheme must be used within a DashboardThemeProvider"
    );
  }
  return context;
};
