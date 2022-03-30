const fs = require("fs");
const component = (name, lang) => {
  const {
    context,
    index,
    page,
  } = require(`../templates/react-page.js`);
  const { capitalize } = require('../../utils')
  name = capitalize(name)
  const dir = `./${name}Page`;

  // throw an error if the file already exists
  if (fs.existsSync(dir))
    throw new Error("A component with that name already exists.");

  // create the folder
  fs.mkdirSync(dir);

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  // component
  fs.writeFile(
    `${dir}/${name}Container.${lang === "ts" ? "tsx" : "jsx"}`,
    page(name),
    writeFileErrorHandler
  );

  // index
  fs.writeFile(
    `${dir}/index.${lang === "ts" ? "tsx" : "jsx"}`,
    index(name),
    writeFileErrorHandler
  );
  // page
  fs.writeFile(`${dir}/${name}Context.${lang}`, context(name, lang), writeFileErrorHandler);
};

module.exports = component;
