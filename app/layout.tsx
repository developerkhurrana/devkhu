import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),

  title: "developerKhurrana",
  authors: {
    name: "Kshitij Khurrana",
  },

  description:
    "Hi, I'm Kshitij Khurrana, A UX Detective, A UI Artist, A Continuous Learner",
  openGraph: {
    title: "developerKhurrana",
    description:
      "Hi, I'm Kshitij Khurrana, A UX Detective, A UI Artist, A Continuous Learner",
    url: "http://localhost:3000/",
    siteName: "developerKhurrana",
    images: "/site.png",
    type: "website",
  },
  keywords: [
    "web development",
    "software development",
    "coding tutorials",
    "programming tips",
    "web development resources",
    "web development tutorials",
    "front-end development",
    "back-end development",
    "full-stack development",
    "web development courses",
    "web development projects",
    "coding challenges",
    "web development tools",
    "web development technologies",
    "web development trends",
    "web development community",
    "web development blog",
    "web development articles",
    "web development tips",
    "web development tricks",
    "web development best practices",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
