
interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
}

export function BlogCard({ title, excerpt, date, readingTime }: BlogCardProps) {
  return (
    <article className="p-6 rounded-xl bg-card hover:bg-card/80 transition-colors border border-border/50">
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground flex items-center space-x-2">
          <time dateTime={date}>{date}</time>
          <span>•</span>
          <span>{readingTime}</span>
        </div>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{excerpt}</p>
      </div>
    </article>
  );
}
