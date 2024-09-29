const baseUrl = "https://abdouliatech.com/wp-json/wp/v2/posts";
export async function getArticles(): Promise<Article[]> {
  const response = await fetch(baseUrl);
  const articles: Article[] = await response.json();
  return articles;
}

export async function getPostBySlug(slug: string): Promise<Article> {
  //const url = getUrl("/wp-json/wp/v2/posts", { slug });
  const response = await fetch(
    `https://abdouliatech.com/wp-json/wp/v2/posts/?slug=${slug}`
  );
  const post: Article[] = await response.json();
  return post[0];
}

export type Article = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";
  sticky: boolean;
  template: string;
  format:
    | "standard"
    | "aside"
    | "chat"
    | "gallery"
    | "link"
    | "image"
    | "quote"
    | "status"
    | "video"
    | "audio";
  meta: unknown[];
  categories: number[];
  tags: number[];
};
