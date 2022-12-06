import { ReactNode } from "react";

import "../styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body className="font-poppins">{children}</body>
    </html>
  );
}
