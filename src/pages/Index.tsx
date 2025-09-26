import { BlogCard } from "@/components/blog-card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
                  {/* <a 
                    href="https://instagram.com/sshvmk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-orange-400 transition-colors p-1 sm:p-2 rounded-md bg-foreground/10 hover:bg-foreground/20"
                  >
                    <FaInstagram className="w-3.5 h-3.5" />
                  </a> */}
                </div>
                
                <div className="mt-2 sm:mt-4">
                  <p className="text-sm sm:text-base text-foreground/90 line-clamp-2 sm:line-clamp-none">
                    building ML models for a living. interests - ai, math, poetry, philosophy, architecture, nature and more
                    <br></br>
                  </p>
                  <br></br>

                  <div className="flex flex-nowrap items-center gap-x-1.5 sm:gap-x-2 text-xs sm:text-sm mt-1 sm:mt-2 whitespace-nowrap overflow-x-auto pr-4">
                    {/* <span className="font-semibold text-foreground"><i></i></span> */}
                    <span className="text-orange-400 dark:text-orange-400 font-medium">dm's open !</span>
                    <a 
                      href="https://x.com/sshvmk" 
                      className="text-foreground hover:text-orange-400 transition-colors group inline-flex items-center"
                    >
                      X/Twitter
                      <span className="text-orange-500/60 group-hover:translate-x-0.5 transition-transform ml-0.5 sm:ml-1">→</span>
                    </a>
                    <span className="text-foreground/60">|</span>
                    <a 
                      href="https://www.linkedin.com/in/shivamkushwaha27/" 
                      className="text-foreground hover:text-orange-400 transition-colors group inline-flex items-center"
                    >
                      LinkedIn
                      <span className="text-orange-500/60 group-hover:translate-x-0.5 transition-transform ml-0.5 sm:ml-1">→</span>
                    </a>
                    <span className="text-foreground/60">|</span>
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

        {/* Foldable Sections */}
        <section className="mt-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="experience">
              <AccordionTrigger className="text-base sm:text-lg">Experience</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Data and ML Engineer • Paytm</h3>
                    <p className="text-muted-foreground">Feb 2024 - Present</p>
                    <p className="text-sm">Currently, I am building credit risk model, underwriting model and recommendation engines. </p>
                    <p className="text-sm">Previously, I have worked on NLP pipeline solutioning for voice bots.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Data Scientist • Anahit Pvt Ltd (Fintech startup)</h3>
                    <p className="text-muted-foreground">July 2023 - Dec 2023</p>
                    <p className="text-sm">Major work was to study and build macro indicators such as recession indicator, global liquidity indicator, etc for financial markets. Also worked on finding correlation and catching trends across all major asset classes.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Machine Learning Intern • NSUT Central AI Lab</h3>
                    <p className="text-muted-foreground">2022 - 2024</p>
                    <p className="text-sm">Majorly worked on CNN and RNN models.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="projects">
              <AccordionTrigger className="text-base sm:text-lg">Projects</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-3">
                  <p className="text-sm text-muted-foreground">This section is W.I.P.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="posts">
              <AccordionTrigger className="text-base sm:text-lg">Posts</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  {PLACEHOLDER_POSTS.map((post) => (
                    <BlogCard key={post.title} {...post} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
      {/* <Footer /> // Removed */}
    </>
  );
};

export default Index;
