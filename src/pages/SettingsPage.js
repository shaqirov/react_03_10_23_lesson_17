import { useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";

export function SettingsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const colorRef = useRef(null);
  const inputRef = useRef(null);

  function changeColor(e) {
    setSearchParams((searchParams) => {
      searchParams.set("color", e.target.value);
      return searchParams;
    });
  }

  function getParams() {
    const color = searchParams.get("color");
    inputRef.current.value = color;
    colorRef.current.style.backgroundColor = color;
  }

  useEffect(() => {
    getParams();
  }, [inputRef]);

  function click() {
    const color = searchParams.get("color");
    colorRef.current.style.backgroundColor = color;
  }

  return (
    <>
      <h1>Settings</h1>
      <input ref={inputRef} type="color" onChange={changeColor} />
      <button onClick={click}>get params</button>
      <div ref={colorRef} className="block"></div>
    </>
  );
}
