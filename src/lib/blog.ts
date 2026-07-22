import blogs from "@data/data.json";

export const getBlogs = () => blogs;

export const getBlogBySlug = (slug: string) => blogs.find((blog) => blog.slug === slug);
