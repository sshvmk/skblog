
export function Header() {
  return (
    <header className="py-6 border-b border-border/50">
      <div className="container flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight">
          Rohit Das
        </a>
        <nav className="flex items-center space-x-6 text-sm">
          <a href="/projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="/about" className="hover:text-primary transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
}
