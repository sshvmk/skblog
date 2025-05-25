import { BlogCard } from "@/components/blog-card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

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
      <main className="container max-w-[95%] sm:max-w-2xl py-0 flex-grow">
        {/* Intro Section */}
        <section className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            {/* <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              hi, i'm shivam
            </h1> */}
            {/* <ThemeToggle /> */}
          </div>
          {/* <p className="text-2xl text-foreground/90 leading-relaxed"> */}
            {/* i write about AI/ML, math & everything in technology that piques my interest.
          </p> */}
          
          {/* Details Section */}
          <div className="mt-8 p-3 sm:p-6 border-2 border-orange-500/20 rounded-lg bg-background/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 sm:gap-6">
              {/* Profile Picture */}
              <div className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 rounded-full overflow-hidden border-2 border-orange-500/20">
                <img 
                  src="/profile.JPG" 
                  alt="Shivam Kushwaha" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Profile Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl font-bold text-foreground truncate">Shivam Kushwaha</h2>
                    <p className="text-sm sm:text-base text-foreground">Data Scientist</p>
                  </div>
                  <ThemeToggle />
                </div>
                
                <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-4">
                  <a 
                    href="https://x.com/sshvmk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-orange-400 transition-colors p-1 sm:p-2 rounded-md bg-foreground/10 hover:bg-foreground/20"
                  >
                    <FaXTwitter className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href="https://github.com/sshvmk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-orange-400 transition-colors p-1 sm:p-2 rounded-md bg-foreground/10 hover:bg-foreground/20"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href="https://instagram.com/sshvmk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-orange-400 transition-colors p-1 sm:p-2 rounded-md bg-foreground/10 hover:bg-foreground/20"
                  >
                    <FaInstagram className="w-3.5 h-3.5" />
                  </a>
                </div>
                
                <div className="mt-2 sm:mt-4">
                  <p className="text-sm sm:text-base text-foreground/90 line-clamp-2 sm:line-clamp-none">
                    i write about AI/ML, math & everything in technology that piques my interest.
                  </p>
                  <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2 gap-y-1 text-sm sm:text-base mt-1 sm:mt-2">
                    <span className="font-semibold text-foreground">Quick Links:</span>
                    <a 
                      href="https://sshvmk.bearblog.dev/" 
                      className="text-foreground hover:text-orange-400 transition-colors group inline-flex items-center"
                    >
                      Bear Blog
                      <span className="text-orange-500/60 group-hover:translate-x-0.5 transition-transform ml-0.5 sm:ml-1">→</span>
                    </a>
                    <span className="text-foreground/60">|</span>
                    <a 
                      href="https://sshvmk.github.io/notes/" 
                      className="text-foreground hover:text-orange-400 transition-colors group inline-flex items-center"
                    >
                      Notes Site
                      <span className="text-orange-500/60 group-hover:translate-x-0.5 transition-transform ml-0.5 sm:ml-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
          <h3 className="text-3xl font-bold tracking-tight mb-6 text-foreground">posts</h3>
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
