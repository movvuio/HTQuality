"use client";

type SectionHeaderProps = {
  badge: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
};

export function SectionHeader({
  badge,
  title,
  titleAccent,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <span className={dark ? "section-badge section-badge-dark" : "section-badge"}>
        {badge}
      </span>
      <h2 className={`mt-5 section-title ${dark ? "text-white" : "text-navy"}`}>
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className={dark ? "text-sky" : "text-primary"}>{titleAccent}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-4 section-subtitle ${dark ? "text-white/70" : "text-gray-mid"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
