const arrayDeObjetos = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H"
    },
    diasIngresado: 3,
    dieta: "Baja en fibra"
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M"
    },
    diasIngresado: 5,
    dieta: "Diabetes"
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M"
    },
    diasIngresado: 1,
    dieta: "Sin sal"
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H"
    },
    diasIngresado: 3,
    dieta: "Diabetes"
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H"
    },
    diasIngresado: 2,
    dieta: "Baja en fibra"
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M"
    },
    diasIngresado: 6,
    dieta: "Sin sal"
  }
];

const objetoInformativo = arrayConTodo => {
  const nPacientes = arrayConTodo.length;
  const nMayoresEdad = arrayConTodo.filter(elemento => elemento.paciente.edad > 18).length;
  const nHombresDiabeticos = arrayConTodo.filter(elemento => elemento.paciente.sexo === "H")
    .filter(elemento => elemento.dieta === "Diabetes").length;
  const totalDiasIngreso = arrayConTodo.reduce((acc, elemento) => acc + elemento.diasIngresado, 0);
  const pacientesMujeres = arrayConTodo.filter(elemento => elemento.paciente.sexo === "M");
  const mediaEdadMujeres = pacientesMujeres
    .reduce((acc, elemento) => acc + elemento.paciente.edad, 0) / pacientesMujeres.length;
  return {
    nPacientes, nMayoresEdad, nHombresDiabeticos, totalDiasIngreso, mediaEdadMujeres
  };
};

const infoFinal = objetoInformativo(arrayDeObjetos);
console.log(`Nº de pacientes: ${infoFinal.nPacientes}\n\
Nº de mayores de edad: ${infoFinal.nMayoresEdad}\n\
Nº de hombres diabéticos: ${infoFinal.nHombresDiabeticos}\n\
Total de días de ingreso: ${infoFinal.totalDiasIngreso}\n\
Media de edad de mujeres: ${infoFinal.mediaEdadMujeres}`);
