import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/SubmitResarchReducer';


export default configureStore({
  reducer: counterReducer
})