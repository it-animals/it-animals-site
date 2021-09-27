import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getContentPath } from "./path";

const contentDirectory = path.join(getContentPath, "/command-page.md");

export type contentCommandPageInfo = { heading: string; description: string };

export const getCommandPageInfo = () => {
  const data = fs.readFileSync(contentDirectory, "utf8");
  return matter(data).data as contentCommandPageInfo;
};
