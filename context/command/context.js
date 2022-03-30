const fs = require("fs");
const component = (name, lang, type) => {
  const { context } = require(`../templates/react-${type}.js`);
  const { capitalize } = require("../../utils");
  name = capitalize(name);
  const file = `${name}Context.${lang}`;

  // throw an error if the file already exists
  if (fs.existsSync(file))
    throw new Error("A file with that name already exists.");

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  // context
  fs.writeFile(file, context(name, lang), writeFileErrorHandler);
  console.log(`${name} ${type} created properly!`)
};

module.exports = component;
