import "./styles.css";

interface CharacterCardProps {
  id: number;
  image: string;
  actualPlayer: "player1" | "player2" | null;
  onSelectCharacter: (id: number) => void;
  disabled: boolean;
}

function CharacterCard({
  id,
  image,
  actualPlayer,
  onSelectCharacter,
  disabled,
}: CharacterCardProps) {
  function handleSelectPlayer() {
    onSelectCharacter(id);
  }
  return (
    <button
      className={`box-character box-character-${actualPlayer}`}
      onClick={handleSelectPlayer}
      style={{ backgroundImage: `url(${image})` }}
      disabled={disabled}
    />
  );
}

export default CharacterCard;
