import { BlogCard } from "@/components/blog-card";

const PLACEHOLDER_POSTS = [
  {
    title: "Understanding Category Theory in TypeScript",
    excerpt: "Exploring functional programming concepts and category theory implementation in TypeScript...",
    date: "2024-04-20",
    readingTime: "5 min read",
    slug: "understanding-category-theory"
  },
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
      <main className="container max-w-3xl py-10 flex-grow">
        {/* Intro Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            hi, i'm shivam
          </h1>
          <p className="text-lg text-muted-foreground">
            i write about AI/ML, math and everything in technology that piques my interest.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
          find my thoughts on random things on my <a className='font-bold text-white' href='https://sshvmk.bearblog.dev/'>bear blog</a>
          </p>
          <p className="text-lg text-muted-foreground">
          i also post my raw notes on my <a className='font-bold text-white' href='https://sshvmk.github.io/notes/'>notes site</a>
          </p>
        </section>

        {/* Blog List */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-5">posts</h2>
          <div className="space-y-4">
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
