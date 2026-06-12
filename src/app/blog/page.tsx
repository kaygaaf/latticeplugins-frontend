import Link from "next/link";
import { getPosts } from "@/lib/wordpress";
import { blogGuideCards, guideCardThemeClasses } from "./guide-cards";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = (await getPosts(10)).filter((post: any) => post?.slug !== "hello-world");

  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {blogGuideCards.map((card) => {
          const [backgroundClasses, borderClass, eyebrowClass] = guideCardThemeClasses[card.theme].split(" ");

          return (
            <article
              key={card.href}
              data-testid="blog-guide-card"
              className={`border rounded-lg p-6 hover:shadow-lg transition ${backgroundClasses} ${borderClass}`}
            >
              <p className={`text-sm uppercase tracking-[0.2em] ${eyebrowClass} font-semibold mb-2`}>
                {card.eyebrow}
              </p>
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={card.href} className="hover:text-blue-600">
                  {card.title}
                </Link>
              </h2>
              <p className="text-gray-600 line-clamp-3">{card.description}</p>
            </article>
          );
        })}
      </div>

      <div className="space-y-8">
        {posts.map((post: any) => (
          <article key={post.id} className="border rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                {post.title.rendered}
              </Link>
            </h2>
            <p className="text-gray-500 text-sm mb-3">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p
              className="text-gray-600 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </article>
        ))}
      </div>
    </main>
  );
}
