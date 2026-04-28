const cursos = {
  nombre: "React",
  duracion: "20 horas",
};

const obetenerCursosGratis = (num1, num2) => {
  return num1 + num2;
};

export const HolaMundo = () => {
  // const nombre = "Alejandro";

  return (
    <>
      <div>
        <code>{JSON.stringify(cursos)}</code>
        <h1>{obetenerCursosGratis(3, 5)}</h1>
      </div>
    </>
  );
};
