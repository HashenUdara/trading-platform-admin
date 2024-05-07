import Link from "next/link";
import React from "react";
import { navItems } from "../data/nav-item";

const Nav = () => {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {navItems.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
