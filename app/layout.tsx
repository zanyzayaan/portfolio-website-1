import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";

export const metadata: Metadata = {
  title: "Philip Traylen | Creative Technologist",
  description:
    "Portfolio of Philip Traylen, a creative technologist building expressive digital experiences where visual ideas become interactive.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
