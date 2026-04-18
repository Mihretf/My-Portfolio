import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const logsDirectory = path.join(process.cwd(), 'src', 'contents', 'logs');

export function getSortedLogsData() {
  // Get file names under /logs
  const fileNames = fs.readdirSync(logsDirectory);
  const allLogsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(logsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allLogsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllLogIds() {
  const fileNames = fs.readdirSync(logsDirectory);

  return fileNames.map((fileName) => {
    return {
      id: fileName.replace(/\.md$/, ''),
    };
  });
}

export async function getLogData(id: string) {
  const fullPath = path.join(logsDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Log entry '${id}' not found`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}