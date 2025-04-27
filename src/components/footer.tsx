import { Twitter, Github, Linkedin, Home, FolderKanban, User, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const SOCIAL_LINKS = [
  {
    icon: Twitter,
    href: "https://twitter.com/sshvmk",
    label: "Twitter"
  },
  {
    icon: Github,
    href: "https://github.com/sshvmk",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shivamkushwaha27/",
    label: "LinkedIn"
  },
  {
    icon: Mail,
    href: "mailto:shivamkush.2000@gmail.com",
    label: "Email"
  }
];

const PAGE_LINKS = [
  {
    icon: Home,
    href: "/",
    label: "Home"
  },
  {
    icon: FolderKanban,
    href: "/projects",
    label: "Projects"
  },
  {
    icon: User,
    href: "/about",
    label: "About"
  }
];

export function Footer() {
  return (
    <footer className="
      hidden md:flex items-center justify-center /* Added flex properties */
      fixed bottom-4 left-1/2 -translate-x-1/2 z-40 
      py-2 px-3 /* Reduced horizontal padding */
      space-x-1 /* Reduced spacing between items */
      border border-border/50 rounded-full
      bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
      max-w-fit
    ">
      {/* Removed inner container div, applied flex properties directly to footer */}
      {/* Page Links */}
      {PAGE_LINKS.map(({ icon: Icon, href, label }) => (
        <Button
          key={label}
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          asChild
        >
          <Link to={href} aria-label={label}>
            <Icon className="h-4 w-4" />
          </Link>
        </Button>
      ))}
      
      <div className="h-6 w-px bg-border/50"></div> {/* Removed mx */}
      
      {/* Social Links */}
      {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
        <Button
          key={label}
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          asChild
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon className="h-4 w-4" />
          </a>
        </Button>
      ))}
    </footer>
  );
}
