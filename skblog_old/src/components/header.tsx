
export function Header() {
  return (
    <header className="py-6 border-b border-border/50">
      <div className="container flex items-center justify-between">
        <a href="/" className="text-xl font-extrabold tracking-tight z-10">
        sk
        </a>
        <nav className="flex items-center space-x-6 text-sm z-10">
          <a href="/projects" className="transition-colors z-10 hover:text-yellow-400">projects</a>
          <a href="/about" className="transition-colors z-10 hover:text-cyan-400">about</a>
        </nav>
      </div>
    </header>
  );
}
