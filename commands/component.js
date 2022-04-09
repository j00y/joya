const fs = require("fs");
const { createFile, capitalize } = require("../utils/utils");

const component = (name, lang, type) => {
  name = capitalize(name);
  const dir = `./${name}`;

  // throw an error if the file already exists
  if (fs.existsSync(dir))
    throw new Error("A component with that name already exists.");

  // create the folder
  fs.mkdirSync(dir);

  // component
  createFile(lang, "component", `${dir}/${name}`, name);

  //props
  if (lang === "ts") createFile(lang, "props", `${dir}/${name}Props`, name);

  //test
  createFile(lang, "test", `${dir}/${name}.test`, name);

  //index
  createFile(lang, "index", `${dir}/index`, name);
};

module.exports = component;
