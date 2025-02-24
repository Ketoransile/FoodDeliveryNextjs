"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserSettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <section className="flex gap-4">
      {/* <div className="backdrop-blur-lg bg-gradient-to-br from-white/10 to-transparent flex flex-col gap-8 border border-slate-700 rounded-xl p-6 w-[250px]">
        <Link
          href="/my-profile"
          className={`${
            pathname === "/my-profile" ? "text-buttonbg font-bold" : ""
          } text-base`}
        >
          My Profile
        </Link>
        <Link
          href="/order-history"
          className={`${
            pathname === "/order-history" ? "text-buttonbg font-bold" : ""
          } text-base`}
        >
          Order History
        </Link>
        <Link href="/my-addresses">
          <p
            className={`${
              pathname === "/my-addresses" ? "text-buttonbg font-bold" : ""
            } text-base`}
          >
            My Address
          </p>
        </Link>
      </div> */}
      {children}
    </section>
  );
}
