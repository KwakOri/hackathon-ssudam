"use client";

import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className={"w-full h-full flex justify-center items-center"}>
      <FadeLoader color={"#3E746D"} />
    </div>
  );
};

export default Loading;
