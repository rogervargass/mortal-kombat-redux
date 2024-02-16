import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { useAppSelector } from "../../hooks/useAppSelector";
import "./styles.css";

function Home() {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  const handleStart = () => navigate("/battle");
  const handleShop = () => navigate("/shop");
  const handleGallery = () => navigate("/gallery");
  const handleLogin = () => navigate("/login");
  const handleMyAccount = () => navigate("/my-account");

  return (
    <main className="home-main">
      <div className="btn-login-container">
        {user.email ? (
          <Button onClick={handleMyAccount}>Perfil</Button>
        ) : (
          <Button onClick={handleLogin}>Entrar</Button>
        )}
      </div>
      <section className="container home-content">
        <img
          className="logo"
          alt="Mortal Kombat"
          src="https://vignette.wikia.nocookie.net/logopedia/images/8/89/Mk2_logo.png/revision/latest?cb=20140315235821"
        />
        <div className="btns-container">
          <Button onClick={handleStart}>Start</Button>
          <Button onClick={handleShop}>Loja</Button>
          <Button onClick={handleGallery}>Galeria</Button>
        </div>
      </section>
    </main>
  );
}

export default Home;
