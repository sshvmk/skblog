import { useParams, useNavigate } from "react-router-dom";
import { MathBlock } from "@/components/ui/math-block";
import { YouTubeEmbed } from "@/components/ui/youtube-embed";
import { PDFPreview } from "@/components/ui/pdf-preview";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Lock, Unlock, Clock, Calendar, Trophy, Target, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

// Sample blog post data
const BLOG_POSTS = {
  "26-things-for-2026": {
    title: "26 things for 2026",
    date: "2025-01-01",
    content: [
      { type: "text", content: "2026 is a year for intentional growth across every dimension of life. I'm sharpening my focus on four key pillars: elevating my career, revitalizing my health, exploring the world, and unleashing my creative spirit. Here are the 26 commitments I'm making to turn that vision into reality:" },
      {
        type: "list", items: [
          { text: "A solo trip to Sikkim", completed: false, category: "Travel" },
          { text: "Grow substack to 10k+ followers", completed: false, category: "Growth" },
          { text: "Do 10 50kms runs", completed: false, category: "Health" },
          {
            text: (
              <span>
                Make <span className="bg-foreground text-transparent select-none px-1">40 Lakhs</span> this year
              </span>
            ),
            completed: false,
            category: "Growth"
          },
          { text: "Buy a bike and ride it to Ladakh", completed: false, category: "Travel" },
          { text: "Take parents to चार धाम यात्रा", completed: false, category: "Travel" },
          { text: "Attend 3 international reputed conferences", completed: false, category: "Growth" },
          { text: "Get a professional camera and start an instagram page", completed: false, category: "Growth" },
          { text: "Learn to cook at least 10 dishes and bake cookies", completed: false, category: "Life" },
          { text: "दान on holi and diwali", completed: false, category: "Life" },
          { text: "Host a dinner party for friends", completed: false, category: "Life" },
          { text: "Upgrade work and sleep setup", completed: false, category: "Life" },
          { text: "Try open mic live stand-up performance", completed: false, category: "Growth" },
          { text: "Try to understand Indian Political History", completed: false, category: "Growth" },
          { text: "A solo trip to Nepal", completed: false, category: "Travel" },
          { text: "Grow X to 5k + followers", completed: false, category: "Growth" },
          { text: "Get below 15% body fat", completed: false, category: "Health" },
          { text: "Bench press 0.75x of my body weight", completed: false, category: "Health" },
          {
            text: (
              <span>
                Climb <a href="https://en.wikipedia.org/wiki/Imja_Tse" target="_blank" rel="noopener noreferrer" className="underline decoration-orange-500/50 hover:decoration-orange-500 transition-all">Island Peak</a>, Nepal
              </span>
            ),
            completed: false,
            category: "Travel"
          },
          { text: "Read at least one book a month", completed: false, category: "Growth" },
          { text: "Get better at playing table tennis", completed: false, category: "Life" },
          { text: "Take a swimming course in summer", completed: false, category: "Health" },
          { text: "Complete a 50 day no-sugar challenge", completed: false, category: "Health" },
          { text: "Work hard on family business and take it online", completed: false, category: "Growth" },
          { text: "Run a sub-45 minute 10k", completed: false, category: "Health" },
          { text: "Complete a 10-day digital detox", completed: false, category: "Life" }
        ]
      },
      { type: "text", content: "This list is a starting point, a compass to guide my year. Some items are concrete goals, others are ongoing practices. My aim is progress, not perfection." }
    ]
  },
  "dummy": {
    title: "Dummy",
    date: "2024-12-19",
    readingTime: "3 min read",
    content: [
      { type: "text", content: "This is a dummy blog post to test the blog functionality. It contains various types of content to demonstrate the different features available." },
      { type: "text", content: "Here's some mathematical content:" },
      { type: "math", content: "E = mc^2" },
      { type: "text", content: "And here's some code:" },
      {
        type: "code", content: `function hello() {
  console.log("Hello, World!");
  return "success";
}` },
      { type: "text", content: "This post demonstrates the blog system is working correctly. You can click on posts from the main page to view them in full screen." },
      { type: "text", content: "The blog supports various content types including text, math equations, code blocks, YouTube videos, and PDF previews." }
    ]
  },
  "understanding-category-theory": {
    title: "Understanding Category Theory in TypeScript",
    date: "2024-04-20",
    readingTime: "5 min read",
    content: [
      { type: "text", content: "Category theory is a mathematical formalism that has gained popularity in functional programming. In this post, we'll explore how to implement some category theory concepts in TypeScript." },
      { type: "math", content: "F: C \\rightarrow D" },
      { type: "text", content: "A functor is a mapping between categories that preserves structure. In TypeScript, we can implement functors using generic types:" },
      {
        type: "code", content: `interface Functor<T> {
  map<U>(f: (value: T) => U): Functor<U>;
}

// Example implementation with Array
const arrayFunctor = {
  map: <T, U>(f: (value: T) => U, arr: T[]): U[] => arr.map(f)
};` },
      { type: "text", content: "Let's see an example of a functor in action:" },
      { type: "youtube", id: "dQw4w9WgXcQ" },
      { type: "text", content: "Additional resources on category theory:" },
      { type: "pdf", url: "https://example.com/category-theory.pdf", title: "Category Theory for Programmers.pdf" }
    ]
  },
  "advanced-react-patterns": {
    title: "Advanced React Patterns with Examples",
    date: "2024-04-19",
    readingTime: "8 min read",
    content: [
      { type: "text", content: "React patterns help us create reusable, maintainable components. Let's explore some advanced patterns." },
      { type: "text", content: "1. Compound Components Pattern" },
      {
        type: "code", content: `// Compound Component Example
const Tabs = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

Tabs.Panel = ({ children, id }) => {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== id) return null;
  return <div>{children}</div>;
};` },
      { type: "text", content: "2. Control Props Pattern" },
      { type: "text", content: "This pattern allows external control over internal state:" },
      { type: "math", content: "\\text{Parent} \\xrightarrow{\\text{props}} \\text{Child}" },
      { type: "youtube", id: "3XkU_DXcgl0" }
    ]
  },
  "neural-networks-math": {
    title: "The Math Behind Neural Networks",
    date: "2024-04-18",
    readingTime: "10 min read",
    content: [
      { type: "text", content: "Understanding the mathematics behind neural networks helps in implementing and optimizing them effectively." },
      { type: "text", content: "Feed-forward neural networks use a series of matrix multiplications and non-linear activations:" },
      { type: "math", content: "y = \\sigma(W \\cdot x + b)" },
      { type: "text", content: "Where σ is an activation function, W is a weight matrix, x is the input vector, and b is a bias vector." },
      { type: "text", content: "Training a neural network involves minimizing a loss function using gradient descent:" },
      { type: "math", content: "\\nabla_\\theta J(\\theta)" },
      { type: "youtube", id: "aircAruvnKk" },
      { type: "text", content: "For a deeper understanding, check out this paper:" },
      { type: "pdf", url: "https://example.com/neural-networks.pdf", title: "Deep Learning Mathematics.pdf" }
    ]
  }
};

