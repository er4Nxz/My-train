"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ item }) => {
  const pathName = usePathname();
  return (
    <>
      <li>
        <Link
          className={pathName === item.link ? "text-blue-500" : "text-black"}
          href={item.link}
        >
          {item.title}
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
