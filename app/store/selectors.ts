import { RootState } from '.';

export const getCurrentPokemonsSelector = (store: RootState) =>
  store.pokemons.currentPokemons;

export const getSelectedPokemonsSelector = (store: RootState) =>
  store.pokemons.selectedPokemons;
