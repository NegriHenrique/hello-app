import React, { useState, useEffect } from "react";
import Parser from "html-react-parser";
import axios from "axios";
import "./App.css";

function App() {
  const [hello, setHello] = useState("&aacute");

  useEffect(() => {
    async function getData() {
      const country = await axios.get(
        "http://ip-api.com/json/?fields=countryCode"
      );

      if (country.data) {
        const response = await axios.get(
          `https://fourtonfish.com/hellosalut/?cc=${country.data.countryCode}`
        );

        setHello(response.data.hello);
      }
    }

    getData();
  }, []);

  return (
    <div className="App">
      <h1>{Parser(hello)}</h1>
    </div>
  );
}

export default App;
