import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import botonModoOscuro from "./components/img/botonModoOscuro.jpg";
import botonModoClaro from "./components/img/botonModoClaro.jpg";
import Footer from "./components/Footer";


function App() {
  const [cards, setCards] = useState([]);
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [keywords, setKeywords] = useState("");
  const baseUrl = "https://images-api.nasa.gov/search";
  const defaultQueryParams = {
    q: "artemis",
    media_type: "image",
    description: "",
    page_size: 9,
  };

  const fetchCards = (queryParams) => {
    setIsLoading(true);
    const url = buildUrl(baseUrl, { ...defaultQueryParams, ...queryParams });
    axios
      .get(url)
      .then((response) => {
        const data = response.data.collection;
        setCards(data.items);
        setInfo({
          prev: data.links.find((link) => link.rel === "prev"),
          next: data.links.find((link) => link.rel === "next"),
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  
  const handleNextPage = () => {
    if (info.next) {
      const queryParams = parseQueryParams(info.next.href);
      fetchCards(queryParams);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePreviousPage = () => {
    if (info.prev) {
      const queryParams = parseQueryParams(info.prev.href);
      fetchCards(queryParams);
      window.scrollTo(0, 0);
    }
  };
  
  const parseQueryParams = (url) => {
    const queryString = url.split("?")[1];
    const params = new URLSearchParams(queryString);
    const queryParams = {};
    for (const [key, value] of params.entries()) {
      queryParams[key] = value;
    }
    return queryParams;
  };
  
  
  const handleApplyFilter = () => {
    fetchCards({ description: keywords });
  };

  const buildUrl = (baseUrl, queryParams) => {
    const url = new URL(baseUrl);
    Object.keys(queryParams).forEach((key) =>
      url.searchParams.append(key, queryParams[key])
    );
    return url.toString();
  };

  useEffect(() => {
    fetchCards({});
  }, []);

    // Función para manejar el cambio de tema
    const handleTemaClick = () => {
      const modoActual = document.querySelector("html").getAttribute("data-bs-theme");
      if (modoActual === null) {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        localStorage.setItem("tema", "dark");
        return;
      }
      const nuevoModo = modoActual === "light" ? "dark" : "light";
      document.querySelector("html").setAttribute("data-bs-theme", nuevoModo);
      localStorage.setItem("tema", nuevoModo);
    };



  return (
    <>
      <Navbar
        brand="NASA Artemis - Image gallery"
        keywords={keywords}
        onKeywordsChange={setKeywords}
        onApplyFilter={handleApplyFilter}
      />

      <div className="container py-5">
        
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev && (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            )}
            {info.next && (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            )}
          </ul>

        </nav>

        <a href="#q" onClick={handleTemaClick}>
            <img
              className="botonDeModo"
              src={
                document.querySelector("html").getAttribute("data-bs-theme") ===
                "light"
                  ? botonModoOscuro
                  : botonModoClaro
              }
              alt="botonModo"
              title="Modo Oscuro / Modo Claro"
            />
          </a>
       
      </div>

      {isLoading ? (
        <div className="container">Loading data...</div>
      ) : (
        <CardList cards={cards} />
      )}

      <div className="container pb-5">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev && (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            )}
            {info.next && (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <Footer />

    </>
  );
}

export default App;
