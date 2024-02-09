import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import "./styles.css";

function Home() {
  const navigate = useNavigate();

  const handleStart = () => navigate("/battle");
  const handleShop = () => navigate("/shop");

  return (
    <main className="home-main">
      <section className="container home-content">
        <img
          className="logo"
          alt="Mortal Kombat"
          src="https://vignette.wikia.nocookie.net/logopedia/images/8/89/Mk2_logo.png/revision/latest?cb=20140315235821"
        />
        <div className="btns-container">
          <Button onClick={handleStart}>Start</Button>
          <Button onClick={handleShop}>Loja</Button>
        </div>
      </section>
    </main>
  );
}

export default Home;
