import Link from "next/link"

export function Droplet({ className = "", stroke = "currentColor" }: { className?: string; stroke?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  )
}

export default function Logo({ tone = "dark", onClick }: { tone?: "dark" | "light"; onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-3" aria-label="Aqua Aesthetics Pools home">
      <span className="relative flex h-10 w-10 items-center justify-center">
        <span
          className={`absolute inset-1 rounded-full border-[1.5px] ${tone === "light" ? "border-aqua" : "border-teal"}`}
          style={{ animation: "aa-ring 3.2s ease-out infinite" }}
          aria-hidden="true"
        />
        <Droplet className="h-9 w-9" stroke={tone === "light" ? "#5CC8D9" : "#0B7285"} />
      </span>
      <span className="font-display text-[26px] font-normal leading-none tracking-[0.005em]">aqua aesthetics</span>
    </Link>
  )
}
