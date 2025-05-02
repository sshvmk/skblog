import { Link } from "react-router-dom";
import {
  Home,
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  User,
  Twitter,
  Link as LinkIcon
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  // { href: "/projects", icon: BriefcaseBusiness, label: "Projects" },
  // { href: "/about", icon: User, label: "About" },
  { href: "https://github.com/shivamkushwaha", icon: Github, label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/shivamkushwaha11/", icon: Linkedin, label: "LinkedIn", external: true },
  { href: "https://twitter.com/shivamkushwaha_", icon: FaXTwitter, label: "Twitter", external: true },
  { href: "mailto:shivamkushwaha@proton.me", icon: Mail, label: "Email", external: true },
  { href: "#", icon: TbBrandLeetcode, label: "TbBrandLeetcode", external: true },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="container flex h-14 max-w-lg items-center justify-around">
        {navItems.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "h-10 w-10"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                </a>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "h-10 w-10"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                </Link>
              )}
            </TooltipTrigger>
            <TooltipContent side="top">{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </nav>
  );
} 