import React from "react";
import { Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Spinner style={{ height: "50%" }} />
    </div>
  );
};

export default Loading;
