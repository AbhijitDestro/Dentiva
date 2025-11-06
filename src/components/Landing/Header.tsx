"use client"

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

// Smooth scroll utility function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80; // Height of the fixed header
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

function Header() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-4 border-b border-border/50 bg-background/80 backdrop-blur-md h-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src={"/logo.png"} alt="Dentiva Logo" width={32} height={32} className="w-11" />
          <span className="font-semibold text-lg">Dentiva</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            How it Works
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <Button variant={"ghost"} size={"sm"}>
              Login
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button size={"sm"}>Sign Up</Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
}
export default Header;
