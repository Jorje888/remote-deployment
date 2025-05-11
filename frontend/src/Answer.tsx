import { useState, useEffect } from "react";

function Answer() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  async function getData() {
    const url = "http://63.178.22.145:3001/api/get-answer";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.error("Error fetching data:", response);
        throw new Error(
          `Response status: ${response.status} - ${await response.text()}`
        );
      }
      const json = await response.json();
      const resultString = json.result as string;
      setData(resultString);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Running every 0.5 seconds", count);
      getData();
      setCount((prevCounter) => prevCounter + 1);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return <span id="answer">{data}</span>;
}

export default Answer;
