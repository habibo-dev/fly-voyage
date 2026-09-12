import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // All imagery is local (public/images) — no external CDN, no optimizer round-trip.
  images: { unoptimized: true },
};

export default nextConfig;
