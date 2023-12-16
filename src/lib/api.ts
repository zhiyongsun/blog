import fs from 'fs';
import path, { resolve } from 'path';
import matter from 'gray-matter';
import { paginationOffset } from '@/config/pagination';
import { PostType } from '@/types/post';

const postsDirectory = resolve(process.cwd(), '_posts');


// 递归读取博客目录下的所有文件和文件夹路径
const getBlogPaths = (directory: string) => {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  let paths: any[] = [];

  entries.forEach((entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      // 递归处理子目录
      paths = paths.concat(getBlogPaths(entryPath));
    } else {
      // 将文件路径添加到数组中
      const fullPath = path.relative(postsDirectory, entryPath);
      if (fullPath.endsWith('.md')) {
        paths.push(fullPath.replace(/\.md$/, ''));
      }
    }
  });

  return paths;
};

export const getPostSlugs = () => getBlogPaths(postsDirectory);
// export const getPostSlugs = () => fs.readdirSync(postsDirectory);


export const getMaxPage = () => {
  const postNum = getPostSlugs().length;
  return Math.ceil(postNum / paginationOffset);
};

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  // const realSlug = slug.replace(/\.md$/, '');
  // const realSlug = path.basename(fullPath.replace(/\.md$/, ''));
  // const fullPath = resolve(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  try {
    data.date = data?.date ? new Date(data.date).toISOString() : '';
  } catch (error) {
    data.date = null;
    console.log(data, error)
    return {};
  }

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items as Partial<PostType>;
};

type Field = keyof PostType;

export const getAllPosts = (fields: Field[] = []) => {
  const slugs = getPostSlugs();
  
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields)).filter(x=>Object.keys(x).length>0)
    .sort((post1, post2) => (post1.date! > post2.date! ? -1 : 1));
  return posts;
};
