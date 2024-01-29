import { test } from "../api";
import { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    const data = test().then((data) => console.log(data));
    console.log(data);
  }, []);
  return <div className="py-32 px-16 text-white">helo</div>;
}
