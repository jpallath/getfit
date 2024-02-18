"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  const links = [
    { name: "Today", href: "/today" },
    {
      name: "History",
      href: "/history",
    },
    { name: "Routines", href: "/routines" },
    { name: "Me RN", href: "/mern" },
  ];

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-zinc-900 bg-amber-100 dark:bg-amber-400 grow transition-all text-center py-4 transition-all"
                : "text-white bg-fuchsia-300 dark:bg-fuchsia-950 grow transition-all text-center py-4 transition-all"
            }
            `}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export const Navigation = () => {
  return (
    <nav className="absolute w-full flex justify-between items-center px-8 bottom-0 bg-fuchsia-300 dark:bg-fuchsia-950 rounded-t-xl z-10 transition-all">
      <NavItems />
    </nav>
  );
};
