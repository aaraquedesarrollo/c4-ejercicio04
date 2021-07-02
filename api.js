const fetch = require("node-fetch");
require("dotenv").config();

const consultarLinea = async (idLinia) => {
  const urlApi = `${process.env.LINEAS_ENDPOINT}app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&filter=ID_LINIA=${idLinia}`;
  const resp = await fetch(urlApi);
  if (resp.ok) {
    const lineas = await resp.json();
    return lineas;
  }
};

const consultarParadas = async (codiLinia) => {
  const urlApi = `${process.env.PARADAS_ENDPOINT}${codiLinia}/estacions?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`;
  const resp = await fetch(urlApi);
  if (resp.ok) {
    const paradas = await resp.json();
    return paradas;
  }
};

module.exports = {
  consultarLinea,
  consultarParadas,
};
