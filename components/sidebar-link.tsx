"use client";

import { PlayIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  name: string;
  path: string;
};

const SidebarItem = ({ name, path }: Props) => {
  const active = usePathname() === path;

  return (
    <Link href={path}>
      <p
        className={`flex items-center gap-x-1 my-4 p-2 ${
          active ? "text-white bg-primary rounded-md" : ""
        }`}
      >
        <PlayIcon className="w-4 h-4" /> {name}
      </p>
    </Link>
  );
};

export default SidebarItem;
