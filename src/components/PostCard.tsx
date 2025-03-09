import Link from 'next/link';

interface PostCardProps {
  title: string;
  publishedAt: string;
  excerpt: string;
  coverImgAlt: string;
  coverImgSrc: string;
  url: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  publishedAt,
  excerpt,
  coverImgSrc,
  coverImgAlt,
  url,
}) => {
  return (
    <Link
      className="flex flex-col space-y-1 mb-4 border border-solid border-neutral-900 overflow-hidden rounded-md dark:border-slate-200"
      href={url}
    >
      <div>
        <img
          className="w-full h-56 object-cover object-center"
          src={coverImgSrc}
          alt={coverImgAlt}
          loading="lazy"
        />
      </div>
      <div className="px-6 pt-4 pb-6 text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="mt-2 text-xs text-gray-400">{publishedAt}</div>
        <div className="mt-2 text-sm text-justify">{excerpt}</div>
      </div>
    </Link>
  );
};

export default PostCard;
