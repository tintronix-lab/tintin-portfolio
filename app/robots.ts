import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Private, password-gated portfolio — keep it out of search engines.
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
