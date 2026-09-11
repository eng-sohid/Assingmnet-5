import "./App.css";
import Nav from "./Conponents/Nav";
import Banner from "./Conponents/Banner";
import Technologies from "./Conponents/Technologies";
import { useEffect, useState } from "react";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/Data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Nav />
      <Banner />
      <Technologies />
    </>
  );
}

export default App;
