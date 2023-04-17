import { useState } from "react";

export default function Music() {
  const [data, setData] = useState();

  function handleDatas() {
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((data) =>
      data.json().then((data) => setData(data.title))
    );
  }

  return (
    <div>
      <button onClick={handleDatas}>CLICK ME</button> {data && data}
    </div>
  );
}
