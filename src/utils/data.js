import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'data');

export function getAboutData() {
  const filePath = path.join(postsDirectory, `about.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const aboutData = {
    ...data,
    content,
  };
  return aboutData;
}
