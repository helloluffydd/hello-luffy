import PostCard from './PostCard';

import { getArticles } from '@/features/articles';

export default function ArticlesList() {
  const articles = getArticles();

  articles.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
        {articles.map(({ slug, metadata }) => (
          <li key={slug}>
            <PostCard
              title={metadata.title}
              publishedAt={metadata.publishedAt}
              excerpt={metadata.excerpt}
              coverImgSrc={ metadata.coverImgSrc}
              coverImgAlt={metadata.coverImgAlt}
              url={`/articles/${slug}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
