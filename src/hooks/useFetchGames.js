import { useState, useEffect } from "react";

export const useFetchGames = () => {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("../gamedata.json")
        .then((response) => response.json())
        .then((data) => setGameData(data));
    };

    fetchData();
  }, []);

  return [gameData];
};
