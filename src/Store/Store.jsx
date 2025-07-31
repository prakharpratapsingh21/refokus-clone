import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Reducers/CounterSlics'
import userReducer from '../Store/Reducers/userReducer'
import productReducer from '../Store/Reducers/productReducer'


export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    productReducer: productReducer,
    // Add other reducers here as needed...
  },
})

