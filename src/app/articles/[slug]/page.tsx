import { notFound } from 'next/navigation';
import { CustomMDX } from '@/components/MDX';
import { formatDate, getArticles } from '@/libs/articles';
import { baseUrl } from 'src/app/sitemap';
import { CalendarDays, Tags } from 'lucide-react';

export async function generateStaticParams() {
  let posts = getArticles();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getArticles().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    excerpt: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Article({ params }) {
  let post = getArticles().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }



  const { title, publishedAt, excerpt, coverImgSrc, tags } = post.metadata;

  return (
    <article className="prose prose-base dark:prose-invert md:prose-lg max-w-none sm:px-4 md:px-16 md:py-6 lg:px-24">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            datePublished: publishedAt,
            dateModified: publishedAt,
            description: excerpt,
            image: coverImgSrc
              ? `${baseUrl}${coverImgSrc}`
              : `/og?title=${encodeURIComponent(title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1>{title}</h1>
      <div className="flex flex-row flex-wrap justify-start items-center gap-3">
        <div className="flex flex-row flex-wrap justify-start items-center gap-2">
          <div className="w-5 sm:w-6">
            <CalendarDays />
          </div>
          <div className="mr-2">{publishedAt}</div>
          {/* <div className="mr-2">{formatDate(publishedAt)}</div> */}
        </div>
        <div className="flex flex-row flex-wrap justify-start items-center gap-2">
          <div className="w-5 sm:w-6">
            <Tags />
          </div>
          {tags.map((t: string) => (
            <a href={`/tags/${t}`} className="underline-offset-2">
              # {t}
            </a>
          ))}
        </div>
      </div>
      {/* {coverImgSrc && (
        <img src={coverImgSrc} alt="" className="rounded-lg" id="banner-img" />
      )}
      <p>{description}</p> */}

      <CustomMDX source={post.content} slug={post.slug} />
    </article>
  );
}
