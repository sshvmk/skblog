
interface PDFPreviewProps {
  url: string;
  title: string;
}

export function PDFPreview({ url, title }: PDFPreviewProps) {
  return (
    <div className="border rounded-lg overflow-hidden bg-muted/50 hover:bg-muted transition-colors">
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-4 space-x-3"
      >
        <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6v16h12V8l-6-6zm4 4v10H6V2h10l2 2v2z"/>
        </svg>
        <span className="flex-1 text-sm truncate">{title}</span>
      </a>
    </div>
  );
}
