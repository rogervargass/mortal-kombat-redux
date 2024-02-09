import Button from "../button/Button";
import Loading from "../loading/Loading";
import "./styles.css";

export type SelectedCharacterProps = {
  name: string;
  image: string;
  onRemoveCharacter: () => void;
  actualPlayer: "player1" | "player2";
};

function SelectedCharacter({
  name,
  image,
  onRemoveCharacter,
  actualPlayer,
}: SelectedCharacterProps) {
  return (
    <>
      <h2 className="character-name">{name}</h2>
      <div
        className={`
        selected-character 
        selected-character-${actualPlayer}
      `}
      >
        {!image && <Loading />}
        {image && <img src={image} />}
      </div>
      <Button onClick={onRemoveCharacter}>Remover</Button>
    </>
  );
}

export default SelectedCharacter;
