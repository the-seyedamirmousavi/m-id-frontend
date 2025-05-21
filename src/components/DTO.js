import Link from "next/link";

export default function DTO({ text, href, fill = true }) {
  return (
    <div>
      <Link
        href={href}
        className={`no-underline inline-block px-6 py-3 md:py-4 lg:py-5 border-2 
          text-[clamp(0.875rem, 2.5vw, 1.8rem)] font-semibold rounded-full shadow-md transition-all duration-300 focus:ring-4
          ${fill 
            ? "text-white bg-btn-primary border-btn-primary hover:bg-[var(--primary-color-hover)] focus:ring-[var(--primary-color-focus)]" 
            : "text-btn-primary border-btn-primary shadow-sm hover:bg-[var(--primary-color-hover)] hover:text-white focus:ring-[var(--primary-color-focus)]"
          }`}
      >
        {text}
      </Link>
    </div>
  );
}
