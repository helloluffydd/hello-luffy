import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ArticleMetadata {
  title: string;
  publishedAt: string;
  excerpt: string;
  coverImgAlt: string;
  coverImgSrc: string;
  tags: string[];
  draft?: boolean;
}

// function parseFrontmatter(fileContent: string) {
//   let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
//   let match = frontmatterRegex.exec(fileContent);
//   let frontMatterBlock = match![1];
//   let content = fileContent.replace(frontmatterRegex, '').trim();
//   let frontMatterLines = frontMatterBlock.trim().split('\n');
//   let metadata: Partial<ArticleMetada> = {};

//   frontMatterLines.forEach((line) => {
//     let [key, ...valueArr] = line.split(': ');
//     let value = valueArr.join(': ').trim();
//     value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
//     metadata[key.trim() as keyof ArticleMetada] = value;
//   });

//   return { metadata: metadata as ArticleMetada, content };
// }

function getMDXFiles(dir, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getMDXFiles(filePath, arrayOfFiles);
    } else if (path.extname(file) === '.mdx') {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
  // return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(rawContent);

  return { metadata: data, content };
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(file);
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

const ARTICLES_DIR = path.join(process.cwd(), 'public', 'articles');

export function getArticles() {
  return getMDXData(ARTICLES_DIR);
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();

  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
