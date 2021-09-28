export const addStaticPathPrefix = (str: string): string => {
  return `${process.env.BASE_PATH}${str}`;
};
