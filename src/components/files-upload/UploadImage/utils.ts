export const getURLData = (url: string) => {
  const fileName = url.slice(url.lastIndexOf("/"));
  return [
    fileName.slice(1, fileName.indexOf(".")),
    fileName.slice(fileName.lastIndexOf(".") + 1).toUpperCase(),
  ];
};
