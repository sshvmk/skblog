
import { Header } from "@/components/header";
import { BlogCard } from "@/components/blog-card";
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
      <main className="container max-w-3xl py-12">
        {/* Intro Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Hi, I'm Rohit Das
          </h1>
          <p className="text-lg text-muted-foreground">
            I write about software engineering, distributed systems, and technology.
            Currently building scalable systems at Tech Corp.
          </p>
        </section>

        {/* Blog List */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-8">Latest Posts</h2>
          <div className="space-y-8">
            {PLACEHOLDER_POSTS.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </section>

        {/* Examples Section */}
        <section className="mt-16 space-y-8 border-t border-border/50 pt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">Examples</h2>
          
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-card">
              <h3 className="text-xl font-semibold mb-4">Math Example</h3>
              <MathBlock math="\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}" />
            </div>

            <div className="p-6 rounded-xl bg-card">
              <h3 className="text-xl font-semibold mb-4">YouTube Example</h3>
              <YouTubeEmbed videoId="dQw4w9WgXcQ" />
            </div>

            <div className="p-6 rounded-xl bg-card">
              <h3 className="text-xl font-semibold mb-4">PDF Example</h3>
              <PDFPreview 
                url="https://example.com/sample.pdf"
                title="Technical Whitepaper.pdf"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
