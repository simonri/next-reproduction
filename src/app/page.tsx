"use client";

import { exampleAction } from "./actions/example-action";

export default function Home() {
  const handleClick = () => {
    exampleAction({
      text: "Hello there",
    });
  }

  return (
    <button onClick={handleClick}>Hello there</button>
  );
}
