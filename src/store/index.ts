import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from 'api/reduxApi';
import pokemonsReducer from './pokemonsSlice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
