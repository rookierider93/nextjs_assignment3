import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-transparent">
        <ul className="flex pl-10 pt-10">
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="/">
              Home
            </a>
          </li>
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="/users">
              Users
            </a>
          </li>
        </ul>
        <div className="text-center mt-10">{children}</div>
      </body>
    </html>
  );
}
