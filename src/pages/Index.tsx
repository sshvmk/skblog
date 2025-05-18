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
      <main className="container max-w-3xl py-12 flex-grow">
        {/* Intro Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              hi, i'm shivam
            </h1>
            <ThemeToggle />
          </div>
          <p className="text-2xl text-foreground/90 leading-relaxed">
            i write about AI/ML, math & everything in technology that piques my interest.
          </p>
          <div className="mt-6 space-y-3">
            <p className="text-base">
              random thoughts on my <a className='font-bold text-white hover:text-orange-400 transition-colors' href='https://sshvmk.bearblog.dev/'>bear blog</a>
            </p>
            <p className="text-base">
              raw notes on my <a className='font-bold text-white hover:text-orange-400 transition-colors' href='https://sshvmk.github.io/notes/'>notes site</a>
            </p>
            <p className="text-base">
              come say hi to me on <a className='font-bold text-white hover:text-orange-400 transition-colors' href='https://x.com/sshvmk'>X</a>
            </p>
          </div>
        </section>

        {/* Blog List */}
        <section className="mt-2">
          {/* <div className="flex items-center gap-1 mb-8">
            <a
              href="https://sshvmk.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 px-3 py-3 text-sm font-bold text-white hover:from-pink-600 hover:via-orange-600 hover:to-yellow-600 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              Subscribe to my monthly Substack
            </a>
          </div> */}
          <h2 className="text-3xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">posts</h2>
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
