import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Hero Banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="Hero Title" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a Journey to save city from an
            immortal enemy
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="Play Icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="Info Icon" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
    </div>
  );
};

export default Home;
