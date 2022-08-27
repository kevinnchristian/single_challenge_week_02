import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';


import {
  ICharacters,
  ICharactersState
} from '../../../types';

const initialState = {
  characters: []
}

const CharactersData = createSlice({
  name: 'charactersData',
  initialState,
  reducers: {
    changeInitialState: (state: ICharacters, actions) => {
      state.characters = actions.payload;
    },
    changeFavoriteState: (state: ICharacters, actions) => {
      state.characters.filter(item => {
        if (item.id === actions.payload)
          return item.favorite = !item.favorite;
      });
    }
  }
});

export const { changeInitialState, changeFavoriteState } = CharactersData.actions;

export const charactersStateData = (state: ICharactersState) => state.characters.characters;

export default CharactersData.reducer;