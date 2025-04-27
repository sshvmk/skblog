
import { Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

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
  }
];

export function Footer() {
  return (
    <footer className="py-6 border-t border-border/50 mt-auto">
      <div className="container flex items-center justify-center space-x-4">
        {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
          <Button
            key={label}
            variant="ghost"
            size="icon"
            asChild
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          </Button>
        ))}
      </div>
    </footer>
  );
}
