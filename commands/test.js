const fs = require("fs");
const { capitalize, createFile } = require("../utils/utils");

const context = (name, lang, type) => {
  // const { context } = require(`../templates/react-${type}.js`);
  name = capitalize(name);
  const file = `${name}.test`;
  // throw an error if the file already exists
  if (fs.existsSync(file))
    throw new Error("A file with that name already exists.");

  createFile(lang, 'test', file, name)
};

module.exports = context;
