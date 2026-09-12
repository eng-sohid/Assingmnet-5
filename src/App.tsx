import "./App.css";
import Nav from "./Conponents/Nav";
import Banner from "./Conponents/Banner";
import Technologies from "./Conponents/Technologies";
import Toast from "./Conponents/Toast";
import { useEffect, useState } from "react";
import Footer from "./Conponents/Footer";

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
      <Technologies technologies={technologies} />
      <Toast />
      <Footer />
    </>
  );
}

export default App;
