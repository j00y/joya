const fs = require("fs");
const { capitalize, createFile } = require("../utils/utils");

const component = (name, lang, type) => {
  name = capitalize(name);
  const dir = `./${name}Page`;

  // throw an error if the file already exists
  if (fs.existsSync(dir))
    throw new Error("A component with that name already exists.");

  // create the folder
  fs.mkdirSync(dir);

  // page
  createFile(lang, "page", `${dir}/${name}Page`, name);

  // layout
  createFile(lang, "page-layout", `${dir}/${name}Layout`, name);

  // context
  createFile(lang, "context", `${dir}/${name}Context`, name);
};

module.exports = component;
