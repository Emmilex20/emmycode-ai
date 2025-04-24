"use client";

import { useState, useEffect } from "react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Or a loading state

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            emmy<span className="text-primary">flex</span>.ai
          </span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-4 md:gap-5 absolute md:static top-full left-0 w-full md:w-auto bg-background md:bg-transparent px-4 py-4 md:p-0 border-t md:border-0 border-border transition-all duration-300`}
        >
          {isSignedIn ? (
            <>
              <Link href="/" className="flex items-center gap-1.5 text-sm hover:text-primary">
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link href="/generate-program" className="flex items-center gap-1.5 text-sm hover:text-primary">
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              <Link href="/profile" className="flex items-center gap-1.5 text-sm hover:text-primary">
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>

              <Button
                asChild
                variant="outline"
                className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>

              <div className="md:hidden">
                <UserButton />
              </div>
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>

        {isSignedIn && <div className="hidden md:block"><UserButton /></div>}
      </div>
    </header>
  );
};

export default Navbar;
