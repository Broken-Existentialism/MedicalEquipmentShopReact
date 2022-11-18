import { applyMiddleware, combineReducers, createStore } from "redux";
import userProfileReducer from "./reducers/userProfileReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import medicalEquipmentsReducer from "./reducers/medicalEquipmentReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    userProfile: userProfileReducer,
    medicalEquipments: medicalEquipmentsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store