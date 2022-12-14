import { applyMiddleware, combineReducers, createStore } from "redux";
import userProfileReducer from "./reducers/userProfileReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import medicalEquipmentsReducer from "./reducers/medicalEquipmentReducer";
import thunk from 'redux-thunk'
import shopCartEquipmentReducer from "./reducers/shopCartEquipmentReducer";
import filtersReducer from "./reducers/filtersReducer";
import favoriteEquipmentReducer from "./reducers/favoritesReducer";

const rootReducer = combineReducers({
    userProfile: userProfileReducer,
    medicalEquipments: medicalEquipmentsReducer,
    shopCart: shopCartEquipmentReducer,
    filters: filtersReducer,
    favorites: favoriteEquipmentReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store