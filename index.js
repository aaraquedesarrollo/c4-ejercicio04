const chalk = require("chalk");
const { consultarLinea, consultarParadas } = require("./api");

const informarErrores = true;
const colorUsuario = false;

const imprimirLinea = (linea) => {
  const nombreLinea = linea.features[0].properties.NOM_LINIA;
  const descripcioLinea = linea.features[0].properties.DESC_LINIA;
  if (!colorUsuario) {
    const colorLinea = chalk.hex(
      `#${linea.features[0].properties.COLOR_LINIA}`
    );
    console.log(colorLinea(nombreLinea), colorLinea(descripcioLinea));
    return;
  }
  const chalkUsuario = chalk.hex(colorUsuario);
  console.log(chalkUsuario(nombreLinea), chalkUsuario(descripcioLinea));
};

const comprobarLinea = (linea) => {
  if (linea.totalFeatures === 0) {
    if (!informarErrores) {
      process.exit(1);
    }
    console.log(chalk.red.bold("No existe la linea"));
  }
  imprimirLinea(linea);
};

(async () => {
  comprobarLinea(await consultarLinea(1));
})();
