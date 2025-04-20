
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { useEffect, useRef } from 'react';

interface MathBlockProps {
  math: string;
  display?: boolean;
}

export function MathBlock({ math, display = true }: MathBlockProps) {
  const mathRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mathRef.current) {
      katex.render(math, mathRef.current, {
        throwOnError: false,
        displayMode: display,
      });
    }
  }, [math, display]);

  return <div ref={mathRef} className="my-4" />;
}
