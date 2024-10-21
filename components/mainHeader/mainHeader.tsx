import Link from "next/link";
import React from "react";
import Image from "next/image";
import classes from "./mainHeader.module.css";

import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./mainHeaderBackground";
import NavLink from "./navLink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            alt="A plate with many different foods in it"
            src={logoImg}
            priority
          />
          Next level food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="/meals/share">Share meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
