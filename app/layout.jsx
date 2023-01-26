import "./globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variables: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${montserrat.classname} bg-black text-white mx-4 my-4`}>
        {/* <nav>
          <h1>Logo</h1>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
          </ul>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
