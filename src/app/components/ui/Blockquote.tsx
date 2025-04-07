import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Blockquote({ text }: { text: string }) {
  return (
    <blockquote className="text-lg italic font-extralight text-muted-foreground">
      <ReactMarkdown
        components={{
          strong: ({ children }) => (
            <strong className="text-chart-2 font-normal">{children}</strong>
          ),
        }}
        remarkPlugins={[remarkGfm]}
      >
        {text}
      </ReactMarkdown>
    </blockquote>
  );
}
