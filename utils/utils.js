const fs = require("fs");
const { dirname } = require("path");
const path = require("path");

const writeFileErrorHandler = (err) => {
  if (err) throw err;
};

const extractFileContent = (err, data, fileName, name) => {
  const parsedData = data.replace(/NAME/g, name);
  fs.writeFile(fileName, parsedData, writeFileErrorHandler);
};

const getExtension = (fileType, lang) => {
  switch (fileType) {
    case "component":
    case "test":
    case "page":
    case "page-layout":
    case "class-component":
      return `${lang}x`;
    case "index":
    case "props":
    case "context":
    case "api":
      return lang;
    default:
      return lang;
  }
};
exports.createFile = (lang, fileType, fileName, name) => {
  const extension = getExtension(fileType, lang);
  fs.readFile(
    path.resolve(__dirname, `../templates/react-${fileType}.${extension}`),
    "utf-8",
    (err, data) => {
      extractFileContent(err, data, `${fileName}.${extension}`, name);
    }
  );
};

exports.capitalize = (word) => {
  const result = word.split("");
  result[0] = result[0].toUpperCase();
  return result.join("");
};
