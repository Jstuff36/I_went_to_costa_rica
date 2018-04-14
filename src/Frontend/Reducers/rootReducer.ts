import { combineReducers } from 'redux';
import homePageReducer, { HomePageStore, homePageInitialState } from './homePageReducer';
import galleryReducer, { GalleryStore, galleryInitialState } from './galleryReducer';

export interface StoreState {
    homePageStore: HomePageStore;
    galleryStore: GalleryStore;
}

export const initialState: StoreState = {
    homePageStore: homePageInitialState,
    galleryStore: galleryInitialState
};

const reducers = {
    homePageReducer: homePageReducer,
    galleryReducer: galleryReducer 
};

const rootReducer = combineReducers(reducers);

export default rootReducer;