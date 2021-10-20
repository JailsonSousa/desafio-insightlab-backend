export const symbolRemover = (str: string) => {
  return str.replace(/[^\w\s]/gi, '');
};
