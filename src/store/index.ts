import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import charactersData from './modules/characters/reducer';

// Opção para fazer um combine de vários reducers
const rootReducers = combineReducers({
  characters: charactersData,
});

// Configurando o store com reducers importados
const store = configureStore({
  reducer: rootReducers
});

export default store;