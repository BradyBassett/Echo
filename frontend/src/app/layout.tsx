import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Echo - Chat App",
  description: "Simple real time communication app",
};

// Arrow function with TypeScript typing
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
