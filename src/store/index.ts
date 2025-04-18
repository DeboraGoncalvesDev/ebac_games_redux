import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import api from '../services/apis'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddeleware) =>
    getDefaultMiddeleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
