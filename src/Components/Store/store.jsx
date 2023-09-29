
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import journReducer from '../../Reducers/journReducer'
import journCardReducer from '../../reducers/journCardReducer'
import hoveredReducer from '../../reducers/hoveredReducer'
import thunk from 'redux-thunk'

const store = configureStore({
    reducer : {
      journs: journReducer,
      journCards : journCardReducer,
      hoveredCard : hoveredReducer
    },
    middleware: [thunk]
})

store.subscribe(() => console.log(store.getState()))

export default store 