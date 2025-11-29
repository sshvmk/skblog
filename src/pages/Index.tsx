import { BlogCard } from "@/components/blog-card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useState, useEffect, useRef, Suspense } from "react";

// Book Cover Component with lazy loading
const BookCover = ({ coverImage }: { coverImage: string }) => {
  const [imageError, setImageError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window && imgRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '50px' } // Start loading 50px before image enters viewport
      );

      observer.observe(imgRef.current);

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    } else {
      // Fallback: load immediately if IntersectionObserver not supported
      setIsInView(true);
    }
  }, []);

  if (coverImage && !imageError) {
    return (
      <div ref={imgRef} className="w-full h-full">
        {isInView ? (
          <img
            src={coverImage}
            alt="Book cover"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-muted animate-pulse" />
        )}
      </div>
    );
  }

  return null;
};

const PLACEHOLDER_POSTS = [
  {
    title: "26 things for 2026",
    excerpt: "A list of 26 things I want to do and accomplish in 2026 to make the next year fulfilling and satisfying.",
    date: "2025-01-01",
    readingTime: "5 min read",
    slug: "26-things-for-2026"
  },
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
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <>
      {/* <Header /> // Removed */}
      <main className="container max-w-xl py-0 flex-grow">
        {/* Intro Section */}
        <section className="mb-8">
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
          <div className="mt-8 p-3 sm:p-6 border-2 border-orange-700/20 rounded-lg bg-background/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 sm:gap-6">
              {/* Profile Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl font-bold text-foreground truncate">Shivam Kushwaha</h2>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-500">Data Scientist <a href="https://paytm.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-400">@Paytm</a></p>
                  </div>
                  <ThemeToggle />
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-4">
                  <a
                    href="https://x.com/sshvmk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-blue-400 transition-colors p-1 sm:p-2 rounded-md bg-foreground/10 hover:bg-foreground/20"
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
                    href="https://www.linkedin.com/in/shivamkushwaha27/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-orange-400 transition-colors p-1 sm:p-2 rounded-md bg-foreground/10 hover:bg-foreground/20"
                  >
                    <FaLinkedin className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="mt-2 sm:mt-4">
                  <p className="text-sm sm:text-base text-foreground/90 line-clamp-5 sm:line-clamp-none">
                    building ML models for a living. interests - ai, math, poetry, philosophy, architecture, nature and more
                    <br></br>
                  </p>
                  <br></br>

                  <div className="flex flex-nowrap items-center gap-x-1.5 sm:gap-x-2 text-xs sm:text-sm mt-1 sm:mt-2 whitespace-nowrap overflow-x-auto pr-4">
                    {/* <span className="font-semibold text-foreground"><i></i></span> */}
                    <span className="text-orange-400 dark:text-orange-400 font-medium">text me here !</span>
                    <a
                      href="https://x.com/sshvmk"
                      className="text-foreground hover:text-orange-400 transition-colors group inline-flex items-center"
                    >
                      X/Twitter
                      <span className="text-orange-500/60 group-hover:translate-x-0.5 transition-transform ml-0.5 sm:ml-1">→</span>
                    </a>
                    <span className="text-foreground/60">|</span>
                    {/* <a 
                      href="https://www.linkedin.com/in/shivamkushwaha27/" 
                      className="text-foreground hover:text-orange-400 transition-colors group inline-flex items-center"
                    >
                      LinkedIn
                      <span className="text-orange-500/60 group-hover:translate-x-0.5 transition-transform ml-0.5 sm:ml-1">→</span>
                    </a> */}
                    {/* <span className="text-foreground/60">|</span> */}
                    <a
                      href="mailto:shivamkush.2000@gmail.com"
                      className="text-foreground hover:text-orange-400 transition-colors group inline-flex items-center"
                    >
                      Email
                      <span className="text-orange-500/60 group-hover:translate-x-0.5 transition-transform ml-0.5 sm:ml-1">→</span>
                    </a>
                  </div>


                  <div className="flex flex-nowrap items-center gap-x-1 sm:gap-x-1 text-xs sm:text-sm mt-1 sm:mt-2 whitespace-nowrap overflow-x-auto pr-4">
                    {/* <span className="font-semibold text-foreground"><i></i></span> */}
                    <a
                      href="https://substack.com/@sshvmk"
                      className="text-foreground hover:text-orange-400 transition-colors group inline-flex items-center"
                    >
                      Substack
                      <span className="text-orange-500/60 group-hover:translate-x-0.5 transition-transform ml-0.5 sm:ml-1">→</span>
                    </a>
                    <span className="text-foreground/60">|</span>
                    <a
                      href="https://sshvmk.github.io/notes/"
                      className="text-foreground hover:text-orange-400 transition-colors group inline-flex items-center"
                    >
                      Notes
                      <span className="text-orange-500/60 group-hover:translate-x-0.5 transition-transform ml-0.5 sm:ml-1">→</span>
                    </a>
                    <span className="text-foreground/60">|</span>
                    <a
                      href="https://www.goodreads.com/user/show/193017075"
                      className="text-foreground hover:text-orange-400 transition-colors group inline-flex items-center"
                    >
                      Goodreads
                      <span className="text-orange-500/60 group-hover:translate-x-0.5 transition-transform ml-0.5 sm:ml-1">→</span>
                    </a>
                    <span className="text-foreground/60">|</span>
                    <a
                      href="https://boxd.it/g7Mlb"
                      className="text-foreground hover:text-orange-400 transition-colors group inline-flex items-center"
                    >
                      Letterboxd
                      <span className="text-orange-500/60 group-hover:translate-x-0.5 transition-transform ml-0.5 sm:ml-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Horizontal Tab Navigation */}
        <section className="mt-4">
          {/* Tab Bar */}
          <div className="flex bg-background/50 backdrop-blur-sm border border-orange-200/20 dark:border-orange-800/20 rounded-lg p-1 mb-4 overflow-hidden">
            <button
              onClick={() => setActiveTab("posts")}
              className={`flex-1 px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 ease-out truncate min-w-0 ${activeTab === "posts"
                ? "text-orange-500"
                : "text-muted-foreground hover:text-white"
                }`}
            >
              Posts
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex-1 px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 ease-out truncate min-w-0 ${activeTab === "experience"
                ? "text-orange-500"
                : "text-muted-foreground hover:text-white"
                }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`flex-1 px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 ease-out truncate min-w-0 ${activeTab === "projects"
                ? "text-orange-500"
                : "text-muted-foreground hover:text-white"
                }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("bookshelf")}
              className={`flex-1 px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 ease-out truncate min-w-0 ${activeTab === "bookshelf"
                ? "text-orange-500"
                : "text-muted-foreground hover:text-white"
                }`}
            >
              Bookshelf
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[200px]">
            {activeTab === "posts" && (
              <div className="space-y-6">
                {PLACEHOLDER_POSTS.length > 0 ? (
                  PLACEHOLDER_POSTS.map((post) => (
                    <BlogCard key={post.title} {...post} />
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">posting here soon... WIP</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "experience" && (
              <div className="relative border-l border-muted pl-6 ml-2 space-y-8 py-2">
                {/* Paytm Experience */}
                <div className="relative">
                  <div className="absolute -left-[31px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-orange-500 bg-background" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-base font-semibold text-foreground">Data Scientist</h3>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">Feb 2024 - Present</span>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm font-medium text-orange-500">Paytm</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li className="flex gap-2">
                      <span className="text-orange-500/70 mt-1.5 text-[10px]">•</span>
                      <span>Built and integrated 10+ lender-specific models into a unified real-time Recommendation Engine framework for Personal Loans product.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-500/70 mt-1.5 text-[10px]">•</span>
                      <span>Achieved a 30% reduction in lead count while maintaining lead-to-loan ratios and doubled the conversion rate for 5+ lender journey.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-500/70 mt-1.5 text-[10px]">•</span>
                      <span>Led end-to-end development of a Look-alike Identification Model, delivering a 72% capture rate in the top 3 deciles.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-500/70 mt-1.5 text-[10px]">•</span>
                      <span>Designed a cohort identification model to isolate high-value customer groups with a 4x funnel rate, enabling targeted marketing campaigns.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-500/70 mt-1.5 text-[10px]">•</span>
                      <span>Developed an NLP-based pipeline to parse SMS data and extract features for downstream model training.</span>
                    </li>
                  </ul>
                </div>

                {/* Anahit Experience */}
                <div className="relative">
                  <div className="absolute -left-[31px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-orange-500/50 bg-background" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-base font-semibold text-foreground">Data Scientist</h3>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">July 2023 - Dec 2023</span>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm font-medium text-orange-500">Anahit Pvt Ltd</span>
                    <span className="text-xs text-muted-foreground ml-1">(Fintech startup)</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Major work was to study and build macro indicators such as recession indicator, global liquidity indicator, etc for financial markets. Also worked on finding correlation and catching trends across all major asset classes.
                  </p>
                </div>

                {/* NSUT Experience */}
                <div className="relative">
                  <div className="absolute -left-[31px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-orange-500/30 bg-background" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-base font-semibold text-foreground">Machine Learning Intern</h3>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">2022 - 2024</span>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm font-medium text-orange-500">NSUT Central AI Lab</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Majorly worked on CNN and RNN models.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">adding soon</p>
              </div>
            )}

            {activeTab === "bookshelf" && (
              <Suspense fallback={<div className="text-center py-8 text-muted-foreground">Loading bookshelf...</div>}>
                <BookshelfView />
              </Suspense>
            )}
          </div>
        </section>
      </main>
      {/* <Footer /> // Removed */}
    </>
  );
};

// Books data - just cover image paths
// To add book cover images:
// 1. Place images in the /public/books/ folder
// 2. Add the path: "/books/your-image.jpg" (or .webp, .png, etc.)
// 3. Or use an external URL: "https://example.com/book-cover.jpg"
const BOOKS = [
  "/books/ret-ki-machhali.webp",
  "/books/we.jpg",
  "/books/perception.jpg",
  "/books/outsider_camus.webp",
  "/books/khidki.jpg",
  "/books/capitalism.jpg",
  "/books/BendInTheRiver.jpeg",
];

const BookshelfView = () => {
  return (
    <div className="py-2">
      <div className="mb-3">
        <h2 className="text-xl font-bold mb-1 text-foreground">My Bookshelf</h2>
        <p className="text-lg text-muted-foreground">2025</p>
      </div>

      {/* Books Grid - Clean Cover Only */}
      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5 sm:gap-2">
        {BOOKS.map((coverImage, index) => (
          <div
            key={index}
            className="group relative aspect-[2/3] overflow-hidden rounded-sm transition-transform duration-300 hover:scale-105 hover:z-10"
          >
            <BookCover coverImage={coverImage} />
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-4 text-xs">
        <span className="text-muted-foreground">Total Books: </span>
        <span className="font-semibold text-orange-500">{BOOKS.length}</span>
      </div>
    </div>
  );
};

export default Index;
