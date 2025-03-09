import { blogConfig, navLinks } from 'src/utils/appConfig';
import Link from 'next/link';
import { ThemeButton } from './ThemeButton';

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'deploy',
  },
};

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 sm:px-0 sm:py-6">
      <Link href="/" className="text-xl font-bold">
        {blogConfig.title}
      </Link>
      {navLinks.length > 0 && (
        <div className="flex justify-between items-center w-1/4">
          {navLinks.map(({ name, href }) => (
            <a key={href} href={href}>{name}</a>
          ))}
        </div>
      )}

      <ThemeButton />
    </nav>
    // <aside className="-ml-[8px] mb-16 tracking-tight">
    //   <div className="lg:sticky lg:top-20">
    //     <nav
    //       className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
    //       id="nav"
    //     >
    //       <div className="flex flex-row space-x-0 pr-10">
    //         {Object.entries(navItems).map(([path, { name }]) => {
    //           return (
    //             <Link
    //               key={path}
    //               href={path}
    //               className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
    //             >
    //               {name}
    //             </Link>
    //           )
    //         })}
    //       </div>
    //     </nav>
    //   </div>
    // </aside>
  );
}
