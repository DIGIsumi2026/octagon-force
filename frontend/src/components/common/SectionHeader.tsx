type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`section-header ${
        align === "left" ? "section-header--left" : ""
      } ${light ? "section-header--light" : ""}`}
    >
      <span className={`eyebrow ${light ? "eyebrow--light" : ""}`}>
        <span />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}