import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getContentPath, getPublicPath } from "./path";

const contentDirectory = path.join(getContentPath, "/history-page.md");
const historyPostDirectory = path.join(getContentPath, "/history");
const historyMediaDirectory = path.join(getPublicPath, "/images/history");

export type historyPagePageInfo = { heading: string; description: string };
export type historyContentData = {
  date: string;
  heading: string;
  description: string;
  id: string;
  content: string;
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
      content: matter(fs.readFileSync(filePath)).content,
      id,
    };
  });
};

export const getHistoryContentById = (id: string | number) => {
  const files = fs.readdirSync(historyPostDirectory);
  const neededFile = files.find((item) => item.includes(id.toString()));
  const filePath = path.join(historyPostDirectory, neededFile!);
  return {
    ...matter(fs.readFileSync(filePath)).data,
    content: matter(fs.readFileSync(filePath)).content,
  };
};

export const getHistoryMediaContentById = (id: string | number) => {
  const directories = fs.readdirSync(historyMediaDirectory);
  const needDir = directories.includes(id.toString());
  if (needDir) {
    const files = fs.readdirSync(path.join(historyMediaDirectory, `/${id}`));
    return files.map(
      (file) => `${process.env.BASE_PATH}/images/history/${id}/${file}`
    );
  }
  return [];
};
