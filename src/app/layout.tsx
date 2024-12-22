/*
Metadata is the title and meta tags

navbar/footer is often perferred to be in layout.tsx
as it atuomatically wraps around the content for
every page.
*/
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

/*The two objects below are the fonts that are 
being used. Configures specific google fonts with
CSS Variable: Defines a CSS variable for each font 
making it reusable in styles
Subsets: Specifies language subsets (like "latin") 
to optimize font loading*/
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//This is the head information otherwise known as the site tab name.
export const metadata: Metadata = {
  title: "Practice Hub",
};
/**
 * children: A special prop that represents the content
 * of the current page. This allows the layout to wrap
 * around the actual page components.
 * 
 * <body> Applies fonts configured earlier via css
 * variables. Adds the antialiased class from tailwind.css
 * to improve text rendering.
 * 
 * {children} Inserts the content of the currently rendered
 * page inside the layout.
 */
export default function RootLayout({children}:{ children: React.ReactNode}) {
  return (
    <html lang="en">
      {/* <header className="p-4 bg-blue-500 text-white">My App Header</header> */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
      {/* <footer className="p-4 bg-gray-200 text-center">© 2024 My App</footer> */}
    </html>
  );
}
