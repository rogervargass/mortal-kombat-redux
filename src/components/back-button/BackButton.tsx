import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import "./style.css";

function BackButton() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <div className="back-button-container">
      <Button onClick={handleBack}>voltar</Button>
    </div>
  );
}

export default BackButton;
