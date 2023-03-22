import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Mahedi></Mahedi>
    </div>
  );
}

const Mahedi = (props) => {
  let [api, setapis] = useState([]);
  console.log(api);
  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/todos`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setapis(data));
  }, []);

  return (
    <div>
      {api.map((modon) => (
        <p className="total m-5 w-1/2 mx-auto">{modon.title}</p>
      ))}
      <div>
        <h1 className="text-4xl text-blue-400">mahedi red</h1>
        <h1 className="total">avle able to to:{api.length}</h1>
      </div>
      <div>
        <a role="button" class="btn">
          Link
        </a>
        <button type="submit" class="btn">
          Button
        </button>
        <input type="button" value="Input" class="btn" />
        <input type="submit" value="Submit" class="btn" />
        <input type="reset" value="Reset" class="btn" />
      </div>
    </div>
  );
};

export default App;