// Goals Display component for the 26 things post
const GoalsDisplay = ({ items }: { items: { text: string | React.ReactNode; completed: boolean; category?: string }[] }) => {
  const completedCount = items.filter(i => i.completed).length;
  const totalCount = items.length;
  const progress = (completedCount / totalCount) * 100;

  const categoryColors: Record<string, { bg: string, border: string, text: string, icon: string, badge: string }> = {
    Growth: {
      bg: "bg-indigo-50/50 dark:bg-indigo-950/20",
      border: "border-indigo-200 dark:border-indigo-800",
      text: "text-indigo-700 dark:text-indigo-300",
      icon: "text-indigo-500",
      badge: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
    },
    Health: {
      bg: "bg-teal-50/50 dark:bg-teal-950/20",
      border: "border-teal-200 dark:border-teal-800",
      text: "text-teal-700 dark:text-teal-300",
      icon: "text-teal-500",
      badge: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
    },
    Life: {
      bg: "bg-orange-50/50 dark:bg-orange-950/20",
      border: "border-orange-200 dark:border-orange-800",
      text: "text-orange-700 dark:text-orange-300",
      icon: "text-orange-500",
      badge: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
    },
    Travel: {
      bg: "bg-pink-50/50 dark:bg-pink-950/20",
      border: "border-pink-200 dark:border-pink-800",
      text: "text-pink-700 dark:text-pink-300",
      icon: "text-pink-500",
      badge: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400"
    }
  };

  const defaultColor = {
    bg: "bg-card/50",
    border: "border-border/50",
    text: "text-foreground/80",
    icon: "text-muted-foreground",
    badge: "bg-secondary text-muted-foreground"
  };

  const categoryCounts = items.reduce((acc, item) => {
    if (item.category) {
      acc[item.category] = (acc[item.category] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="mb-8">
      {/* Aesthetic Progress Bar - Compact */}
      <div className="mb-4 p-4 bg-gradient-to-br from-background via-background to-orange-50/10 dark:to-orange-950/10 border border-orange-200/20 dark:border-orange-800/20 rounded-xl shadow-sm backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
          <Trophy className="w-16 h-16 text-orange-500 transform rotate-12" />
        </div>

        <div className="relative z-10">
          <div className="flex items-end justify-between mb-2">
            <div>
              <h3 className="text-base font-semibold text-foreground flex items-center gap-1.5">
                <Target className="w-4 h-4 text-orange-500" />
                2026 Goals
              </h3>
            </div>
            <div className="text-right flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-orange-500">{Math.round(progress)}%</span>
              <span className="text-xs text-muted-foreground">done</span>
            </div>
          </div>

          <div className="relative h-2 w-full bg-secondary/50 rounded-full overflow-hidden backdrop-blur-sm border border-black/5 dark:border-white/5">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(249,115,22,0.5)]"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
            </div>
          </div>
        </div>
      </div>

      {/* Category Legend */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
        {Object.entries(categoryColors).map(([name, colors]) => (
          <div key={name} className={`px-2 py-1 rounded-md text-xs font-medium border flex items-center gap-1.5 ${colors.bg} ${colors.border} ${colors.text}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')}`} />
            {name}
            <span className="ml-0.5 opacity-70">({categoryCounts[name] || 0})</span>
          </div>
        ))}
      </div>

      {/* Compact Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((item, index) => {
          const colors = item.category ? categoryColors[item.category] : defaultColor;

          return (
            <div
              key={index}
              className={`
                relative p-2.5 rounded-lg border transition-all duration-300 group hover:shadow-sm
                ${item.completed
                  ? "bg-orange-50/50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800"
                  : `${colors.bg} ${colors.border} hover:border-opacity-80`
                }
              `}
            >
              <div className="flex items-start gap-2.5">
                <div className={`
                  mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-colors
                  ${item.completed
                    ? "bg-orange-500 text-white shadow-sm shadow-orange-500/30"
                    : colors.badge
                  }
                `}>
                  {item.completed ? (
                    <Check className="w-2.5 h-2.5" strokeWidth={3} />
                  ) : (
                    <span className="text-[9px] font-bold">{index + 1}</span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className={`
                    text-sm leading-tight transition-colors
                    ${item.completed
                      ? "text-muted-foreground line-through decoration-orange-500/30"
                      : "text-foreground/90"
                    }
                  `}>
                    {item.text}
                  </p>
                </div>

                {item.completed && (
                  <Sparkles className="absolute top-1.5 right-1.5 w-2.5 h-2.5 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const calculateReadingTime = (content: any[]) => {
  let wordCount = 0;
  content.forEach(block => {
    if (block.type === 'text') {
      wordCount += block.content.split(/\s+/).length;
    } else if (block.type === 'list') {
      block.items.forEach((item: any) => {
        const text = typeof item === 'string' ? item : item.text;
        if (typeof text === 'string') {
          wordCount += text.split(/\s+/).length;
        }
      });
    }
  });
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = slug ? BLOG_POSTS[slug] : null;

  if (!post) {
    return (
      <main className="container max-w-xl py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">Post Not Found</h1>
        <p className="text-foreground/90">The blog post you're looking for does not exist.</p>
      </main>
    );
  }

  return (
    <>
      <main className="container max-w-xl pb-12">
        <article>
          {/* Back Navigation */}
          <div className="mb-4">
            <button
              onClick={() => navigate(-1)}
              className="text-foreground hover:text-orange-400 transition-colors p-1 sm:p-2 rounded-md bg-foreground/10 hover:bg-foreground/20 flex items-center gap-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </button>
          </div>

          {/* Post Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">{post.title}</h1>
            <div className="text-sm text-muted-foreground flex items-center space-x-2">
              <time dateTime={post.date} className="text-orange-600 dark:text-orange-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </time>
              <span className="text-orange-500">•</span>
              <span className="text-orange-600 dark:text-orange-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime || calculateReadingTime(post.content)}
              </span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-invert max-w-none text-base">
            {post.content.map((block, index) => {
              switch (block.type) {
                case 'text':
                  return <p key={index} className="mb-4 text-base leading-relaxed text-foreground/90">{block.content}</p>;
                case 'list':
                  // Use GoalsDisplay component for the 26 things post
                  if (slug === "26-things-for-2026" && block.items) {
                    return <GoalsDisplay key={index} items={block.items} />;
                  }
                  // Regular list for other posts
                  return (
                    <ol key={index} className="mb-6 space-y-3 text-foreground/90 ml-6">
                      {block.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-base leading-relaxed list-decimal">{item}</li>
                      ))}
                    </ol>
                  );
                case 'math':
                  return <div key={index} className="my-6"><MathBlock math={block.content} /></div>;
                case 'code':
                  return (
                    <pre key={index} className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 p-4 rounded-md my-6 overflow-x-auto text-base">
                      <code className="text-base text-orange-800 dark:text-orange-200">{block.content}</code>
                    </pre>
                  );
                case 'youtube':
                  return <div key={index} className="my-8"><YouTubeEmbed videoId={block.id} /></div>;
                case 'pdf':
                  return (
                    <div key={index} className="my-8">
                      <PDFPreview url={block.url} title={block.title} />
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </article>
      </main>
    </>
  );
};

export default BlogPost;
