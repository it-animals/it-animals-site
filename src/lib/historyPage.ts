import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getContentPath } from "./path";

const contentDirectory = path.join(getContentPath, "/history-page.md");
const historyPostDirectory = path.join(getContentPath, "/history");

export type historyPagePageInfo = { heading: string; description: string };
export type historyContentData = {
  date: string;
  heading: string;
  description: string;
  id: string;
};

export const getHistoryPageData = () => {
  const data = fs.readFileSync(contentDirectory, "utf8");
  return matter(data).data as historyPagePageInfo;
};

export const getHistoryContent = () => {
  const files = fs.readdirSync(historyPostDirectory);
  return files.map((file) => {
    const id = file.replace(".md", "");
    const filePath = path.join(historyPostDirectory, file);
    return {
      ...matter(fs.readFileSync(filePath)).data,
      id,
    };
  });
};
