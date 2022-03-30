const fs = require("fs");
const component = (name, lang, type) => {
  const {
    component,
    props,
    test,
    index,
  } = require(`../templates/react-${type}.js`);
  const { capitalize } = require("../../utils");
  name = capitalize(name);
  const dir = `./${name}`;

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
    `${dir}/${name}.${lang === "ts" ? "tsx" : "jsx"}`,
    component(name),
    writeFileErrorHandler
  );
  if (lang === "ts") {
    // componentProps
    fs.writeFile(
      `${dir}/${name}Props.${lang}`,
      props(name),
      writeFileErrorHandler
    );
  }

  // component.test
  fs.writeFile(
    `${dir}/${name}.test.${lang === "ts" ? "tsx" : "jsx"}`,
    test(name),
    writeFileErrorHandler
  );
  // index
  fs.writeFile(`${dir}/index.${lang}`, index(name), writeFileErrorHandler);
  console.log(`${name} ${type} created properly!`)
};

module.exports = component;
