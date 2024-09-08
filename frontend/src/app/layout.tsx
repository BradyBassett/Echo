import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Echo - Chat App",
  description: "Simple real time communication app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
