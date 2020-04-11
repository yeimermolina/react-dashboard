import React, { useState, useEffect } from "react";

const Prueba = ({ count }) => {
  useEffect(() => {
    console.log("hijo", count);

    return () => {
      console.log("unmount");
    };
  }, [count]);

  return <div>{count}</div>;
};

export default function Profile() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("padre");
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>inc</button>
      {count % 2 === 0 ? <Prueba count={count} /> : <div>Nada que mostrar</div>}
    </div>
  );
}
