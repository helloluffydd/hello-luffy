import ArticlesList from '@/components/ArticlesList';
import { blogConfig, selfIntros } from '../utils/appConfig';

export default function Page() {
  return (
    <main className="flex-auto px-4 pt-4 pb-16 md:px-0">
      <section className="mt-8 my-12 flex flex-col-reverse justify-between items-center md:flex-row">
        <div className="leading-loose flex-1 text-center">
          <h2 className="text-2xl mb-4 hidden md:block  font-blog">
            {blogConfig.greeting}
          </h2>
          {selfIntros.map((s) => (
            <p key={s}>{s}</p>
          ))}
        </div>
        {/* <div className="w-[90%] border-b border-neutral-900 mb-8 dark:border-b md:flex-[0.6] md:mr-12 dark:border-neutral-200">
          <img
            src="profile.png"
            alt=""
            className="w-64 h-80 object-cover object-top mx-auto"
          />
        </div> */}
        <h2 className="text-2xl mb-8 md:hidden">{blogConfig.greeting}</h2>
      </section>
      <ArticlesList />
      {/* <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <ArticlesList />
      </div> */}
    </main>
  );
}
