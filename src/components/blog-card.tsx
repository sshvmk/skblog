
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  slug?: string;
}

export function BlogCard({ title, excerpt, date, readingTime, slug }: BlogCardProps) {
  // Generate a slug from the title if not provided
  const postSlug = slug || title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  
  return (
    <Link to={`/blog/${postSlug}`} className="block">
      <article className="group hover:bg-card/50 p-4 -mx-4 rounded-lg transition-colors">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h2>
          <div className="text-sm text-muted-foreground flex items-center space-x-2">
            <time dateTime={date}>{date}</time>
            <span>•</span>
            <span>{readingTime}</span>
          </div>
          <p className="text-muted-foreground">{excerpt}</p>
        </div>
      </article>
    </Link>
  );
}
