"use client";

import { store } from "@/redux/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

export default function ProviderClient({ children }) {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </Provider>
    </div>
  );
}
