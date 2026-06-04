import { Status } from "@/lib/products";

const STYLES: Record<Status, { dot: string; text: string; label: string }> = {
  Live: {
    dot: "bg-[#4ade80] animate-pulse",
    text: "text-[#4ade80]",
    label: "LIVE",
  },
  Beta: {
    dot: "bg-[#adc6ff]",
    text: "text-primary",
    label: "BETA",
  },
  "Coming Soon": {
    dot: "bg-text-muted",
    text: "text-text-muted",
    label: "COMING SOON",
  },
};

export default function StatusBadge({ status }: { status: Status }) {
  const s = STYLES[status];
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono-label text-mono-label uppercase tracking-widest ${s.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}
