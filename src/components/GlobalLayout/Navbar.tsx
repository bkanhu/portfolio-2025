"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Works",
    path: "/works",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setOpen(!open);
  };
  const isActive = (path: string): boolean => pathname === path;
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 mx-auto max-w-7xl px-4 py-4 font-vietnam text-woodsmoke-100 backdrop-blur-md md:px-20 lg:px-40">
      <div className="flex justify-between">
        <Link
          href="/"
          aria-label="Navigate to home page"
          className="flex items-center gap-4"
        >
          <span className="">B Kanhu</span>
        </Link>
        <div className="hidden lg:block">
          <ul className="flex items-center justify-center space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  aria-label={`Navigate to ${link.name}`}
                  className={cn(
                    "px-2 py-2 text-sm font-medium uppercase text-woodsmoke-300 hover:text-brand-500",
                    isActive(link.path) &&
                      "text-woodsmoke-100 underline underline-offset-4 hover:text-brand-500"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block md:hidden">
          <Sheet open={open} onOpenChange={toggleNavbar}>
            <SheetTrigger className="text-white">
              <Menu />
            </SheetTrigger>
            <SheetContent className="border-woodsmoke-950 bg-woodsmoke-950 text-woodsmoke-50">
              <ul className="flex flex-col items-start justify-center space-y-3 py-8">
                {navLinks.map((link, index) => (
                  <li className="w-full" key={index}>
                    <Link
                      href={link.path}
                      aria-label={`Navigate to ${link.name}`}
                      className={cn(
                        "flex w-full px-2 py-2 text-sm font-medium uppercase text-woodsmoke-300 hover:text-brand-500",
                        isActive(link.path) &&
                          "rounded-md bg-woodsmoke-800 text-woodsmoke-100 underline underline-offset-4 hover:text-woodsmoke-600"
                      )}
                      onClick={toggleNavbar}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
