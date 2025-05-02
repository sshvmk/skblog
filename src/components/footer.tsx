import { Twitter, Github, Linkedin, Home, FolderKanban, User, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

const SOCIAL_LINKS = [
  {
    icon: FaXTwitter,
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
    icon: TbBrandLeetcode,
    href: "https://www.leetcode.com/sshvmk/",
    label: "Leetcode"
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
      flex items-center justify-center /* Base flex properties */
      fixed bottom-4 left-1/2 -translate-x-1/2 z-40 /* Centered, fixed bottom */
      p-2 space-x-1 /* Consistent padding and spacing */
      border border-border/50 rounded-full /* Consistent border and rounding */
      bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
      max-w-fit /* Consistent max-width */
    ">
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
      
      {/* Divider always visible */}
      <div className="h-6 w-px bg-border/50"></div>
      
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
