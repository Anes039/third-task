import Popup from "./components/Popup";
import React, { useState, useEffect } from "react";
import "./App.css";
import { HashLoader } from "react-spinners";

function App() {
  const [isTriggered, setIsTriggered] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="center_container">
          <HashLoader  color="#36d7b7" />
        </div>
      ) : null}

      {!loading ? (
        <div>
          <menu>
            <br></br>
            <button className="open" onClick={() => setIsTriggered(true)}>
              Open Popup
            </button>
          </menu>
          <Popup trigger={isTriggered} setTrigger={setIsTriggered} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
