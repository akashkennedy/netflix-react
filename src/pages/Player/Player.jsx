import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2M5ZDFlNTA2ZDcwNmVkYTNlYzhhNTBlNzJiMTA3YyIsIm5iZiI6MTczMDQ0MjU0Mi41NzE3NzIzLCJzdWIiOiI2NzI0NzNhZjEyZDFhMDczYTM4ZDczNmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zLNrk9F3A20S4sx39GmFGplS0yOYDoil3MbG3PyFz5w",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="Back Arrow Icon"
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        src={`https://youtube.com/embed/${apiData.key}`}
        title="Trailer"
        allowFullScreen
        frameBorder="0"
        width="90%"
        height="90%"
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
