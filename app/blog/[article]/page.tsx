import { getPostBySlug } from "@/providers/articleProviders";

export default async function page({
  params,
}: {
  params: { article: string };
}) {
  const singleArticle = await getPostBySlug(params.article);
  console.log(singleArticle);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-1 sm:px-24 md:px-12 bg-bgcolor-1">
      <div className="z-10 w-full h-full flex-col items-center  max-w-screen-2xl  font-mono lg:flex gap-4"></div>
      <div
        className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
        id="singlearticle"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className=" p-4 lg:col-span-2">
            <div
              className="text-white"
              dangerouslySetInnerHTML={{
                __html: singleArticle.content.rendered,
              }}
            ></div>
          </div>

          <div className="h-32 p-4">side-col</div>
        </div>
      </div>
    </main>
  );
}
