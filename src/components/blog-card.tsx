
interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
}

export function BlogCard({ title, excerpt, date, readingTime }: BlogCardProps) {
  return (
    <article className="group">
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground flex items-center space-x-2">
          <time dateTime={date}>{date}</time>
          <span>•</span>
          <span>{readingTime}</span>
        </div>
        <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h2>
        <p className="text-muted-foreground">{excerpt}</p>
      </div>
    </article>
  );
}
