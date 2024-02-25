"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-fit mx-auto p-0 z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col gap-3">
            <HoveredLink href={"/"}>All Courses</HoveredLink>
            <HoveredLink href={"/"}>Basic Music Theory</HoveredLink>
            <HoveredLink href={"/"}>Advanced Composition</HoveredLink>
            <HoveredLink href={"/"}>Songwriting</HoveredLink>
            <HoveredLink href={"/"}>Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
