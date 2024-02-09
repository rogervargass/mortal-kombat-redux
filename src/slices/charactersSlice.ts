import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CHARACTERS from "../data/characters.json";
import { Character } from "../types/Character";

type CharacterToVote = Character & { votes: number };

interface CharactersState {
  charactersAvailable: Character[];
  charactersToBuy: Character[];
  charactersToVote: CharacterToVote[];
  totalVotes: number;
}

const initialState: CharactersState = {
  charactersAvailable: CHARACTERS.slice(0, 8),
  charactersToBuy: CHARACTERS.slice(8, 10),
  charactersToVote: CHARACTERS.slice(10, 12).map((character) => ({
    ...character,
    votes: 50,
  })),
  totalVotes: 100,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<Character>) => {
      state.charactersAvailable.push(action.payload);
    },
    voteCharacter: (state, action: PayloadAction<number>) => {
      const character = state.charactersToVote.find(
        (character) => character.id === action.payload
      );

      if (character) {
        character.votes += 1;
        state.totalVotes += 1;

        state.charactersToVote.sort((a, b) => b.votes - a.votes);
      }
    },
  },
});

export const { addCharacter, voteCharacter } = charactersSlice.actions;
export default charactersSlice.reducer;
