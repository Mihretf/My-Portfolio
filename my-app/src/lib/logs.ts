import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const logsDirectory = path.join(process.cwd(), 'src/content/logs');

export function getSortedLogsData() {
  // Get file names under /src/content/logs
  const fileNames = fs.readdirSync(logsDirectory);
  const allLogsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(logsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string; tags: string[] }),
    };
  });

  // Sort logs by date
  return allLogsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}