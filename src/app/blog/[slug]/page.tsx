import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/wordpress";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Blog
      </Link>

      <article className="mt-4">
        <h1 className="text-4xl font-bold mb-4">{post.title.rendered}</h1>
        <p className="text-gray-500 mb-8">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </main>
  );
}
