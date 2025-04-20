
import { BlogCard } from "@/components/blog-card";
import { Header } from "@/components/header";
import { MathBlock } from "@/components/ui/math-block";
import { YouTubeEmbed } from "@/components/ui/youtube-embed";
import { PDFPreview } from "@/components/ui/pdf-preview";

const PLACEHOLDER_POSTS = [
  {
    title: "Understanding Category Theory in TypeScript",
    excerpt: "Exploring functional programming concepts and category theory implementation in TypeScript...",
    date: "2024-04-20",
    readingTime: "5 min read",
  },
  {
    title: "Advanced React Patterns with Examples",
    excerpt: "Deep dive into advanced React patterns including compound components and control props...",
    date: "2024-04-19",
    readingTime: "8 min read",
  },
  {
    title: "The Math Behind Neural Networks",
    excerpt: "Understanding the mathematical foundations of neural networks and deep learning...",
    date: "2024-04-18",
    readingTime: "10 min read",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container py-12">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_POSTS.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
        
        {/* Example components usage */}
        <div className="mt-12 space-y-8">
          <section className="p-6 rounded-xl bg-card">
            <h2 className="text-xl font-semibold mb-4">Math Example</h2>
            <MathBlock math="\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}" />
          </section>

          <section className="p-6 rounded-xl bg-card">
            <h2 className="text-xl font-semibold mb-4">YouTube Example</h2>
            <YouTubeEmbed videoId="dQw4w9WgXcQ" />
          </section>

          <section className="p-6 rounded-xl bg-card">
            <h2 className="text-xl font-semibold mb-4">PDF Example</h2>
            <PDFPreview 
              url="https://example.com/sample.pdf"
              title="Technical Whitepaper.pdf"
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
