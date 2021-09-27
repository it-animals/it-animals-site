import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getContentPath } from "./path";

const contentDirectory = path.join(getContentPath, "/main-page.md");

export type contentMainPageInfo = { heading: string; accent: string };

export const getMainPageInfo = () => {
  const data = fs.readFileSync(contentDirectory, "utf8");
  return matter(data).data as contentMainPageInfo;
};
