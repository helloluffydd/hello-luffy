import Link from 'next/link';
import Image from 'next/image';

interface PostCardProps {
  title: string;
  url: string;
  publishedAt: string;
  excerpt: string;
  coverImgAlt: string;
  coverImgSrc: string;
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
    <Link className="flex flex-col space-y-1 mb-4 overflow-hidden " href={url}>
      <span className="w-full inline-block relative aspect-4/3 rounded-md overflow-hidden">
        <Image
          src={coverImgSrc}
          alt={coverImgAlt}
          fill={true}
          className="object-cover"
        />
      </span>
      <div className="px-6 pt-4 pb-6 text-center">
        <h2 className="text-xl font-semibold text-balance">{title}</h2>
        <div className="mt-2 text-xs text-gray-400">{publishedAt}</div>
        <div className="mt-2 text-sm text-justify">{excerpt}</div>
      </div>
    </Link>
  );
};

export default PostCard;
