
import { configureStore } from '@reduxjs/toolkit'

import journReducer from '../Reducers/journReducer'

const store = configureStore({
    reducer : {
      journs: journReducer,
    }
})

store.subscribe(() => console.log(store.getState()))

export default store 