
import { Header } from "@/components/header";
import { BlogCard } from "@/components/blog-card";

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
      </main>
    </div>
  );
};

export default Index;
