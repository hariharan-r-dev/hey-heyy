/**
 * Resolves application URLs (admin dashboard, login, signup, studio) from the marketing site.
 * Defaults to port 5181 in local dev if running separate dev servers, or relative paths in production.
 */
export function getAppUrl(path: string): string {
  const customBase = import.meta.env.VITE_APP_URL;
  if (customBase) {
    const cleanBase = customBase.replace(/\/$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${cleanBase}${cleanPath}`;
  }

  // Local development fallback: if marketing runs on 5180, link to 5181 by default
  if (typeof window !== 'undefined' && (window.location.port === '5180' || window.location.port === '5182')) {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `http://${window.location.hostname}:5181${cleanPath}`;
  }

  return path;
}
