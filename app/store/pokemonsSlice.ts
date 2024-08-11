import { Pokemon } from '../api/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';

export interface PokemonsSliceInitialState {
  currentPokemons: Pokemon[];
  selectedPokemons: Pokemon[];
  currentDetails: Pokemon[];
  theme: Theme;
}

const initialState: PokemonsSliceInitialState = {
  currentPokemons: [],
  selectedPokemons: [],
  currentDetails: [],
  theme: 'dark',
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setCurrentPokemons: (state, action: PayloadAction<Pokemon[]>) => {
      state.currentPokemons = action.payload;
    },
    toggleSelectedPokemons: (state, action: PayloadAction<Pokemon>) => {
      const isSelected = !!state.selectedPokemons.find(
        (item) => item.name === action.payload.name
      );

      if (isSelected) {
        state.selectedPokemons = state.selectedPokemons.filter(
          (item) => item.name !== action.payload.name
        );
      } else {
        state.selectedPokemons.push(action.payload);
      }
    },
    unselectAllPokemons: (state) => {
      state.selectedPokemons = [];
    },
    setCurrentDetails: (state, action: PayloadAction<Pokemon[]>) => {
      state.currentDetails = action.payload;
    },
    toggleLayoutTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const {
  setCurrentPokemons,
  toggleSelectedPokemons,
  unselectAllPokemons,
  setCurrentDetails,
  toggleLayoutTheme,
} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
