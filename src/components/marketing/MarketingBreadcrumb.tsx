import React, { useEffect, useRef } from "react";

type BreadcrumbParent = {
  label: string;
  href?: string;
};

type MarketingBreadcrumbProps = {
  current: string;
  parent?: BreadcrumbParent;
  accent?: string;
  align?: "left" | "center";
};

const menuItems = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
];

export function MarketingBreadcrumb({
  current,
  parent,
  accent = "#395afa",
  align = "left",
}: MarketingBreadcrumbProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const sentenceCase = (label: string) =>
    label ? `${label.charAt(0).toUpperCase()}${label.slice(1).toLowerCase()}` : label;

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
        detailsRef.current.open = false;
      }
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  return (
    <nav className={`marketing-breadcrumb marketing-breadcrumb-${align}`} aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li aria-hidden="true" className="marketing-breadcrumb-separator">/</li>
        <li className="marketing-breadcrumb-menu">
          <details ref={detailsRef}>
            <summary aria-label="Open breadcrumb navigation">
              <span aria-hidden="true">•••</span>
            </summary>
            <div className="marketing-breadcrumb-popover">
              {menuItems.map((item) => (
                <a key={item.href} href={item.href}>{sentenceCase(item.label)}</a>
              ))}
            </div>
          </details>
        </li>
        {parent && (
          <>
            <li aria-hidden="true" className="marketing-breadcrumb-separator">/</li>
            <li>{parent.href ? <a href={parent.href}>{sentenceCase(parent.label)}</a> : <span>{sentenceCase(parent.label)}</span>}</li>
          </>
        )}
        <li aria-hidden="true" className="marketing-breadcrumb-separator">/</li>
        <li><span className="marketing-breadcrumb-current" style={{ color: accent }} aria-current="page">{sentenceCase(current)}</span></li>
      </ol>
    </nav>
  );
}
