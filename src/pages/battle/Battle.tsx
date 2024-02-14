import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import MK_THEME from "../../assets/audio/theme_music.mp3";
import BackButton from "../../components/back-button/BackButton";
import CharacterCard from "../../components/character-card/CharacterCard";
import SelectedCharacter from "../../components/selected-character/SelectedCharacter";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Character } from "../../types/Character";
import "./styles.css";

function Battle() {
  const [characterPlayerOne, setCharacterPlayerOne] =
    useState<Character | null>(null);
  const [characterPlayerTwo, setCharacterPlayerTwo] =
    useState<Character | null>(null);
  const charactersAvailable = useAppSelector(
    (state) => state.characters.charactersAvailable
  );

  const searchActualPlayer = (
    player1: Character | null,
    player2: Character | null
  ) => {
    if (!player1) {
      return "player1";
    }
    if (!player2) {
      return "player2";
    }
    return null;
  };

  const idSelectedCharacters = [
    characterPlayerOne && characterPlayerOne.id,
    characterPlayerTwo && characterPlayerTwo.id,
  ];

  const actualPlayer = searchActualPlayer(
    characterPlayerOne,
    characterPlayerTwo
  );

  const checkIfCharacterIsSelected = (
    idSelectedCharacters: (number | null)[],
    idActualCharacter: number
  ) => {
    return idSelectedCharacters.includes(idActualCharacter);
  };

  function handleSelectCharacter(idCharacter: number) {
    const selectedCharacter = charactersAvailable.find(
      (character) => character.id === idCharacter
    );

    if (!selectedCharacter) return;

    if (actualPlayer === "player1") {
      setCharacterPlayerOne(selectedCharacter);
    } else {
      setCharacterPlayerTwo(selectedCharacter);
    }
  }

  function handleRemoveCharacter(player: "player1" | "player2") {
    if (player === "player1") {
      setCharacterPlayerOne(null);
    } else {
      setCharacterPlayerTwo(null);
    }
  }

  function SelectedCharacterContainer({
    character,
    actualPlayer,
    onRemove,
  }: {
    character: Character | null;
    actualPlayer: "player1" | "player2";
    onRemove: () => void;
  }) {
    return (
      <div className="container-character-selected">
        {character && (
          <SelectedCharacter
            name={character.name}
            image={character.imageDetail}
            onRemoveCharacter={onRemove}
            actualPlayer={actualPlayer}
          />
        )}
      </div>
    );
  }

  return (
    <main className="battle-main">
      <section className="container battle-content">
        <img
          className="logo"
          alt="Mortal Kombat"
          src="https://vignette.wikia.nocookie.net/logopedia/images/8/89/Mk2_logo.png/revision/latest?cb=20140315235821"
        />
        <h1 className="title">ESCOLHA SEU LUTADOR</h1>
        <div className="container-selection">
          <SelectedCharacterContainer
            character={characterPlayerOne}
            actualPlayer="player1"
            onRemove={() => handleRemoveCharacter("player1")}
          />
          <section className="container-list">
            {charactersAvailable.map((character) => {
              const isDisabled =
                !actualPlayer ||
                checkIfCharacterIsSelected(idSelectedCharacters, character.id);

              return (
                <CharacterCard
                  key={character.id}
                  id={character.id}
                  image={character.imageOnList}
                  actualPlayer={actualPlayer}
                  onSelectCharacter={handleSelectCharacter}
                  disabled={isDisabled}
                />
              );
            })}
          </section>
          <SelectedCharacterContainer
            character={characterPlayerTwo}
            actualPlayer="player2"
            onRemove={() => handleRemoveCharacter("player2")}
          />
        </div>
      </section>
      <BackButton />
      <ReactAudioPlayer
        autoPlay
        preload="metadata"
        src={MK_THEME}
        volume={0.2}
        loop
      />
    </main>
  );
}

export default Battle;
