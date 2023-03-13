import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 px-5 py-3 flex justify-between items-center mb-6">
      <h2>Contact Manager</h2>
      <ul className="flex gap-4 items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
        <li className="bg-gray-400 px-3 py-3 rounded-lg hover:bg-gray-500">
          <Link href="/add-contact">Add Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
