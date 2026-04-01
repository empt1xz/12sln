"use client";

import { useState } from "react";
import Style from "./header.module.css";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);


  return (
    <header className={Style.header}>
      <img src="/logotipo.png" alt="" />

      <button className={Style.menuBtn} onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className={`${Style.nav} ${open ? Style.active : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link href="/" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link href="privacy" onClick={() => setOpen(false)}>
          Privacy
        </Link>
      </nav>

      
    </header>
  );
}
