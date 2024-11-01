import "./TitleCards.css";
import { useEffect, useRef, useState } from "react";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2M5ZDFlNTA2ZDcwNmVkYTNlYzhhNTBlNzJiMTA3YyIsIm5iZiI6MTczMDQ0MjU0Mi41NzE3NzIzLCJzdWIiOiI2NzI0NzNhZjEyZDFhMDczYTM4ZDczNmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zLNrk9F3A20S4sx39GmFGplS0yOYDoil3MbG3PyFz5w",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
              />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
