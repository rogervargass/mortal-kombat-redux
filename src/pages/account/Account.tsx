import BackButton from "../../components/back-button/BackButton";
import { useAppSelector } from "../../hooks/useAppSelector";
import "./styles.css";

function Account() {
  const { user } = useAppSelector((state) => state.user);
  return (
    <main className="container">
      <h1>Meu Perfil</h1>
      <section>
        <h2>Info</h2>
        <p>Email: {user.email}</p>
      </section>
      <BackButton />
    </main>
  );
}

export default Account;
