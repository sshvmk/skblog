import { useParams, useNavigate } from "react-router-dom";
import { MathBlock } from "@/components/ui/math-block";
import { YouTubeEmbed } from "@/components/ui/youtube-embed";
import { PDFPreview } from "@/components/ui/pdf-preview";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Sample blog post data
const BLOG_POSTS = {
  "dummy": {
    title: "Dummy",
    date: "2024-12-19",
    readingTime: "3 min read",
    content: [
      { type: "text", content: "This is a dummy blog post to test the blog functionality. It contains various types of content to demonstrate the different features available." },
      { type: "text", content: "Here's some mathematical content:" },
      { type: "math", content: "E = mc^2" },
      { type: "text", content: "And here's some code:" },
      { type: "code", content: `function hello() {
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
      { type: "code", content: `interface Functor<T> {
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
      { type: "code", content: `// Compound Component Example
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

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = slug ? BLOG_POSTS[slug] : null;
  
  if (!post) {
    return (
      <main className="container max-w-xl py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Post Not Found</h1>
        <p>The blog post you're looking for does not exist.</p>
      </main>
    );
  }

  return (
    <>
      <main className="container max-w-xl py-12">
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
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">{post.title}</h1>
            <div className="text-sm text-muted-foreground flex items-center space-x-2">
              <time dateTime={post.date} className="text-orange-600 dark:text-orange-300">{post.date}</time>
              <span className="text-orange-500">•</span>
              <span className="text-orange-600 dark:text-orange-300">{post.readingTime}</span>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-invert max-w-none text-base">
            {post.content.map((block, index) => {
              switch (block.type) {
                case 'text':
                  return <p key={index} className="mb-4 text-base leading-relaxed">{block.content}</p>;
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
