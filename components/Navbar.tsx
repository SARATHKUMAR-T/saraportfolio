"use client";

import Link from "next/link";
import {
  Contact,
  FolderKanban,
  Home,
  Menu,
  Target,
  Webhook,
} from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const routes = [
    {
      href: "/",
      label: "Home",
      icon: <Home className="mr-1 w-6  h-6 text-yellow-400" />,
    },
    {
      href: "/#about",
      label: "About",
      icon: <Contact className="mr-1 w-6  h-6 text-yellow-400" />,
    },
    {
      href: "/#skills",
      label: "Skills",
      icon: <Target className="mr-1 w-6  h-6 text-yellow-400" />,
    },
    {
      href: "/#projects",
      label: "Projects",
      icon: <FolderKanban className="mr-1 w-6  h-6 text-yellow-400" />,
    },
    {
      href: "/#contact",
      label: "Hire Me",
      icon: <Webhook className="mr-1 w-6  h-6 text-yellow-400" />,
    },
  ];

  return (
    <header className="fixed bg-inherit z-50 w-full sm:flex sm:justify-between  px-4 ">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 md:hidden w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col text-white gap-4">
                {routes.map((route, i) => (
                  <Link
                    key={i}
                    href={route.href}
                    className="block px-2 py-1 text-lg text-white"
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <nav className="mx-6 w-full  items-center space-x-4 lg:space-x-6 hidden   md:flex justify-between mt-2">
          <Link href="/">Sarath.dev</Link>
          <div>
            {routes.map((route, i) => (
              <Button asChild key={i} variant="ghost">
                {
                  <Link href={route.href} className="text-sm font-semibold">
                    {route.icon}
                    {route.label}
                  </Link>
                }
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
