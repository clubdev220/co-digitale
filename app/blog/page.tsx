"use client";
import Header from "@/components/Header";
import { getArticles } from "@/providers/articleProviders";

export default async function page() {
  const post = await getArticles();
  console.log(post);

  /* const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();
      return data;
    };

    const allArticle = getArticles();
    allArticle.then((data) => setArticles(data));

    console.log(articles);
  }, []); */

  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between px-1 sm:px-24 md:px-12 bg-bgcolor-1">
        <div className="z-10 w-full h-full flex-col items-center  max-w-screen-2xl  font-mono lg:flex gap-4">
          <div
            className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
            id="blogPost"
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
              <div className=" p-4 lg:col-span-2">
                <h2 className="py-4 text-3xl font-bold sm:text-4xl text-bgcolor-3">
                  Derniers articles
                </h2>
                <div className="grid grid-cols-1 gap-8">
                  {post.map((p) => (
                    <div key={p.id} className="flex flex-col gap-2">
                      <span className="inline-block w-[100px] font-light text-muted-foreground">
                        {p.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <a
                          className="font-semibold text-bgcolor-3 hover:text-yellow-100 hover:cursor-pointer"
                          href={`/blog/${p.slug}`}
                        >
                          {p.title.rendered}
                        </a>
                      </span>
                      <span className="text-white">
                        {p.excerpt.rendered.toString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-32 p-4">side-col</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
