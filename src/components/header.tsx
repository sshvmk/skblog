
export function Header() {
  return (
    <header className="py-6 border-b border-border/50">
      <div className="container flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight z-10">
          Rohit Das
        </a>
        <nav className="flex items-center space-x-6 text-sm z-10">
          <a href="/projects" className="hover:text-primary transition-colors z-10">Projects</a>
          <a href="/about" className="hover:text-primary transition-colors z-10">About</a>
        </nav>
      </div>
    </header>
  );
}
