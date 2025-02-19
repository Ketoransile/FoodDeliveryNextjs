"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ActiveLink({ href, children }: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`pb-1 transition-colors ${
        isActive ? "text-buttonbg font-bold" : "text-white"
      }`}
    >
      {children}
    </Link>
  );
}
