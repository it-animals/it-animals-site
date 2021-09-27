import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getContentPath } from "./path";

const contentDirectory = path.join(getContentPath, "/command");

export type contentCommandUserInfo = {
  name: string;
  email: string;
  telegram: string;
  job: string;
  pathSticker: string;
  tagline: string;
  link: string;
};

export const getCommandInfo = () => {
  const files = fs.readdirSync(contentDirectory);
  return files.map((file) => {
    const filePath = path.join(contentDirectory, file);
    return matter(fs.readFileSync(filePath)).data;
  });
};
