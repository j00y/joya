const fs = require("fs");
const { capitalize, createFile } = require("../utils/utils");

const api = (name, lang) => {

  name = capitalize(name);
  const file = 'api';
  // throw an error if the file already exists
  if (fs.existsSync(file))
    throw new Error("A file with that name already exists.");

  createFile(lang, 'api', file, name)
};

module.exports = api;
