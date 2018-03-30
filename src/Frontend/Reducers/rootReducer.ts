import { combineReducers } from 'redux';
import homePageReducer, { HomePageStore, homePageInitialState } from './homePageReducer';

export interface StoreState {
    homePageStore: HomePageStore;
}

export const initialState: StoreState = {
    homePageStore: homePageInitialState
};

const reducers = {
    homePageStore: homePageReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;