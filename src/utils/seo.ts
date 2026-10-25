/**
 * Updates page title, meta description, open-graph tags and canonical link for marketing routes
 */
export function updatePageSEO({
  title,
  description,
  canonicalPath = window.location.pathname,
  ogType = 'website',
}: {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
}): void {
  document.title = title;

  const setMeta = (name: string, content: string, isProperty = false) => {
    const attr = isProperty ? 'property' : 'name';
    let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.content = content;
  };

  setMeta('description', description);
  setMeta('og:title', title, true);
  setMeta('og:description', description, true);
  setMeta('og:url', `https://zuntra.cards${canonicalPath}`, true);
  setMeta('og:type', ogType, true);
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);

  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = `https://zuntra.cards${canonicalPath}`;
}
