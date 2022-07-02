import React from "react";
import { useGetPlayersQuery } from "../store/services/playersApi";
import { useGetSinglePlayerQuery } from "../store/services/singlePlayerApi";

const RTKComponent = () => {
  const {
    isLoading: isPlayersLoading,
    isError: isPlayersError,
    data: playersData,
  } = useGetPlayersQuery();
  const { isLoading, isError, data } = useGetSinglePlayerQuery();

  console.log("RTKQ isPlayersLoading ::", isPlayersLoading);
  console.log("RTKQ isPlayersError ::", isPlayersError);
  console.log("RTKQ playersData ::", playersData);

  console.log("---------------------- RTKQ ------------------------");

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
