import { footerLinks } from '../utils/appConfig';
import { generateCopyright } from '../utils/helpers';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="flex justify-between items-center p-4 sm:px-0 sm:py-6">
      <div>{generateCopyright(year)}</div>
      <div className="flex justify-between items-center w-[40%] sm:w-1/5">
        {footerLinks.map(({ id, href, iconName }) => (
          <a
            key={href}
            href={href}
            className="w-6 sm:w-7"
            target="_blank"
            rel="noopener"
          >
            {/* <Icon name={iconName} id={id} /> */}
          </a>
        ))}
      </div>
    </footer>
    // <footer className="mb-16">
    //   <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
    //     <li>
    //       <a
    //         className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
    //         rel="noopener noreferrer"
    //         target="_blank"
    //         href="/rss"
    //       >
    //         <ArrowIcon />
    //         <p className="ml-2 h-7">rss</p>
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
    //         rel="noopener noreferrer"
    //         target="_blank"
    //         href="https://github.com/vercel/next.js"
    //       >
    //         <ArrowIcon />
    //         <p className="ml-2 h-7">github</p>
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
    //         rel="noopener noreferrer"
    //         target="_blank"
    //         href="https://vercel.com/templates/next.js/portfolio-starter-kit"
    //       >
    //         <ArrowIcon />
    //         <p className="ml-2 h-7">view source</p>
    //       </a>
    //     </li>
    //   </ul>
    //   <p className="mt-8 text-neutral-600 dark:text-neutral-300">
    //     © {new Date().getFullYear()} MIT Licensed
    //   </p>
    // </footer>
  );
}
