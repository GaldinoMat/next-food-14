"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

import classes from "./navLink.module.css";

interface INavLink {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: INavLink) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.active} ${classes.link}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
