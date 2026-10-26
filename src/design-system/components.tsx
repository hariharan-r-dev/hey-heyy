import { useState, type CSSProperties, type ReactNode } from "react";

const ASSET_PATH = "/assets";

export type ButtonVariant = "primary" | "secondary" | "light";

type PillButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
};

export function PillButton({
  children,
  href,
  variant = "primary",
  showArrow = false,
  className = "",
  target,
  rel,
}: PillButtonProps) {
  const classes = [
    "pill",
    variant === "secondary" ? "pill-secondary" : "",
    variant === "light" ? "pill-light" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} href={href} target={target} rel={rel}>
      {children}
      {showArrow && <img src={`${ASSET_PATH}/3622d.svg`} alt="" />}
    </a>
  );
}

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function SectionHeading({ title, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={["center-heading", className].filter(Boolean).join(" ")}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export type FactItem = {
  title: string;
  description: string;
};

export function FactStrip({ items, className = "" }: { items: FactItem[]; className?: string }) {
  return (
    <section className={["facts", className].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <div key={item.title}>
          <strong>{item.title}</strong>
          <span>{item.description}</span>
        </div>
      ))}
    </section>
  );
}

export type StepItem = {
  icon: string;
  title: string;
  body: string;
};

export function StepGrid({ items }: { items: StepItem[] }) {
  return (
    <div className="steps">
      {items.map((item) => (
        <article key={item.title}>
          <img src={`${ASSET_PATH}/${item.icon}`} alt="" />
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

type StackedBadgeProps = {
  children: ReactNode;
  color: string;
  layerColor: string;
  className?: string;
};

export function StackedBadge({ children, color, className = "" }: StackedBadgeProps) {
  return (
    <div className={["tag-stack", className].filter(Boolean).join(" ")}>
      <span className="tag" style={{ backgroundColor: color }}>{children}</span>
    </div>
  );
}

export type ProductCardData = {
  label: string;
  surface: string;
  accent: string;
  accentSoft: string;
  title: string;
  description: string;
  ctaUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
};

export function ProductCard({ item, index }: { item: ProductCardData; index: number }) {
  return (
    <article className="product-card" style={{ backgroundColor: item.surface }}>
      <div className="product-copy">
        <StackedBadge
          className={`tag-stack-${index}`}
          color={item.accent}
          layerColor={item.accentSoft}
        >
          {item.label}
        </StackedBadge>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "auto", flexWrap: "wrap" }}>
          <PillButton href={item.ctaUrl || "#create"}>Create with Zuntra</PillButton>
          {item.demoUrl && (
            <PillButton href={item.demoUrl} variant="secondary" target="_blank" rel="noreferrer">
              {item.demoLabel || "Preview Live Demo"}
            </PillButton>
          )}
        </div>
      </div>
    </article>
  );
}

export type AccordionItem = readonly [question: string, answer: string];

type AccordionProps = {
  items: readonly AccordionItem[];
  defaultOpen?: number;
};

export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [active, setActive] = useState(defaultOpen);

  return (
    <div className="accordion" style={{ height: "fit-content" }}>
      {items.map(([question, answer], index) => {
        const isOpen = active === index;
        return (
          <div className="faq-row" key={question}>
            <button onClick={() => setActive(isOpen ? -1 : index)} aria-expanded={isOpen}>
              {question}
              <img
                className={isOpen ? "rotated" : ""}
                src={`${ASSET_PATH}/${isOpen ? "dcc97.svg" : "81dd2.svg"}`}
                alt=""
              />
            </button>
            {isOpen && <p>{answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function colorStyle(backgroundColor: string): CSSProperties {
  return { backgroundColor };
}
