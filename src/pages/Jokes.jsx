import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [entertainment, setEntertainment] = useState(
    "Fun fact: Did you know the Eiffel Tower can be 15 cm taller during the summer?"
  );

  useEffect(() => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        if (typeof res.data === "object" && res.data !== null) {
          setMyData([res.data]);
        } else {
          console.error(
            "Received data is not in the expected format:",
            res.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">JOKES</h1>
      {myData.map((post, index) => {
        const { setup, punchline } = post;
        return (
          <div
            className="max-w-md w-full bg-white shadow-md rounded-lg border border-gray-300 mb-8"
            key={index}>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{setup}</h2>
              <p className="text-lg font-semibold text-gray-600">{punchline}</p>
            </div>
          </div>
        );
      })}

      {/* Entertainment Section */}
      <div className="max-w-md w-full bg-white shadow-md rounded-lg border border-gray-300 mb-8">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Entertainment
          </h2>
          <p className="text-lg font-semibold text-gray-600">{entertainment}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
