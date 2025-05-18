import { BlogCard } from "@/components/blog-card";
import { ThemeToggle } from "@/components/ThemeToggle";

const PLACEHOLDER_POSTS = [
  // {
  //   title: "Understanding Category Theory in TypeScript",
  //   excerpt: "Exploring functional programming concepts and category theory implementation in TypeScript...",
  //   date: "2024-04-20",
  //   readingTime: "5 min read",
  //   slug: "understanding-category-theory"
  // },
  // {
  //   title: "Advanced React Patterns with Examples",
  //   excerpt: "Deep dive into advanced React patterns including compound components and control props...",
  //   date: "2024-04-19",
  //   readingTime: "8 min read",
  //   slug: "advanced-react-patterns"
  // },
  // {
  //   title: "The Math Behind Neural Networks",
  //   excerpt: "Understanding the mathematical foundations of neural networks and deep learning...",
  //   date: "2024-04-18",
  //   readingTime: "10 min read",
  //   slug: "neural-networks-math"
  // },
];

const Index = () => {
  return (
    <>
      {/* <Header /> // Removed */}
      <main className="container max-w-3xl py-6 flex-grow">
        {/* Intro Section */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              hi, i'm shivam
            </h1>
            <ThemeToggle />
          </div>
          <p className="text-xl text-foreground/90 leading-relaxed">
            i write about AI/ML, math & everything in technology that piques my interest.
          </p>
          <div className="mt-4 space-y-3">
            <p className="text-xl">
              random thoughts on my <a className='font-bold text-foreground hover:text-orange-400 transition-colors' href='https://sshvmk.bearblog.dev/'>bear blog</a>
            </p>
            <p className="text-xl">
              raw notes on my <a className='font-bold text-foreground hover:text-orange-400 transition-colors' href='https://sshvmk.github.io/notes/'>notes site</a>
            </p>
          </div>
        </section>

        {/* Blog List */}
        <section className="mt-2">
          <h2 className="text-3xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">posts</h2>
          <h6 className="text-base mb-8 text-muted-foreground"><i>In progress, will be adding soon.....</i></h6>
          <div className="space-y-6">
            {PLACEHOLDER_POSTS.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </section>
      </main>
      {/* <Footer /> // Removed */}
    </>
  );
};

export default Index;
