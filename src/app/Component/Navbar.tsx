import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between w-full">
        <ul className="flex justify-between w-full">
          <li className="text-red-500">
            <Link href="/">Bharat</Link>
          </li>
          <li>
            <p>dark</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
