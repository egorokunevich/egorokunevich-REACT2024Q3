import { Pokemon } from '../api/reduxApi';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PokemonsSliceInitialState {
  currentPokemons: Pokemon[];
  selectedPokemons: Pokemon[];
  currentDetails: Pokemon[];
}

const initialState: PokemonsSliceInitialState = {
  currentPokemons: [],
  selectedPokemons: [],
  currentDetails: [],
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
  },
});

export const {
  setCurrentPokemons,
  toggleSelectedPokemons,
  unselectAllPokemons,
  setCurrentDetails,
} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
