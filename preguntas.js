const inquirer = require("inquirer");

const preguntar = async()=>{
  const respuesta = await inquirer.prompt([
    {
      name:"decision",
      type: "list",
      message: "¿Qué tipo de transporte quiere consultar?",
      choices: [
        {
          value: "metro",
          name: "metro"
        },
        {
          value: "bus",
          name: "bus"
        },
      ],
    },
    {
      name:"eleccionBus",
      message: "No tenemos información disponible sobre los buses",
      type: "text",
      when: (respuesta) => respuesta.decision === "bus"
    },
    {
      name: "eleccionMetro",
      message: "¿Qué información extra quiere obtener de cada parada?",
      type: "list",
      when: (respuesta) => respuesta.decision === "metro",
      choices:[
        {
          value:"coordenadas",
          name:"coordenadas"
        },
        {
          value:"fecha",
          name:"fecha de inauguración"
        },
      ],
    },
    {
      name: "errores",
      message: "¿Quiere que le informemos de los errores",
      type: "list",
      when: (respuesta) => respuesta.decision === "metro",
      choices: [
        {
          value: "si",
          name: "si"
        },
        {
          value:"no",
          name:"no",
        },
      ],
    },
  ]);
};

preguntar();
