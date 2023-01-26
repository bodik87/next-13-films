import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <nav>
          <h1>Logo</h1>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
