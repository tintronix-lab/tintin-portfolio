export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a public asset path with the configured basePath (for GitHub Pages, etc.). */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${clean}`;
}
