import { useState } from "react";

export const Contador = ({ valor }) => {
  const [contador, setContador] = useState(valor);

  const incrementar = () => {
    setContador(contador + 1);
  };
  return (
    <>
      <h1>Contador</h1>
      <h3>{contador}</h3>
      <hr />
      <button onClick={incrementar}>Incementar</button>
    </>
  );
};
