import Link from "next/link";
import { getHeader } from "@/lib/sanity.fetch";
import Image from "next/image";
type NavigationItem = {
  _key: string;
  label: string;
  href: {
    href: string;
  };
};

export default async function Header() {
  const headerData = await getHeader();

  return (
    <header>
      <nav className="flex justify-between items-center pt-5 mx-6 md:mx-20 pb-2 font-serif border-b border-dashed">
        {/* Logo */}
        {/* <h1 className="text-4xl">
          Jack<span className="text-pink-700">.</span>
        </h1> */}
        <Image src={headerData.logoUrl} width={50} height={20} alt="logo" />

        {/* Desktop Menu */}

        <div className="hidden md:flex gap-x-5">
          {headerData.navigation.map((value: NavigationItem, index: number) => (
            <Link key={index} href={value.href}>
              {value.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
