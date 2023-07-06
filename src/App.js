import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import botonModoOscuro from "./components/img/sun.png";
import botonModoClaro from "./components/img/moon.png";
import Footer from "./components/Footer";

function App() {
  const [cards, setCards] = useState([]);
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [keywords, setKeywords] = useState("");

  //Iniciamos nuestro local storage
  let initKeywords = JSON.parse(localStorage.getItem("lastKeywords"));
  if (!initKeywords) {
    initKeywords = [];
  }

  //Funcion para borrar el local storage
  const handleClearKeywords = () => {
    localStorage.clear();
    setLastKeywords([]);
  };

  const [lastKeywords, setLastKeywords] = useState(initKeywords);
  const baseUrl = "https://images-api.nasa.gov/search";
  const defaultQueryParams = {
    q: "artemis",
    media_type: "image",
    description: "",
    page_size: 12,
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
    setLastKeywords((prevKeywords) => {
      if (keywords.trim() !== "" && !prevKeywords.includes(keywords)) {
        return [keywords, ...prevKeywords.slice(0, 11)];
      }
      return prevKeywords;
    });
  };

  const buildUrl = (baseUrl, queryParams) => {
    const url = new URL(baseUrl);
    Object.keys(queryParams).forEach((key) =>
      url.searchParams.append(key, queryParams[key])
    );
    return url.toString();
  };

  useEffect(() => {
    const storedKeywords = localStorage.getItem("lastKeywords");
    if (storedKeywords) {
      setLastKeywords(JSON.parse(storedKeywords));
    }
    fetchCards({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("lastKeywords", JSON.stringify(lastKeywords));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastKeywords]);

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("tema") === "dark"
  );

  // Función para manejar el cambio de tema
  const handleTemaClick = () => {
    setIsDarkMode((prevMode) => !prevMode);
    const nuevoModo = isDarkMode ? "light" : "dark";
    document.querySelector("html").setAttribute("data-bs-theme", nuevoModo);
    localStorage.setItem("tema", nuevoModo);
  };

  //funcion para persistir el tema
  useEffect(() => {
    const temaActual = localStorage.getItem("tema");
    if (temaActual) {
      document.querySelector("html").setAttribute("data-bs-theme", temaActual);
    }
  }, []);

  return (
    <>
      <Navbar
        brand="NASA Artemis - Image Gallery"
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
                  Previous Page
                </button>
              </li>
            )}
            {info.next && (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next Page
                </button>
              </li>
            )}
          </ul>
        </nav>

        <a href="#t" onClick={handleTemaClick}>
          <img
            className="botonDeModo"
            src={isDarkMode ? botonModoOscuro : botonModoClaro}
            alt="botonModo"
            title="Modo Oscuro / Modo Claro"
          />
        </a>
      </div>

      {isLoading ? (
        <div className="container loadingData">Loading data...</div>
      ) : (
        <CardList cards={cards} />
      )}

      <div className="container pb-3">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev && (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous Page
                </button>
              </li>
            )}
            {info.next && (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next Page
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className="lastFilteredKeywords">
        <h4 className="lastK">Last filtered Keywords</h4>
        <div className="lastKeywords-grid">
          {lastKeywords.map((keyword, index) => (
            <div key={index} className="lastKeywords-item">
              {keyword}
            </div>
          ))}
        </div>
        <div className="clear">
          <button
            className="btn btn-warning btn-sm"
            id="clearKeywords"
            onClick={handleClearKeywords}
          >
            Clear Keywords
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
