import "../../styles/globals.css";
import Navbar from "../Component/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <section className="p-4">
          <Navbar />
          <p></p>
          {children}
        </section>
      </body>
    </html>
  );
}
