import React from "react";
import { useGetPlayersQuery } from "../store/storeWithRTKQuery";

const RTKComponent = () => {
  const { isLoading, isError, data } = useGetPlayersQuery();

  console.log("RTKQ isLoading ::", isLoading);
  console.log("RTKQ isError ::", isError);
  console.log("RTKQ data ::", data);

  return (
    <div
      style={{
        backgroundColor: "cyan",
        padding: "20px",
        minHeight: "100px",
      }}
    >
      RTKComponent
    </div>
  );
};

export default RTKComponent;
