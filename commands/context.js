const fs = require("fs");
const { capitalize, createFile } = require("../utils/utils");

const context = (name, lang, type) => {
  // const { context } = require(`../templates/react-${type}.js`);
  name = capitalize(name);
  const file = `${name}Context`;
  // throw an error if the file already exists
  if (fs.existsSync(file))
    throw new Error("A file with that name already exists.");

  createFile(lang, 'context', file, name)
};

module.exports = context;
