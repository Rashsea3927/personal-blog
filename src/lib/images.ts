import type { ImageMetadata } from "astro";

const images = import.meta.glob<ImageMetadata>("/src/assets/thumbnails/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
});

export function getBlogThumbnail(slug: string) {
  return images[`/src/assets/thumbnails/thumbnail-${slug}.webp`];
}
