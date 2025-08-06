import { useState } from "react";

export function useInput(initData) {
  const [data, setName] = useState(initData);
  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  const clickHandler = () => {
    alert(data);
  };

  return [data, onChangeHandler, clickHandler];
}
